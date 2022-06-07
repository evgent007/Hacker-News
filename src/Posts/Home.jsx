import { useState, useEffect } from 'react'
import { getHackerNews } from '../api'
import Post from './Post'
import Button from '../Button/Button'
import Button1 from '../Button/Button1'
import './Post.css'


function Home({ btn, clickbtn }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    console.log('renderHome', btn)
    getHackerNews('newstories').then(d => setData(d.splice(0, 100)))
  }, [btn])

  // обновление данных каждую минуту

  // setTimeout(function tick() {
  //   setYes(!yes)
  //   console.log('render3', yes)
  //   setTimeout(tick, 60000) // (*)
  // }, 60000)

  // setInterval(() => setYes(!yes),console.log('render3', yes), 60000)

  // медленный скрол
  // скролит страницу вверх
  function scroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  // let s
  // let timer
  // function scroll() {
  //   if (s > 0) {
  //     window.scrollTo(0, s)
  //     s = s - 1000
  //     timer = setTimeout(scroll,100)
  //   } else {
  //     clearTimeout(timer)
  //     window.scrollTo(0, 0)
  //   }
  // }

  return (
    <>
      {/* кнопка на стронице */}
      {/* <div className="btnposts">
        <Button click={clickbtn} text="ОБНОВИТЬ"/>
      </div> */}

      <ol className="cont">
        {data &&
          data.map(d => (
            <li className="post color" key={d}>
              <Post data={d} />
            </li>
          ))}
      </ol>
      <div className="btn1">
        <Button1 scroll={scroll} />
      </div>
    </>
  )
}

export default Home
