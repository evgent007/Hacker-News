import { useEffect, useState } from 'react'
import { getItem } from '../api'
import './Post.css'
import Com from './Com'

export default function GetComent({ com }) {
  const [item, setItem] = useState({})

  useEffect(() => {
    getItem(com).then(d => setItem(d))
  }, [])

  return (
    <div className="coment color">
      {item.kids ? <Com item={item} /> : <p>{item.text}</p>}
    </div>
  )
}
