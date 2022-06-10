import { useEffect, useState } from 'react'
import { getItem } from '../api'
import './Post.css'
import Com from './Com'

export default function GetComent({ com }) {
  const [item, setItem] = useState({})

  // const tex = document.querySelector('.com')

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
      {item.kids ? <Com item={item} /> : <p className="com">{ item.text}</p>}
    </div>
  )
}
