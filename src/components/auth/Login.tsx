'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPasswordMsg, setShowForgotPasswordMsg] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="h-screen bg-white relative">
      <Header />
      <div className="px-7 p-4">
        <div className="mt-3">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>

        <div className="bg-white mx-auto rounded-xl w-full py-7">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={username}
                  placeholder="Email or mobile number"
                  className="p-4 rounded-[5px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  className="p-4 rounded-[5px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="button" className="text-sky-600 hover:underline font-semibold mt-3" onClick={() => setShowForgotPasswordMsg(!showForgotPasswordMsg)}>
              Forgot password?
            </button>
            {showForgotPasswordMsg && (
              <p className="text-xs mt-2 text-red-600">Check your email for the link to set a new password.</p>
            )}
            <div className="flex flex-col items-center justify-between gap-2 mt-8">
              <button type="submit" className="p-4 bg-sky-600 w-full text-white font-semibold rounded-full">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
