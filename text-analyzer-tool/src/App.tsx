import './App.scss'
import { useEffect, useState } from 'react'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { pronouns } from './data/pronouns'

export interface TextDetail {
  words: number
  chars: number
  sentences: number
  paragraph: number
  pronouns: number
  avgReadingTime: number
  longestWord: string
}
const initialDetails: TextDetail = {
  words: 0,
  chars: 0,
  sentences: 0,
  paragraph: 0,
  pronouns: 0,
  avgReadingTime: 0,
  longestWord: ''
}

const App = () => {
  const [textArea, setTextArea] = useState('')
  const [textDetail, setTextDetail] = useState<TextDetail>(initialDetails)

  const parseText = () => {
    const trimText = textArea.trim()
    const chars = trimText.split('').length
    const words = trimText.split(' ')
    let wordCount = 0
    words.forEach((val: string) => {
      if (val.length > 0) {
        wordCount++
      }
    })
    let pronounCount = 0
    words.forEach((w: string) => {
      const formattedWord = w.toLowerCase().replace(/[?.,!]/, '')
      if (pronouns.indexOf(formattedWord) !== -1) {
        pronounCount++
      }
    })

    const sentences = trimText.split(/[.!?]/)
    let sentenceCount = 0
    sentences.forEach((val: string) => {
     if (val.length > 0) {
       sentenceCount++
     }
    })
    const paragraph = trimText.split(/[\n]/)
    let paragraphCount = 0
    paragraph.forEach((val: string) => {
      if (val.length > 0) {
        paragraphCount++
      }
    })

    const sortedWords = words.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}))
    console.log('sortedWords', sortedWords)

    setTextDetail({
      words: wordCount,
      chars: chars,
      sentences: sentenceCount,
      paragraph: paragraphCount,
      pronouns: pronounCount,
      avgReadingTime: 0,
      longestWord: ''
    })
  }


  useEffect(() => {
    if (textArea.length > 0)
          parseText()
  }, [textArea])

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox results={textDetail} />
          <TextArea textValue={textArea} setTextValue={setTextArea}/>
          <BottomResultBox avaReadingTime={textDetail.avgReadingTime} longestWord={textDetail.longestWord} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
