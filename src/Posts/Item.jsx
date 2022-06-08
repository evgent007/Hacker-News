import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getItem } from '../api'
import Button from '../Button/Button'
import Coments from './Coments'

function Item({ btn }) {
  // console.log(useParams())
  const { id } = useParams() //берет id страницы
  const navigate = useNavigate() //используется для возвращения на
  const goBack = () => navigate(-1) //предыдущую страницу

  const [item, setItem] = useState({})

  useEffect(() => {
    getItem(id).then(d => setItem(d))
    console.log('render2')
  }, [btn])

  useEffect(() => {
    let timer=setInterval(()=> {
      getItem(id).then(d => setItem(d))
      console.log('render2.1')
    }, 60000)
    return () =>clearInterval(timer)
  }, [])

  return (
    <>
      <div className="goback">
        <Button click={goBack} text="BACK" />
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
