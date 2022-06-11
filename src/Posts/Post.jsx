/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react'
import { getItem } from '../api'
import { Link } from 'react-router-dom'

function Post({ data }) {
  const [item, setItem] = useState({})

  useEffect(() => {
    getItem(data).then(d => setItem(d))
  }, [])

  // function onClickItem(e) {
  //   const idItem = e.currentTarget.id
  //   console.log(idItem)
  //   return idItem
  // }

  return (
    <Link to={`/item/${data}`}>
      {item.title && <h3>{item.title}</h3>}
      <p>
        <b>Автор : </b>
        {item.by} <b> Рейтинг : </b> ({item.score})
        <span>
          <b> дата : </b>
          <i> {new Date(item.time * 1000).toUTCString()} </i>
        </span>
      </p>
      {item.kids && <div className="comment"> Коментариев : {item.kids.length}</div>}
      {item.text && <p>есть текст новости</p>}
    </Link>
  )
}
export default Post
