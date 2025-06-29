import { useAtom } from 'jotai'
import { currentChapterDerivedAtom } from '../atoms'

export const useChapters = () => {
  // The state and crazy "set the state when book changes" is now handled in the atoms
  // const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null)

  // // Because the initial useState only gets set on initial render:
  // useEffect(() => {
  //   if (book) {
  //     setCurrentChapter(book.chapters[0])
  //   }
  // }, [book])

  // const setChapter = (chapter: Chapter) => {
  //   setCurrentChapter(chapter)
  // }

  const [currentChapter] = useAtom(currentChapterDerivedAtom)

  return {
    currentChapter,
  }
}
