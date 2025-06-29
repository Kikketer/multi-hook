import { useState } from 'react'
import type { Book } from '../data'

export const useBooks = ({ initialBooks }: { initialBooks: Book[] }) => {
  const [books, setBooks] = useState<Book[]>(initialBooks)
  const [currentBook, setCurrentBook] = useState<Book>()

  const setBook = (book: Book) => {
    setCurrentBook(book)
  }

  return {
    books,
    currentBook,
    setBook,
  }
}
