import { useAtom } from 'jotai'
import { booksAtom, currentBookDerivedAtom } from '../atoms'
import { useEffect } from 'react'
import { books as initialBooks } from '../data'

export const useBooks = () => {
  // Basically remove all state variables from the hooks and replace with atoms
  // const [books, setBooks] = useState<Book[]>(initialBooks)
  // const [currentBook, setCurrentBook] = useState<Book>()

  const [books, setBooks] = useAtom(booksAtom)
  const [currentBook, setCurrentBook] = useAtom(currentBookDerivedAtom)

  useEffect(() => {
    setBooks(initialBooks)
  }, [])

  return {
    books,
    currentBook,
    setCurrentBook,
  }
}
