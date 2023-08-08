import './index.scss'
interface Text {
  textValue: string
  setTextValue: (val: string) => void
}
const TextArea = ({textValue, setTextValue}: Text) => {
  return <textarea
    className="text-area"
    placeholder="Paste your text here..."
    value={textValue}
    onChange={(e) => setTextValue(e.target.value)}
  />
}

export default TextArea
