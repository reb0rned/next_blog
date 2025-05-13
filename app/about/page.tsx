import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-gray-300 rounded-xl py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About This Blog
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Welcome to my personal blog where I share my thoughts, ideas, and
            experiences on technology, design, and life. Here you'll find
            articles, tutorials, and stories that inspire and inform.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-center text-3xl font-semibold text-gray-900 mb-4">
              Who Am I?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Hi, I’m Dmytro, a passionate developer with a love for building
              user-friendly web applications. My journey in tech started a few
              years ago, and since then, I've fallen in love with coding,
              design, and sharing my knowledge through writing.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              When I'm not coding, you can find me exploring new technologies,
              experimenting with design, or writing about my experiences on this
              blog.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            My Mission
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            My goal with this blog is to help fellow developers, designers, and
            tech enthusiasts learn and grow. I believe in the power of sharing
            knowledge and empowering others to create amazing things.
          </p>
        </div>
      </div>
    </section>
  );
}
