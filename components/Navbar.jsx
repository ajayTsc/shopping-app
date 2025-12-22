'use client';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter, usePathname } from 'next/navigation';
import { logout } from '@/redux/slices/authSlice';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const { user } = useSelector(state => state.auth);
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === '/login' || pathname === '/signup') return null;

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  const uniqueItemsCount = cartItems.length;

  return (
   <nav className="fixed top-0 w-full z-50 bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 lg:px-13 py-4">
      <h1
        className="text-2xl font-bold cursor-pointer hover:text-gray-200"
        onClick={() => router.push('/products')}
      >
        Shopping-App
      </h1>

      <div className="flex items-center space-x-4">
     
        <button
          onClick={() => router.push('/cart')}
          className="relative flex items-center p-2 rounded hover:bg-blue-500 transition-all cursor-pointer"
        >
          <ShoppingCart size={24} />
          {uniqueItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {uniqueItemsCount}
            </span>
          )}
        </button>

        {user && (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-400 px-3 py-1 rounded-md transition-all cursor-pointer"
          >
            Logout
          </button>
        )}
      </div>
      </div>
    </nav>
  );
}
