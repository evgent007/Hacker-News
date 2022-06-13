import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'
import { useState } from 'react'
import './App.css'

function App() {
  const [btn, setBtn] = useState(true)
  //  по кнопке обновляем данные с сервера на странице
  function onClickBtn() {
    window.scrollTo(0, 0) // скролит страницу вверх
    setBtn(!btn)
  }

  return (
    <Router>
      <div className="container">
        <Header clickbtn={onClickBtn} />
        <Main btn={btn} clickbtn={onClickBtn} />
      </div>
    </Router>
  )
}
export default App
