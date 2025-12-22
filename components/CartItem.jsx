'use client';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '@/redux/slices/cartSlice';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () =>
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = () => dispatch(removeFromCart(item.id));

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border border-gray-300 rounded-lg p-4 bg-white shadow-sm w-full">
      <div className="flex items-center gap-4 w-full md:w-2/3">
        <Link
          href={`/product/${item.id}`}
          className="flex flex-col sm:flex-row items-center gap-4 w-full"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 sm:w-20 sm:h-20 object-contain rounded-lg border bg-white border-gray-300 p-2"
          />
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 text-sm">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 capitalize">{item.category}</p>
            <p className="text-base sm:text-lg font-bold text-blue-700 mt-1">Rs. {item.price}/-</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 md:mt-0 md:w-auto">
        <div className="flex items-center border rounded-md overflow-hidden ">
          <button
            onClick={handleDecrement}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 sm:px-3 sm:py-1.5 cursor-pointer"
          >
            <Minus size={16} />
          </button>
          <span className="px-4 py-1 text-sm font-medium text-gray-800 bg-gray-50 min-w-8 text-center">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrement}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 sm:px-3 sm:py-1.5 cursor-pointer"
          >
            <Plus size={16} />
          </button>
        </div>

        <button
          onClick={handleRemove}
          className="flex items-center gap-1 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600  text-sm  w-full sm:w-auto justify-center cursor-pointer"
        >
          <Trash2 size={16} />
          <span className="font-medium">Remove</span>
        </button>
      </div>
    </div>
  );
}
