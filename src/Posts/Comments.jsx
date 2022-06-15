import { useEffect, useState } from 'react'
import { getItem } from '../api'
import HtmlText from './HtmlText'
import './Post.css'

export default function Comments({ com }) {
  return (
    <div className="marg">
      <ul className="comments">
        {com &&
          com.map(c => (
            <li key={c}>
              <GetComment com={c} />
            </li>
          ))}
      </ul>
    </div>
  )
}

function GetComment({ com }) {
  const [item, setItem] = useState({})

  useEffect(() => {
    getItem(com).then(d => setItem(d))
  }, [])

  return (
    <div className="coment color1">
      <p>
        <b>Автор : </b>
        {item.by} <b> Рейтинг : </b> ({item.score})
      </p>
      <p>
        <b> дата : </b>
        <i> {new Date(item.time * 1000).toUTCString()} </i>
      </p>
      {item.kids ? <Comm item={item} /> : item.text && <HtmlText html={item.text} />}
    </div>
  )
}

function Comm({ item }) {
  const [kids, setKids] = useState([])

  function comments() {
    setKids(item.kids)
  }

  return (
    <div onClick={comments}>
      <h3>Коментариев : {item.kids.length}</h3>
      <div className="cursor">{item.text && <HtmlText html={item.text} />}</div>
      {<Comments com={kids} />}
    </div>
  )
}
