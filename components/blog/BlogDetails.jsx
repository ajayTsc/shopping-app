'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BlogDetail({ blog }) {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Blog Details
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Explore insights, guides, and stories from our latest blogs.
        </p>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-4">
        <button
          onClick={() => router.push('/blogs')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors cursor-pointer"
        >
          <ArrowLeft size={18} />
          Back to Blogs
        </button>
      </div>
      <article className="max-w-3xl mx-auto bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
        <Image
          src={blog.image}
          alt={blog.title}
          width={700}
          height={350}
          className="w-full h-52 sm:h-64 object-fit"
        />

        <div className="p-5 sm:p-6 space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">
            {blog.title}
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm">{blog.date}</p>

          <div className="space-y-3 text-gray-700 leading-relaxed">
            {blog.content.map((para, i) => (
              <p key={i} className="text-sm sm:text-base">
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
