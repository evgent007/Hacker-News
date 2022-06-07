import './Button.css'

export default function Button({ click, text }) {
  return (
    <button className="btn" onClick={click}>
      {text}
    </button>
  )
}
