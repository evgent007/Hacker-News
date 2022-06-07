import './Button'
import icon from '../img/iconmonstr-caret-up-filled-96.png'

export default function Button1({ scroll }) {
  const rootElement = document.documentElement
  const elem = document.querySelector('#scrol')

  function handleScroll() {
    // Do something on scroll
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if (rootElement.scrollTop / scrollTotal < 0.2) {
      // скрыть элемент
      elem.classList.add('notshow')
    } else {
      // показать элемент
      elem.classList.remove('notshow')
    }
  }

  document.addEventListener('scroll', handleScroll)

  return (
    <>
      <img id="scrol" className="scrol notshow" src={icon} alt="up" onClick={scroll} />
    </>
  )
}
