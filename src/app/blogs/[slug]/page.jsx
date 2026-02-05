import React from 'react';
import { notFound } from 'next/navigation'; // Import notFound
import { getBlogBySlug, getAllSlugs } from '../blogData';

// Generate static params for all blog slugs
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  // Await params in Next.js 15+
  const { slug } = await params; 
  const blog = getBlogBySlug(slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${blog.title} | Cab Services Indore`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      type: 'article',
    },
  };
}

// Change to async component to await params
const BlogDetail = async ({ params }) => {
  // Await the params to get the slug
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  // If blog doesn't exist, trigger the not-found.js file
  if (!blog) {
    notFound(); 
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="relative w-full h-[40vh]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <div className="mb-4">
              <span className="inline-block bg-[#FFD700] text-black text-sm px-3 py-1 rounded-full font-semibold">
                {blog.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-lg">
              <span className="flex items-center">
                <span role="img" aria-label="Author" className="mr-2">✍️</span>
                By {blog.author}
              </span>
              <span className="flex items-center">
                <span role="img" aria-label="Date" className="mr-2">📅</span>
                {new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center">
                <span role="img" aria-label="Read time" className="mr-2">⏱️</span>
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-12 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#F2EFE8] p-5 shadow-lg overflow-hidden">
            {/* Featured Image */}
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#FDD700] text-gray-700 text-sm px-3 py-1 rounded-full border border-gray-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Blog Content */}
              <article 
                className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-800 prose-ul:list-disc prose-ol:list-decimal"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Blog Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <a 
                    href="/blogs"
                    className="flex items-center bg-[#FFD700] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FDD700] transition duration-200"
                  >
                    <span className="mr-2">←</span>
                    Back to All Blogs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;