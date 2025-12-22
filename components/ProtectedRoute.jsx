'use client';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ProtectedRoute({ children }) {
  const { user, token } = useSelector(state => state.auth);
  const router = useRouter();
  if (user && token) return <>{children}</>;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Oops! You need to login</h1>
      <p className="mb-6 text-gray-700 text-lg">
        You are trying to access a page without login. Please login to continue.
      </p>
      <button
        onClick={() => router.push('/login')}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Go to Login
      </button>
    </div>
  );
}
