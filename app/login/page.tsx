'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">🔐 Login to BookNest</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-indigo-700 hover:underline font-medium">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
