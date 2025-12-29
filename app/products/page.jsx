'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '@/redux/slices/productSlice';
import ProductCard from '@/components/products/ProductCard';
import ProtectedRoute from '@/components/ProtectedRoute';
import ProductCardSkeleton from '@/components/products/ProductCardLoading';

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ProtectedRoute>
      <div className="p-6 md:p-12 lg:px-20 bg-gray-50 min-h-screen">
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        )}
        {!loading && products.length === 0 && (
          <div className="flex flex-col justify-center items-center text-center h-80">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              No Products Found 
            </h2>
            <p className="text-gray-500">Please check back later.</p>
          </div>
        )}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 mt-20">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
