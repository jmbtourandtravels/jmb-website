// /src/app/blogs/page.jsx
'use client'
import React from 'react';
import { blogData } from './blogData';

// Helper component for the individual blog card
const BlogCard = ({ post }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/600x400/f0f0f0/333?text=Post+Image";
  };

  return (
    <div className="group bg-[#F4F1EA] p-5 transition-shadow duration-300 hover:shadow-xl shadow-md overflow-hidden flex flex-col">
      {/* Image Container with Date Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-62 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={handleImageError}
        />

        {/* Date Overlay (Yellow block) */}
        <div className="absolute top-0 left-0 bg-[#FFD700] text-black text-xs font-bold uppercase p-2 pt-3 rounded-br-lg shadow-md">
          <div className="text-2xl leading-none">{post.day}</div>
          <div className="leading-none">{post.month}</div>
        </div>
      </div>

      {/* Content Area */}
      <div className="pt-6 flex flex-col flex-grow">
        {/* Metadata (Author and Comments) */}
        <div className="flex items-center text-sm text-gray-600 mb-2 font-semibold border-b border-gray-100 pb-3">
          <span className="flex items-center mr-4">
            <span role="img" aria-label="Author" className="mr-1 text-yellow-500">✍️</span>
            By {post.author}
          </span>
          {/* <span className="flex items-center">
            <span role="img" aria-label="Comments" className="mr-1 text-yellow-500">💬</span>
            {post.comments} Comments
          </span> */}
        </div>

        {/* Category */}
        <div className="mb-2">
          <span className="inline-block bg-[#FFD700] text-black text-xs px-2 py-1 rounded font-semibold">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 leading-snug flex-grow">
          <a href={`/blogs/${post.slug}`} className="hover:text-[#FFD700] transition duration-150">
            {post.title}
          </a>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {post.excerpt}
        </p>

        {/* Read Time and Read More Link */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-gray-500 font-medium">
            {post.readTime}
          </span>
          <a 
            href={`/blogs/${post.slug}`} 
            className="flex items-center text-gray-800 text-sm font-semibold hover:text-[#FFD700] transition duration-150"
          >
            <span className="mr-2">Read More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transform group-hover:translate-x-1 transition duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const AllBlogs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="relative w-full h-[25vh] md:h-[40vh]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/blogs/blogsbanner.png"
            alt="All Blogs Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 heading-font">
              All Blogs
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Discover the latest insights about cab services and travel in Indore
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid Content Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {blogData.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AllBlogs;