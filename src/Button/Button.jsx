import {useState} from 'react'
import './Button.css'

export default function Button(props) {
  const [clas,setClas]=useState(props.className)

  function handlerClick(e) {
    setClas('btnclick')
    setTimeout(() => setClas(props.className),300)
    // 1 вариант изменение класса при нажатии кнопки
    // e.target.className = 'btnclick'
    // setTimeout(() => (e.target.className = 'btn'), 500)
    props.onClick()
  }
  return (
    <button className= {clas} onClick={handlerClick} title={props.children}>
      {props.children}
    </button>
  )
}
