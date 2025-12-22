'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

export default function SignupPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading } = useSelector(state => state.auth);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = async (e)=> {
    e.preventDefault();

    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    let isValid = true;

    if (username.trim() === '') {
      setUsernameError('Username is required.');
      isValid = false;
    }

    if (email.trim() === '') {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Enter a valid email address.');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      isValid = false;
    }
    if (!isValid) return;

   
    const formData = { username, email, password };
    const res = await dispatch(signupUser(formData));

    if (res.meta.requestStatus === 'fulfilled') {
      toast.success('Account created successfully');
      setTimeout(() => router.push('/login'), 1000);
    } else {
      toast.error('Signup failed. Please try again.');
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create Your Account
        </h2>

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
              className={`w-full p-2 border rounded-md focus:ring-2 text-gray-800 ${
                usernameError
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
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                setEmailError(''); 
              }}
              className={`w-full p-2 border rounded-md focus:ring-2 text-gray-800 ${
                emailError
                  ? 'border-red-500 focus:ring-red-300'
                  : 'focus:ring-blue-300'
              }`}
            />
            {emailError && (
              <p className="text-red-500 text-xs mt-1">{emailError}</p>
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
                className={`w-full p-2 border rounded-md focus:ring-2 text-gray-800 ${
                  passwordError
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
            className={`w-full bg-blue-600 text-white py-2.5 rounded-md font-medium tracking-wide hover:bg-blue-700 cursor-pointer  ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <span
            onClick={() => router.push('/login')}
            className="text-blue-600 font-medium hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
