import { useEffect } from 'react'
import './Button'
import icon from '../img/iconmonstr-caret-up-filled-96.png'

export default function Button1({ n }) {
  //n часть стр когда появляется стрелка вверх
  // let classN = 'notshow'
  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  })

  // медленный скрол
  // скролит страницу вверх
  function scroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  function handleScroll() {
    const rootElement = document.documentElement
    const elem = document.querySelector('#scrol')
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight

    if (rootElement.scrollHeight === rootElement.offsetHeight) {
      elem.classList.add('notshow')
    } else if (rootElement.scrollTop / scrollTotal < n) {
      //n часть стр когда появляется стрелка вверх
      // скрыть элемент
      elem.classList.add('notshow')
    } else {
      // показать элемент
      elem.classList.remove('notshow')
    }
  }

  return (
    <>
      <img id="scrol" className="notshow" src={icon} alt="up" onClick={scroll} />
    </>
  )
}
