import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../api'

function Item() {
  const { id } = useParams()

  const [item, setItem] = useState({})

  useEffect(() => {
    getItem(id).then(d => setItem(d))
  }, [])

  return (
    <div className="pos" id={id}>
      <h3>{item.title && item.title}</h3>
      <p>
        <b>Автор:</b>
        {item.by} <b> Рейтинг: </b> ({item.score})
        <span>
          <b> дата: </b>
          <i> {new Date(item.time * 1000).toUTCString()} </i>
        </span>
      </p>
      <div>
        <a href={item.url}>ссылка</a>
      </div>
    </div>
  )
}
export default Item
