import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { handleDelete } from "@/app/(api-actions)/actions";
import { BlogCard } from "@/types/BlogCard";

export const BlogPostCard = ({ data }: BlogCard) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-gray-200 bg-gray-200
      shadow-md transition-all hover:shadow-lg p-4 flex flex-col gap-4"
    >
      <Link href={`/post/${data.id}`} className="block">
        <div className="relative h-48 w-full overflow-hidden rounded-md">
          <Image
            src={data.imageUrl}
            alt="Image for blog"
            fill
            className="object-cover transition-tranform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-gray-900 mb-2 text-lg font-semibold">
            {data.title}
          </h3>

          <p className="text-gray-700 mb-6 text-sm line-clamp-2">
            {data.content}
          </p>
          <div className="flex items-center justify-between text-gray-700">
            <div className="flex justify-between items-center space-x-2">
              <p className="text-gray-700 text-m mr-6">Author: </p>
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image
                  src={data.authorImage}
                  alt={data.authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <p>{data.authorName}</p>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex justify-between">
        <div className="flex items-center">
          <time className="text-xs text-gray-500">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }).format(data.createdAt)}
          </time>
        </div>
        <div className="flex flex-row gap-4">
          <form action={handleDelete} className="mt-auto">
            <input type="hidden" name="id" value={data.id} />
            <Button
              type="submit"
              variant="ghost"
              className="cursor-pointer bg-gray-700"
            >
              Delete post
            </Button>
          </form>
          <Link
            href={`/dashboard/editPost/${data.id}`}
            className={`${buttonVariants({
              variant: "ghost",
            })} bg-blue-500 cursor-pointer`}
          >
            Edit Post
          </Link>
        </div>
      </div>
    </div>
  );
};
