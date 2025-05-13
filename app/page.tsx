import { MainPageCard } from "@/components/general/MainPageCard";
import { prisma } from "./utils/db";

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function Home() {
  const posts = await getData();
  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold tracking-[1px] mb-8">Latest posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => {
          return <MainPageCard data={post} key={post.id} />;
        })}
      </div>
    </div>
  );
}
