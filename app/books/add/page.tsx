'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiBook, FiUser, FiTag, FiDollarSign, FiImage, FiPlus } from 'react-icons/fi';

export default function AddBookPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    title: '',
    author: '',
    genre: '',
    price: '',
    imageUrl: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          price: parseFloat(form.price)
        }),
      });

      if (res.ok) {
        router.push('/books');
        router.refresh();
      } else {
        throw new Error('Failed to add book');
      }
    } catch (error) {
      alert('Failed to add book. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <FiBook className="mr-2 text-indigo-600" />
              Add New Book
            </h1>
            <p className="text-gray-600 mt-1">Fill in the details below to add a new book to your collection.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Title */}
            <div className="space-y-1">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiBook className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  name="title"
                  id="title"
                  placeholder="Book Title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Author */}
            <div className="space-y-1">
              <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                Author
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  name="author"
                  id="author"
                  placeholder="Author Name"
                  value={form.author}
                  onChange={handleChange}
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Genre */}
            <div className="space-y-1">
              <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
                Genre
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiTag className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  name="genre"
                  id="genre"
                  placeholder="Genre"
                  value={form.genre}
                  onChange={handleChange}
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Price */}
            <div className="space-y-1">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price ($)
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiDollarSign className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="0.00"
                  value={form.price}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Image URL */}
            <div className="space-y-1">
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                Cover Image URL
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiImage className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="url"
                  name="imageUrl"
                  id="imageUrl"
                  placeholder="https://example.com/book-cover.jpg"
                  value={form.imageUrl}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => router.push('/books')}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Adding...'
                ) : (
                  <>
                    <FiPlus className="mr-2 h-4 w-4" />
                    Add Book
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
