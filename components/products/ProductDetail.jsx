
'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity, removeFromCart } from '@/redux/slices/cartSlice';
import LoadingSkeleton from './products/ProdectDetailLoading';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Trash2 } from 'lucide-react';
import ProtectedRoute from './ProtectedRoute';

export default function ProductDetail({ productId }) {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart?.cartItems || []);
  const cartItem = cart.find(item => item.id === Number(productId));

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => setProduct(res.data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [productId]);

  const handleAdd = () => dispatch(addToCart({ ...product, quantity: 1 }));
  const handleIncrement = () =>
    dispatch(updateQuantity({ id: product.id, quantity: (cartItem?.quantity || 0) + 1 }));
  const handleDecrement = () =>
    cartItem?.quantity > 1 &&
    dispatch(updateQuantity({ id: product.id, quantity: cartItem.quantity - 1 }));
  const handleRemove = () => dispatch(removeFromCart(product.id));

  if (loading) return <LoadingSkeleton />;

  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto mt-24 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
          Product Details
        </h1>

        {product ? (
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row gap-10 border border-gray-300">
            <div className="md:w-1/2 flex justify-center items-center bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="h-80 w-auto object-contain rounded-lg"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
                <p className="text-sm text-gray-500 capitalize mb-4">{product.category}</p>
                <p className="text-xl font-semibold text-blue-700 mb-3">Rs. {product.price}/-</p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {product.description}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {cartItem ? (
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleDecrement}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-300 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{cartItem.quantity}</span>
                    <button
                      onClick={handleIncrement}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-300 cursor-pointer"
                    >
                      +
                    </button>

                    <button
                      onClick={handleRemove}
                      className="ml-4 flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 cursor-pointer"
                    >
                      <Trash2 size={16} /> Remove
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleAdd}
                    className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-all w-fit cursor-pointer"
                  >
                    Add to Cart
                  </button>
                )}
              </div>

              <button
                onClick={() => router.push('/products')}
                className="mt-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
              >
                <ArrowLeft size={18} /> Back to Products
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-300 text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Product Not Found</h2>
            <p className="text-gray-600 mb-6">
              Sorry the product you are looking for does not exist or may have been removed.
            </p>
            <button
              onClick={() => router.push('/products')}
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Back to Products
            </button>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
