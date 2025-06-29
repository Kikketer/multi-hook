import { useAtom } from 'jotai'
import type { Book, Chapter } from '../data'
import { jumpToChapterAtom } from '../atoms'

export const useJump = () => {
  const [_, jumpToChapter] = useAtom(jumpToChapterAtom)
  // The jumpToChapter is now handled by the atoms:
  // const jumpToChapter = ({
  //   book,
  //   chapter,
  // }: {
  //   book: Book
  //   chapter: Chapter
  // }) => {
  //   // This is where I need to queueMicrotask to avoid setting the chapter
  //   // before the book is set.
  //   setBook(book)
  //   setChapter(chapter)
  // }

  return { jumpToChapter }
}
