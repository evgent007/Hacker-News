/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react'
import { getItem } from '../api'
import { Link } from 'react-router-dom'

function Post({ data }) {
  const [item, setItem] = useState({})

  useEffect(() => {
    getItem(data).then(d => setItem(d))
  }, [])

  return (
    <Link to={`/item/${data}`}>
      {item.title ? <h3>{item.title}</h3> : <h3>ПУСТО</h3>}
      <p>
        <b>Автор : </b>
        {item.by} <b> Рейтинг : </b> ({item.score})
        <span>
          <b> дата : </b>
          <i> {new Date(item.time * 1000).toLocaleString()} </i>
        </span>
        {item.text && <span>--(есть текст новости)</span>}
        {item.url && <span>--(есть ссылка)</span>}
        {item.kids && <span> Коментариев : {item.kids.length}</span>}
      </p>
    </Link>
  )
}
export default Post
