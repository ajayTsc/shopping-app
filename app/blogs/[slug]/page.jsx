import BlogDetail from '@/components/blog/BlogDetails';
import { notFound } from 'next/navigation';

const blogs = [
  {
    slug: 'top-10-gadgets-2025',
    title: 'Top 10 Gadgets You Need in 2025',
    image: '/images/gadgets.webp',
    date: 'Dec 20, 2025',
    content: [
      'Technology in 2025 continues to amaze us with innovations that make everyday life easier and more connected.',
      'From AI-powered smart homes to ultra-fast portable devices, these are the top 10 gadgets everyone is talking about this year.',
      'Whether you are a tech enthusiast or just love new gadgets, these must-haves will make your life more efficient and enjoyable.',
    ],
  },
  {
    slug: 'how-to-choose-the-right-laptop',
    title: 'How to Choose the Right Laptop',
    image: '/images/laptop.jpg',
    date: 'Nov 15, 2025',
    content: [
      'Choosing a laptop in 2025 can be overwhelming with so many models available and new technologies emerging.',
      'Consider your use case — gaming, productivity, or travel — and strike the right balance between performance, portability, and price.',
      'Top brands like Apple, Dell, and ASUS continue to innovate, while new players are introducing budget-friendly, powerful alternatives.',
    ],
  },
  {
    slug: 'smart-shopping-tips-2025',
    title: '5 Smart Shopping Tips for 2025',
    image: '/images/tips.webp',
    date: 'Oct 5, 2025',
    content: [
      'Online shopping has become easier than ever, but smart decisions still make the difference between saving and overspending.',
      'Compare prices, check verified reviews, and use reliable sources to ensure product authenticity.',
      'Set alerts for discounts, leverage festive sales, and use trusted apps like Shopping App for safe, secure, and value-driven purchases.',
    ],
  },
  {
    slug: 'fashion-trends-2025',
    title: 'Top Fashion Trends You Can not Miss in 2025',
    image: '/images/lifestyle.webp',
    date: 'Sep 28, 2025',
    content: [
      '2025 is all about sustainability, comfort, and creativity. Expect eco-friendly fabrics, earthy tones, and minimalist designs to dominate wardrobes.',
      'Fashion is blending with technology — smart fabrics, AR-powered fitting, and customizable designs are redefining how we shop and wear.',
      'Stay ahead of the style game with our exclusive insights into what’s trending this year, from global runway looks to everyday wear inspiration.',
    ],
  },
  {
    slug: 'top-5-home-gadgets',
    title: 'Top 5 Home Gadgets for Smart Living',
    image: '/images/feature.jpg',
    date: 'Dec 10, 2025',
    content: [
      'Turn your home into a smart space with these innovative devices designed for modern convenience and efficiency.',
      'From AI-powered assistants to automated cleaning gadgets and smart lighting, 2025 brings new ways to simplify daily routines.',
      'Explore our curated list of top smart gadgets that combine technology, comfort, and energy-saving solutions.',
    ],
  },
  {
    slug: 'online-shopping-safety',
    title: 'Ultimate Guide to Online Shopping Safely',
    image: '/images/ultimate.png',
    date: 'Nov 25, 2025',
    content: [
      'Online shopping offers convenience, but its important to stay alert and protect your data.',
      'Use trusted platforms, avoid suspicious links, and always check website security before entering payment details.',
      'Follow our complete guide to make your e-commerce experience safe, secure, and hassle-free.',
    ],
  },
];

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogDetail blog={blog} />
    </div>
  );
}
