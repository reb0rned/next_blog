// app/post/[id]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/app/utils/db";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const data = await prisma.blogPost.findFirst({
    where: {
      id,
    },
  });

  if (!data) return notFound();

  return (
    <article className="max-w-4xl mx-auto p-4 md:p-6 lg:p-10">
      <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg mb-6">
        <Image
          src={data.imageUrl}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {data.title}
      </h1>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
        <div className="flex items-center space-x-3">
          <div className="relative size-10 overflow-hidden rounded-full">
            <Image
              src={data.authorImage}
              alt={data.authorName}
              fill
              className="object-cover"
            />
          </div>
          <p className="font-medium text-gray-300">{data.authorName}</p>
        </div>
        <time className="text-gray-300">
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }).format(data.createdAt)}
        </time>
      </div>

      <div className="prose prose-lg max-w-none text-white mb-5">
        <p>{data.content}</p>
      </div>

      <div className="flex justify-end">
        <Link
          href="/"
          className={`${buttonVariants({
            variant: "ghost",
          })} bg-blue-500`}
        >
          Go back
        </Link>
      </div>
    </article>
  );
}
