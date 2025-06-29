import { atom } from 'jotai'
import type { Book, Chapter } from './data'

// Base atoms
export const booksAtom = atom<Book[]>([]) // Initial books array
const currentBookAtom = atom<Book | undefined>(undefined)
const currentChapterAtom = atom<Chapter | undefined>(undefined)

export const currentChapterDerivedAtom = atom(
  (get) => get(currentChapterAtom)
  // This atom is read only because you need to use the "jump" atom to select the chapter and book at the same time
  // (_, set, chapter: Chapter) => {
  //   console.log('setting the current chapter', chapter)
  //   // TODO validate that the selected chapter is in the current book
  //   // One path would be to find the chapter in all the books... but our use case is that
  //   // we know what book we are in from the view side, so we create a helper "jump" atom that'll allow
  //   // setting both book AND chapter at the same time
  //   set(currentChapterAtom, chapter)
  // }
)

export const currentBookDerivedAtom = atom(
  (get) => get(currentBookAtom),
  (_, set, book: Book) => {
    console.log('setting the current book', book)
    // Set the current book to the book of the updated chapter
    set(currentBookAtom, book)
    // But then clear and default the chapter
    set(currentChapterAtom, book.chapters[0])
  }
)

export const jumpToChapterAtom = atom(
  null,
  (_, set, { book, chapter }: { book: Book; chapter: Chapter }) => {
    console.log('jumping to book and chapter')
    // Because Jotai batches these updates, they don't conflict and cause ripples
    set(currentBookAtom, book)
    set(currentChapterAtom, chapter)
  }
)
