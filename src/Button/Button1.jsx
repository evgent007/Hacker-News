import { useEffect } from 'react'
import './Button'
import icon from '../img/iconmonstr-caret-up-filled-96.png'

export default function Button1({ n }) {
  //n часть страницы когда появляется стрелка вверх
  useEffect(() => {
    document.addEventListener('scroll', handlerScroll)
    return () => document.removeEventListener('scroll', handlerScroll)
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

  function handlerScroll() {
    const rootElement = document.documentElement
    const elem = document.querySelector('#scrol')
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight

    if (rootElement.scrollHeight === rootElement.offsetHeight) {
      elem.classList.add('notshow')
    } else if (rootElement.scrollTop / scrollTotal < n) {
      //n часть страницы когда появляется стрелка вверх
      // скрыть элемент
      elem.classList.add('notshow')
    } else {
      // показать элемент
      elem.classList.remove('notshow')
    }
  }

  return (
    <>
      <img id="scrol" className="notshow cursor" src={icon} alt="up" onClick={scroll} title="ВВЕРХ" />
    </>
  )
}
