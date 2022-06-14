import './Button.css'

export default function Button(props) {

  function handlerClick(e) {
    e.target.className = 'btnclick'
    setTimeout(() => (e.target.className = 'btn'), 500)
    props.onClick()
  }
  return (
    <button {...props} onClick={handlerClick} title={props.children}>
      {props.children}
    </button>
  )
}
