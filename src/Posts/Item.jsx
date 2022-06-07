import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getItem } from '../api'
import Button from '../Button/Button'
import Coments from './Coments'

function Item({ btn}) {
  const { id } = useParams() // используется для
  const navigate = useNavigate()

  const [item, setItem] = useState({})

  const goBack = () => navigate(-1)

  useEffect(() => {
    console.log('renderComments', btn)
    getItem(id).then(d => setItem(d))
  }, [btn])

  return (
    <>
      <div className="goback">
        <Button click={goBack} text='BACK'/>
      </div>
      <div className="pos">
        <div className="line">
          <a href={item.url}>{item.title && <h3>{item.title}</h3>}</a>
        </div>
        {item.kids && <h4>коментариев : {item.kids.length}</h4>}
        <p>
          <b>Автор : </b>
          {item.by} <b> Рейтинг : </b> ({item.score})
        </p>
        <div>
          <p>
            <b> дата : </b>
            <i> {new Date(item.time * 1000).toUTCString()} </i>
          </p>
        </div>
      </div>

      {item.text && <p className="text">{item.text}</p>}
      {item.kids && <h3>КОМЕНТАРИИ</h3>}
      <Coments com={item.kids} />
    </>
  )
}
export default Item
