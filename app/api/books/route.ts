import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { title, author, genre, price, imageUrl } = await request.json();
    
    const book = await prisma.book.create({
      data: {
        title,
        author,
        genre,
        price: parseFloat(price), // ✅ important
        imageUrl
      }
    });

    return NextResponse.json(book, { status: 201 });
  } catch (error) {
    console.error('Error adding book:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
