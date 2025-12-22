
'use client';
import ProductDetail from '@/components/ProductDetail';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const { id } = useParams();

  return <ProductDetail productId={id} />;
}
