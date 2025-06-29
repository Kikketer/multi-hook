import type { Book, Chapter } from '../data'

export const useJump = ({
  books,
  setBook,
  setChapter,
}: {
  books: Book[]
  setBook: (book: Book) => void
  setChapter: (chapter: Chapter) => void
}) => {
  const jumpToChapter = ({
    book,
    chapter,
  }: {
    book: Book
    chapter: Chapter
  }) => {
    // This is where I need to queueMicrotask to avoid setting the chapter
    // before the book is set.
    setBook(book)
    setChapter(chapter)
  }

  return { jumpToChapter }
}
