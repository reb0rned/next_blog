import { MainPageCard } from "@/components/general/MainPageCard";
import { prisma } from "./utils/db";
import Link from "next/link";

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
    <div className="py-12">
      <section className="text-center mb-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-500">Reb0rnedBlog</span>
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Dive into the latest posts, tutorials, and stories from tech
          enthusiasts around the world.
        </p>
      </section>

      <section className="px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Latest posts</h2>
          <Link
            href="/dashboard"
            className="text-blue-500 hover:underline text-sm font-medium"
          >
            create your post →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <MainPageCard data={post} key={post.id} />
          ))}
        </div>
      </section>

      <section className="bg-blue-50 mt-16 py-12 rounded-xl text-center shadow-inner px-4">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Want to share your story or insights?
        </h3>
        <p className="text-gray-600 mb-6">
          Join our growing community of developers and start blogging today!
        </p>
        <Link href="/dashboard">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition cursor-pointer">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
}
