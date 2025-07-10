'use client';

import { FiUser, FiBook, FiCalendar, FiMail, FiEdit, FiLogOut } from 'react-icons/fi';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'profile' | 'books'>('profile');
  
  // Sample user data - replace with your actual data fetching
  const user = {
    name: 'Deepiga',
    email: 'deepi@gmail.com',
    joinDate: 'January 2025',
    bio: 'Book enthusiast and avid reader. Love fiction and sci-fi genres.',
    totalBooks: 3,
    currentlyReading: 1,
  };

  // Sample books data
  const userBooks = [
    { id: 1, title: 'The Silent Patient', author: 'Alex Michaelides', progress: 65 },
    { id: 2, title: 'Dune', author: 'Frank Herbert', progress: 30 },
    { id: 3, title: 'Atomic Habits', author: 'James Clear', progress: 100 },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-indigo-600 p-6 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-20 w-20 rounded-full bg-indigo-700 flex items-center justify-center text-3xl font-bold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <p className="flex items-center text-indigo-100">
                    <FiMail className="mr-1" /> {user.email}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => router.push('/profile/edit')}
                className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FiEdit className="mr-2" /> Edit Profile
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`${activeTab === 'profile' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('books')}
                  className={`${activeTab === 'books' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  My Books
                </button>
              </nav>
            </div>

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">About</h2>
                  <p className="text-gray-600">{user.bio}</p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center text-gray-600">
                      <FiCalendar className="mr-2 text-gray-400" />
                      <span>Member since {user.joinDate}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiBook className="mr-2 text-gray-400" />
                      <span>{user.totalBooks} books in collection</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Reading Stats</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Currently Reading</span>
                          <span>{user.currentlyReading}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${(user.currentlyReading / 5) * 100}%` }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Books Completed</span>
                          <span>{user.totalBooks - user.currentlyReading}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${((user.totalBooks - user.currentlyReading) / user.totalBooks) * 100}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Books Tab */}
            {activeTab === 'books' && (
              <div className="mt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {userBooks.map((book) => (
                    <div key={book.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-150">
                      <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">{book.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">by {book.author}</p>
                        
                        <div className="mt-4">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Progress</span>
                            <span>{book.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${book.progress === 100 ? 'bg-green-500' : 'bg-indigo-600'}`} 
                              style={{ width: `${book.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Logout Button */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <FiLogOut className="mr-2" /> Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}