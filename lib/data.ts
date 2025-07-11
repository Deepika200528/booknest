// lib/data.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// ✅ Fetch books with search and sort functionality
export async function fetchBooks(search: string = '', sort: string = 'recent') {
  return await prisma.book.findMany({
    where: {
      OR: [
        { title: { contains: search, mode: 'insensitive' } },
        { author: { contains: search, mode: 'insensitive' } },
        { genre: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy:
      sort === 'title'
        ? { title: 'asc' }
        : sort === 'author'
        ? { author: 'asc' }
        : { createdAt: 'desc' }, // default: recent
  });
}

// ✅ Get a single book by ID
export async function getBookById(id: string) {
  return await prisma.book.findUnique({
    where: { id }, // id is a string (uuid)
  });
}

// ✅ Update book by ID
export async function updateBook(updatedBook: {
  id: string;
  title: string;
  author: string;
  genre: string;
  price: number;
  imageUrl?: string;
}) {
  return await prisma.book.update({
    where: { id: updatedBook.id }, // id is string
    data: {
      title: updatedBook.title,
      author: updatedBook.author,
      genre: updatedBook.genre,
      price: updatedBook.price,
      imageUrl: updatedBook.imageUrl,
    },
  });
}
