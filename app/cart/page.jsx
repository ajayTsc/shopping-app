'use client';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '@/components/CartItem';
import { clearCart } from '@/redux/slices/cartSlice';
import ProtectedRoute from '@/components/ProtectedRoute';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function CartPage() {
  const { cartItems, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const isEmpty = cartItems.length === 0;

  return (
    <ProtectedRoute>
      <div className="max-w-4xl mx-auto p-6 mt-20">
        {isEmpty ? (
          <div className="bg-white shadow-lg rounded-xl p-8 text-center flex flex-col items-center justify-center gap-4">
            <ShoppingCart size={48} className="text-gray-400" />
            <h1 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h1>
            <p className="text-gray-500">
              You have not added any items to your cart yet.
            </p>
            <Link
              href="/products"
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Go to Products
            </Link>
          </div>
        ) : (
          <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-300">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            <div className="space-y-4">
              {cartItems.map(item => <CartItem key={item.id} item={item} />)}
            </div>
            <div className="mt-6 flex justify-between items-center border-t pt-4">
              <div>
                <p className="text-lg font-medium">
                  Total Items: {cartItems.reduce((acc, cur) => acc + cur.quantity, 0)}
                </p>
                <p className="text-xl font-bold">Total Price: Rs. {totalPrice.toFixed(2)}/-</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
                >
                  Clear
                </button>
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
                  onClick={() => router.push('/products')}
                >
                  Back to product
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
