import './Button.css'

export default function Button({ click }) {
  return (
    <button className="btn" onClick={click}>
      ОБНОВИТЬ
    </button>
  )
}
