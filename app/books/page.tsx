import { fetchBooks } from '@/lib/data';
import Link from 'next/link';
import { FiBookOpen, FiPlus, FiSearch, FiFilter, FiEdit } from 'react-icons/fi';

export default async function BooksPage() {
  const books = await fetchBooks();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <FiBookOpen className="h-6 w-6" />
            <span className="ml-2">BookNest Library</span>
          </h1>
          <div className="flex items-center space-x-4">
            <Link 
              href="/books/add" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FiPlus className="h-4 w-4" />
              <span className="ml-2">Add Book</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Bar */}
        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search books by title, author, or genre"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-3">
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <FiFilter className="h-4 w-4 mr-2" />
                Filter
              </button>
              <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>Sort by Recent</option>
                <option>Sort by Title</option>
                <option>Sort by Author</option>
              </select>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="mb-8">
          {books.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
              <FiBookOpen className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No books found</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by adding a new book to your collection.</p>
              <div className="mt-6">
                <Link
                  href="/books/add"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <FiPlus className="h-4 w-4 mr-2" />
                  Add Book
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Showing {books.length} {books.length === 1 ? 'book' : 'books'}
                </h2>
                <div className="text-sm text-gray-500">
                  <span className="hidden sm:inline">Books per page:</span>
                  <select className="ml-2 border-0 bg-transparent text-gray-700 focus:ring-indigo-500 focus:border-indigo-500">
                    <option>12</option>
                    <option>24</option>
                    <option>48</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {books.map((book) => (
                  <div key={book.id} className="group relative bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-150">
                    <Link href={`/books/${book.id}`} className="block">
                      <div className="p-5">
                        <div className="flex items-center justify-center h-40 bg-gray-100 rounded mb-4">
                          {book.imageUrl ? (
                            <img 
                              src={book.imageUrl} 
                              alt={book.title}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <FiBookOpen className="h-12 w-12 text-gray-400" />
                          )}
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 line-clamp-1">
                          {book.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-1">by {book.author}</p>
                        <div className="mt-3 flex justify-between items-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            {book.genre}
                          </span>
                          <span className="text-xs text-gray-500">
                            ${book.price?.toFixed(2) || 'N/A'}
                          </span>
                        </div>
                      </div>
                    </Link>

                    {/* Edit Button */}
                    <Link
                      href={`/books/edit/${book.id}`}
                      className="absolute bottom-2 right-2 z-10 px-3 py-1.5 bg-indigo-600 text-white text-xs rounded hover:bg-indigo-700 transition"
                      title="Edit this book"
                    >
                      <FiEdit className="inline mr-1" />
                      Edit
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
