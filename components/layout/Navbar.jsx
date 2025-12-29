
'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter, usePathname } from 'next/navigation';
import { logout } from '@/redux/slices/authSlice';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname === '/login' || pathname === '/signup') return null;

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  const uniqueItemsCount = cartItems.length;

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 lg:px-12 py-4">
        <h1
          className="text-2xl font-bold cursor-pointer hover:text-gray-200"
          onClick={() => router.push('/home')}
        >
          Shopping-App
        </h1>

        <div className="hidden md:flex items-center space-x-6 cursor-pointer">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => router.push(link.path)}
              className={`hover:text-gray-200 text-lg font-medium transition-all cursor-pointer ${
                pathname === link.path ? 'underline underline-offset-4' : ''
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
     
          <button
            onClick={() => router.push('/cart')}
            className="relative flex items-center p-2 rounded hover:bg-blue-500 transition-all cursor-pointer"
          >
            <ShoppingCart size={22} />
            {uniqueItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {uniqueItemsCount}
              </span>
            )}
          </button>

          {user && (
            <button
              onClick={handleLogout}
              className="hidden md:block bg-red-500 hover:bg-red-400 px-3 py-1 rounded-md transition-all cursor-pointer"
            >
              Logout
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded hover:bg-blue-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-700 text-white flex flex-col items-center space-y-4 py-4 transition-all">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => {
                router.push(link.path);
                setIsOpen(false);
              }}
              className={`text-base hover:text-gray-300 transition ${
                pathname === link.path ? 'underline underline-offset-4' : ''
              }`}
            >
              {link.name}
            </button>
          ))}

          {user && (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md transition-all"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
