import BlogCard from '@/components/blog/BlogCard';
import ProtectedRoute from '@/components/ProtectedRoute';

export const metadata = {
  title: 'Blogs | Shopping App',
  description: 'Explore latest shopping trends, tips, and guides from Shopping App.',
};

const blogs = [
  {
    id: 1,
    title: 'Top 10 Gadgets You Need in 2025',
    slug: 'top-10-gadgets-2025',
    excerpt: 'Discover the must-have tech gadgets that will make your life easier and more fun in 2025.',
    image: '/images/gadgets.webp',
    date: 'Dec 20, 2025'
  },

  {
    id: 2,
    title: 'How to Choose the Right Laptop',
    slug: 'how-to-choose-the-right-laptop',
    excerpt: 'Confused about which laptop to buy? Here a simple guide to choosing the perfect one for your needs.', image: '/images/laptop.jpg',
    date: 'Nov 15, 2025'
  },

  {
    id: 3,
    title: '5 Smart Shopping Tips for 2025',
    slug: 'smart-shopping-tips-2025',
    excerpt: 'Shop smart and save big — here are the top 5 shopping hacks for the upcoming year.',
    image: '/images/tips.webp',
    date: 'Oct 5, 2025'
  },

  {
    id: 4,
    title: 'Stay ahead of the curve with these trending styles dominating',
    slug: 'fashion-trends-2025',
    excerpt: 'Stay ahead of the curve with these trending styles dominating 2025 fashion scene.',
    image: '/images/lifestyle.webp',
    date: 'Sep 28, 2025'
  },
  {
    id: 5,
    title: 'Top 5 Home Gadgets for Smart Living',
    slug: 'top-5-home-gadgets',
    excerpt: 'Upgrade your home with these smart devices designed to make everyday life simpler and more efficient.', image: '/images/feature.jpg',
    date: 'Dec 10, 2025'
  },
  {
    id: 6,
    title: 'Ultimate Guide to Online Shopping Safely',
    slug: 'online-shopping-safety',
    excerpt: 'Learn how to shop online without risks with our complete guide on safe e-commerce practices.',
    image: '/images/ultimate.png',
    date: 'Nov 25, 2025'
  },
];

export default function BlogListPage() {
  return (
    <ProtectedRoute>
      <main className="pt-28 pb-16 bg-gray-50 min-h-screen">
        <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Latest Blogs
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Stay informed with shopping guides, tech reviews, and lifestyle tips curated by our team.
          </p>
        </section>
        <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </section>
      </main>
    </ProtectedRoute>
  );
}
