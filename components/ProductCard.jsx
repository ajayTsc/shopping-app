'use client';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import { Eye, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const found = cartItems.some(item => item.id === product.id);
    setIsInCart(found);
  }, [cartItems, product.id]);

  const handleAddToCart = () => {
    if (!isInCart) dispatch(addToCart(product));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg flex flex-col overflow-hidden border border-gray-200 transition-transform duration-200 hover:scale-105 hover:shadow-xl">
      <Link href={`/product/${product.id}`}>
        <div className="relative bg-gray-100 w-full h-56 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain p-4 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex-1 px-4 pb-3">
        <h3 className="text-md font-semibold text-gray-800 line-clamp-2 mb-1">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 capitalize mb-1">
          {product.category}
        </p>
        <p className="text-lg font-bold text-blue-700">Rs.{product.price}/-</p>
      </div>
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 bg-gray-50">
        <Link
          href={`/product/${product.id}`}
          className="flex items-center gap-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          <Eye size={16} />
          View
        </Link>
        <button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center gap-1  ${isInCart
              ? 'bg-green-600 text-white cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
            }`}
        >
          {isInCart ? (
            <>
              <Check size={16} />
              Added
            </>
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </div>
  );
}
