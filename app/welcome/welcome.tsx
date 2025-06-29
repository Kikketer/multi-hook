import { books as initialBooks } from './data'
import { useBooks } from './hooks/useBooks'
import { useChapters } from './hooks/useChapters'
import { useJump } from './hooks/useJump'

export function Welcome() {
  const { currentBook, setBook, books } = useBooks({ initialBooks })
  const { currentChapter, setChapter } = useChapters({
    book: currentBook,
  })

  const { jumpToChapter } = useJump({
    books,
    setBook,
    setChapter,
  })

  console.log('Re-render ', currentBook)

  return (
    <main className="flex p-4 justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col gap-16 min-h-0">
        <div>
          <h1>Title: {currentBook?.name}</h1>
          <h2>Chapter: {currentChapter?.name}</h2>
          <p>Text: {currentChapter?.text}</p>
        </div>

        <div>
          <p className="font-bold">Books:</p>
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <button onClick={() => setBook(book)} type="button">
                  {book.name}
                </button>
                <ul>
                  {book.chapters.map((chapter) => (
                    <li className="pl-4" key={chapter.id}>
                      <button
                        onClick={() =>
                          jumpToChapter({
                            book,
                            chapter,
                          })
                        }
                        type="button"
                      >
                        {chapter.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
