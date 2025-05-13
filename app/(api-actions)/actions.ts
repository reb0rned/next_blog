'use server'

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { prisma } from "../utils/db"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export const formSubmition = async (formData: FormData) => {
const { getUser } = getKindeServerSession()
const user = await getUser()

  const title = formData.get('title')
  const content = formData.get('content')
  const imageUrl = formData.get('img')


  const data = await prisma.blogPost.create({data: {
    title: title as string,
    content: content as string,
    imageUrl: imageUrl as string,
    authorId: user?.id as string,
    authorImage: user?.picture as string,
    authorName: user?.given_name as string
  }})

  redirect('/dashboard')
}


export const handleDelete = async (formData: FormData) => {
  const id = formData.get('id') as string

  if (!id) return

  const data = await prisma.blogPost.delete({
    where: { id },
  });

  console.log(id)

  revalidatePath("/");
};