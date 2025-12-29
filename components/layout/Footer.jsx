import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Shopping App</h2>
          <p className="text-white mb-4">
            Your trusted online destination for quality products and fast delivery.
          </p>
          <div className="flex space-x-4 mt-4 text-white">
            <Link href="#" aria-label="Facebook" className="hover:text-blue-600">
              <Facebook size={22} />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-blue-600">
              <Twitter size={22} />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-blue-600">
              <Instagram size={22} />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-blue-600">
              <Linkedin size={22} />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link href="/" className="hover:underline hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:underline hover:text-blue-600">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:underline hover:text-blue-600">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
          <p className="text-white mb-4">
            Subscribe to get special offers, free giveaways, and updates.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2  border rounded-md text-white focus:outline-none w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-200"></div>
      <div className="text-center py-6 text-sm text-white">
        © {new Date().getFullYear()} Shopping App. All rights reserved. 
      </div>
    </footer>
  );
}
