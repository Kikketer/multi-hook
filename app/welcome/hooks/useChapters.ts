import { useEffect, useState } from 'react'
import type { Book, Chapter } from '../data'

export const useChapters = ({ book }: { book?: Book }) => {
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null)

  // Because the initial useState only gets set on initial render:
  useEffect(() => {
    if (book) {
      setCurrentChapter(book.chapters[0])
    }
  }, [book])

  const setChapter = (chapter: Chapter) => {
    setCurrentChapter(chapter)
  }

  return {
    currentChapter,
    setChapter,
  }
}
