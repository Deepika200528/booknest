import { getBookById, updateBook } from '@/lib/data';
import { redirect } from 'next/navigation';
import { FiEdit3, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default async function EditBookPage({ params }: { params: { id: string } }) {
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

  // Server Action
  async function handleUpdate(formData: FormData) {
    'use server';

    const updatedBook = {
      id: bookId,
      title: formData.get('title') as string,
      author: formData.get('author') as string,
      genre: formData.get('genre') as string,
      price: parseFloat((formData.get('price') as string) || '0'),
      imageUrl: formData.get('imageUrl') as string,
    };

    await updateBook(updatedBook);
    redirect('/books');
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/books"
          className="mb-6 inline-flex items-center text-sm text-indigo-600 hover:underline"
        >
          <FiArrowLeft className="mr-1" />
          Back to Books
        </Link>

        {/* Form Card */}
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
          <h1 className="text-2xl font-bold flex items-center mb-6 text-gray-900">
            <FiEdit3 className="mr-2 h-6 w-6 text-indigo-600" />
            Edit Book
          </h1>

          <form action={handleUpdate} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={book.title}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Author</label>
              <input
                type="text"
                name="author"
                defaultValue={book.author}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Genre</label>
              <input
                type="text"
                name="genre"
                defaultValue={book.genre}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Price ($)</label>
              <input
                type="number"
                step="0.01"
                name="price"
                defaultValue={book.price}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                defaultValue={book.imageUrl || ''}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Update Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
