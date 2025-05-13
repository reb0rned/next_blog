import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { BlogPostCard } from "@/components/general/BlogPostCard";

async function getData(userId: string) {
  const data = prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user?.id as string);

  return (
    <>
      <div className="flex gap-5 items-center md:mt-[10px] lg:mt-[20px]">
        <h1 className="text-2xl">Dashboard</h1>

        <Link
          href="/dashboard/createPost"
          className={`cursor-pointer ${buttonVariants({
            variant: "secondary",
          })}`}
        >
          Create Post
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[30px]">
        {data.map((blogPost) => (
          <BlogPostCard data={blogPost} key={blogPost.id} />
        ))}
      </div>
    </>
  );
}
