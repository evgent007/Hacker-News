/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react'
import { getItem } from '../api'

function Post({ data, click }) {

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
    <div className="pos" id={data} >
      <h3>{item.title && item.title}</h3>
      <p>
        <b>Автор:</b>
        {item.by} <b> Рейтинг: </b> ({item.score})
        <span>
          <b> дата: </b>
          <i> {new Date(item.time * 1000).toUTCString()} </i>
        </span>
      </p>
      
    </div>
  )
}
export default Post
