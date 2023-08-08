import './index.scss'
import { TextDetail } from '../../App'

const ResultBox = ({ results } : any)  => {
  const resultBar = [
    {
      title: 'Words',
      value: results?.words,
    },
    {
      title: 'Characters',
      value: results?.chars,
    },
    {
      title: 'Sentences',
      value: results?.sentences,
    },
    {
      title: 'Paragraphs ',
      value: results?.paragraph,
    },
    {
      title: 'Pronouns',
      value: results?.pronouns,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
