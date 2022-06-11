import { useEffect, useState } from 'react'
import { getItem } from '../api'
import './Post.css'
import Com from './Com'
import HtmlText from './HtmlText'

export default function GetComent({ com }) {
  const [item, setItem] = useState({})

  useEffect(() => {
    getItem(com).then(d => setItem(d))
  }, [])

  return (
    <div className="coment color">
      <p>
        <b>Автор : </b>
        {item.by} <b> Рейтинг : </b> ({item.score})
      </p>
      <p>
        <b> дата : </b>
        <i> {new Date(item.time * 1000).toUTCString()} </i>
      </p>
      {item.kids ? <Com item={item} /> : item.text && <HtmlText html={item.text} />}
    </div>
  )
}
