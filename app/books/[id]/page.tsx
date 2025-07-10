// Book Details Page
import { getBookById } from '@/lib/data';
import { FiBookOpen, FiArrowLeft, FiEdit3 } from 'react-icons/fi';
import Link from 'next/link';

export default async function BookDetailPage({ params }: { params: { id: string } }) {
  const bookId = params.id;
  const book = await getBookById(bookId);

  if (!book) {
    return (
      <div className="p-10 text-center">
        <p className="text-red-500 text-lg font-medium">Book not found.</p>
        <Link href="/books" className="mt-4 inline-block text-indigo-600 hover:underline">
          ← Back to Books
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-200 rounded-lg p-6">
        <Link
          href="/books"
          className="inline-flex items-center text-sm text-indigo-600 hover:underline mb-4"
        >
          <FiArrowLeft className="mr-1" />
          Back to Books
        </Link>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 h-72 flex items-center justify-center bg-gray-100 rounded">
            {book.imageUrl ? (
              <img
                src={book.imageUrl}
                alt={book.title}
                className="object-contain h-full w-full"
              />
            ) : (
              <FiBookOpen className="h-12 w-12 text-gray-400" />
            )}
          </div>

          <div className="w-full md:w-2/3 space-y-3">
            <h1 className="text-2xl font-bold text-gray-900">{book.title}</h1>
            <p className="text-gray-600 text-sm">by {book.author}</p>
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2.5 py-0.5 rounded">
              {book.genre}
            </span>
            <p className="text-lg font-semibold text-gray-800">${book.price?.toFixed(2)}</p>

            <div className="pt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-1">Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {/* Replace this with dynamic data if needed */}
                This book provides valuable insights and practical examples. Perfect for learners
                at all levels.
              </p>
            </div>

            <Link
              href={`/books/edit/${book.id}`}
              className="inline-flex items-center mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow hover:bg-indigo-700"
            >
              <FiEdit3 className="mr-2 h-4 w-4" />
              Edit Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
