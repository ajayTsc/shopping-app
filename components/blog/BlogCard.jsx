import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl overflow-hidden">
      <Image
        src={blog.image}
        alt={blog.title}
        width={400}
        height={250}
        className="w-full h-56 object-fit"
      />
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold ">{blog.title}</h2>
        <p className="text-gray-600 text-sm line-clamp-3">{blog.excerpt}</p>
        <div className="flex justify-between items-center pt-2">
          <span className="text-gray-500 text-xs">{blog.date}</span>
          <Link
            href={`/blogs/${blog.slug}`}
            
          >
           <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}