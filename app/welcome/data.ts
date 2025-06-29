export type Book = {
  id: string
  name: string
  chapters: Chapter[]
}

export type Chapter = {
  id: string
  name: string
  text: string
}

export const books: Book[] = [
  {
    name: 'Book One',
    id: 'book-1',
    chapters: [
      {
        id: 'b1-chapter-1',
        name: 'B1 Chapter One',
        text: 'This is chapter one',
      },
      {
        id: 'b1-chapter-2',
        name: 'B1 Chapter Two',
        text: 'This is chapter two',
      },
    ],
  },
  {
    name: 'Book Two',
    id: 'book-2',
    chapters: [
      {
        id: 'b2-chapter-1',
        name: 'B2 Chapter One',
        text: 'This is chapter one book 2',
      },
      {
        id: 'b2-chapter-2',
        name: 'B2 Chapter Two',
        text: 'This is chapter two book 2',
      },
    ],
  },
]
