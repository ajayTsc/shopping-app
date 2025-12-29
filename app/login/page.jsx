'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading } = useSelector(state => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameError('');
    setPasswordError('');

    let isValid = true;
    if (username.trim() === '') {
      setUsernameError('Username is required.');
      isValid = false;
    }
    if (password.trim() === '') {
      setPasswordError('Password is required.');
      isValid = false;
    }
    if (!isValid) return;

    const res = await dispatch(loginUser({ username, password }));
    if (res.meta.requestStatus === 'fulfilled') {
      toast.success('Login successful');
      setTimeout(() => {
        router.push('/home')
      }, 1000);
    } else {
      toast.error('Invalid username or password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 overflow-hidden m-0 p-0">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-3">
          Login
        </h2>
        <p className="text-sm text-gray-600 text-center mb-3">
          Please use the test credentials below to log in:
        </p>

        <div className="flex flex-col items-center text-sm text-gray-700 mb-6">
          <div className="flex gap-2">
            <span className="font-medium ml-4">Username:</span>
            <span>mor_2314</span>
          </div>
          <div className="flex gap-2">
            <span className="font-medium">Password:</span>
            <span>83r5^_</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={e => {
                setUsername(e.target.value);
                setUsernameError('');
              }}
              className={`w-full p-2 border rounded-md focus:ring-2 text-gray-800 ${usernameError
                  ? 'border-red-500 focus:ring-red-300'
                  : 'focus:ring-blue-300'
                }`}
            />
            {usernameError && (
              <p className="text-red-500 text-xs mt-1">{usernameError}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                  setPasswordError('');
                }}
                className={`w-full p-2 border rounded-md focus:ring-2 text-gray-800 ${passwordError
                    ? 'border-red-500 focus:ring-red-300'
                    : 'focus:ring-blue-300'
                  }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-600 hover:text-gray-900"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {passwordError && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-2.5 rounded-md font-medium tracking-wide hover:bg-blue-700 cursor-pointer ${loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Do not have an account?{' '}
          <span
            onClick={() => router.push('/signup')}
            className="text-blue-600 font-medium hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
