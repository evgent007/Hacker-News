import './Button.css'

export default function Button({ click, text, clName }) {

  function click1(e) {
    e.target.className = 'btnclick'
    setTimeout(() => (e.target.className = 'btn'), 700)
    click()
  }
  return (
    <button className={clName} onClick={click1} >
      {text}
    </button>
  )
}
