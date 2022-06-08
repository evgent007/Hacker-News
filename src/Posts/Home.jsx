import { useState, useEffect } from 'react'
import { getHackerNews } from '../api'
import Post from './Post'
import Button from '../Button/Button'
import Button1 from '../Button/Button1'
import './Post.css'

function Home({ btn, clickbtn }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    getHackerNews('newstories').then(d => setData(d.splice(0, 100)))
    console.log('render1')
  }, [btn])

  useEffect(() => {
    let timer= setInterval(() => {
      getHackerNews('newstories').then(d => setData(d.splice(0, 100)))
      console.log('render1.2')
    }, 60000)
    return () =>clearInterval(timer)
  }, [])

  // медленный скрол
  // скролит страницу вверх
  function scroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

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

export { Home }
