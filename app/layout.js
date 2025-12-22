'use client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '@/redux/store';
import { restoreUser } from '@/redux/slices/authSlice';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './globals.css';

function RestoreUserEffect({ children }) {
  const [restored, setRestored] = useState(false);
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const username = localStorage.getItem('username');
    if (token) {
      dispatch(restoreUser({ user: { username: username || 'User' }, token }));
    }
    setRestored(true);
  }, [dispatch]);

  if (!restored) return null;

  return (
    <>
      {user && <Navbar />} 
      {children}
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Provider store={store}>
          <RestoreUserEffect>
            <main className="bg-gray-50 min-h-screen">{children}</main>
            <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
          </RestoreUserEffect>
        </Provider>
      </body>
    </html>
  );
}
