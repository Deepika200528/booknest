import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white text-xl">📚</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">BookNest</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-700 font-medium">U</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl shadow-md p-6 mb-8 text-white">
          <h1 className="text-2xl font-bold mb-2">Welcome back!</h1>
          <p className="opacity-90">Manage your book collection and explore new features.</p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/books" className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm transition duration-150">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <span className="text-indigo-600 text-xl">📚</span>
                </div>
                <span className="font-medium text-gray-800">View All Books</span>
              </div>
            </Link>

            <Link href="/books/add" className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm transition duration-150">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <span className="text-green-600 text-xl">➕</span>
                </div>
                <span className="font-medium text-gray-800">Add New Book</span>
              </div>
            </Link>

            <Link href="/profile" className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm transition duration-150">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <span className="text-blue-600 text-xl">👤</span>
                </div>
                <span className="font-medium text-gray-800">My Profile</span>
              </div>
            </Link>

            <Link href="/settings" className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm transition duration-150">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
                  <span className="text-yellow-600 text-xl">⚙️</span>
                </div>
                <span className="font-medium text-gray-800">Settings</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Activity and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Reading Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Reading Statistics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Books Read</span>
                  <span>24</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Currently Reading</span>
                  <span>3</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '30%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Want to Read</span>
                  <span>12</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recently Added Books */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Recently Added</h3>
              <Link href="/books" className="text-sm text-indigo-600 hover:text-indigo-800">View All</Link>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition">
                  <div className="w-12 h-16 bg-gray-200 rounded"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">Book Title {item}</h4>
                    <p className="text-sm text-gray-500">Author Name</p>
                  </div>
                  <div className="text-sm text-gray-500">2 days ago</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Quick Tips</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span className="text-gray-700">Use tags to categorize your books for easier searching</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span className="text-gray-700">Set reading goals to track your progress</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span className="text-gray-700">Export your library data for backup</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}