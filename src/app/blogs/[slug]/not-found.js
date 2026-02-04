// /src/app/blogs/[slug]/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#141414] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Blog Post Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/blogs"
          className="inline-flex items-center bg-[#FFD700] text-[#141414] font-semibold px-6 py-3 rounded-lg hover:bg-[#e6c200] transition-colors duration-200"
        >
          Back to All Blogs
        </Link>
      </div>
    </div>
  );
}