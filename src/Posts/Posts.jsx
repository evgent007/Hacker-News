/* eslint-disable array-callback-return */
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getHackerNews } from '../api'
import Post from './Post'
import Button from '../Button/Button'
import Button1 from '../Button/Button1'
import './Post.css'

function Posts({ btn, clickbtn }) {
  const [data, setData] = useState([])

  useEffect(() => {
    getHackerNews('newstories').then(d => setData(d.splice(0, 10)))
  }, [btn])

  return (
    <>
      <div className="btnposts">
        <Button click={clickbtn} />
      </div>

      <ol className="cont">
        {data &&
          data.map(d => (
            <Link to={`/item/${d}`} key={d}>
              <li className="post color" >
                <Post data={d} />
              </li>
            </Link>
          ))}
      </ol>
      <div className="btn1">
        <Button1 />
      </div>
    </>
  )
}

export default Posts
