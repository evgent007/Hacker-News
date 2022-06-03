import Header from '../Header/Header'
import Main from '../Main/Main'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [btn, setBtn] = useState(true)
  function onClickBtn(e) {
    e.target.className = 'btnclick'
    setInterval(() => (e.target.className = 'btn'), 500)
    console.log('onClickBtn', btn)
    setBtn(!btn)
  }
  setInterval(() => setBtn(!btn), 60000)
  console.log('render', btn)
  // useEffect(() => {
  //   console.log('render', btn)
  //   setInterval(() => setBtn(!btn), 60000)
  // })

  return (
    <div className="container">
      <Header clickbtn={onClickBtn} />
      <Main btn={btn} clickbtn={onClickBtn} />
    </div>
  )
}
export default App
