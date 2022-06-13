import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getItem } from '../api'
import Button from '../Button/Button'
import Button1 from '../Button/Button1'
import Comments from './Comments'
import HtmlText from './HtmlText'
import Preloader from './Preloader'

function Item({ btn }) {
  const { id } = useParams() //берет id страницы
  const navigate = useNavigate() //используется для возвращения на
  const goBack = () => navigate(-1) //предыдущую страницу

  const [item, setItem] = useState({ d: {}, loading: false })

  useEffect(() => {
    getItem(id).then(d => setItem({ d: d, loading: true }))
  }, [btn])

  useEffect(() => {
    let timer = setInterval(() => {
      getItem(id).then(d => setItem({ d: d, loading: true }))
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  const itemlode = (
    <div className="pos">
      <div className="line">
        <a href={item.d.url}>{item.d.title && <h3>{item.d.title}</h3>}</a>
      </div>
      {item.d.kids && <h4>коментариев : {item.d.kids.length}</h4>}
      <p>
        <b>Автор : </b>
        {item.d.by} <b> Рейтинг : </b> ({item.d.score})
      </p>
      <div>
        <p>
          <b> дата : </b>
          <i> {new Date(item.d.time * 1000).toUTCString()} </i>
        </p>
      </div>
    </div>
  )

  return (
    <>
      <div className="goback">
        <Button click={goBack} text="BACK" clName="btn2" />
      </div>
      {!item.loading ? <Preloader /> : itemlode}
      <div className="btn1">
        <Button1 n={0.7} />
      </div>
      {item.d.text && <HtmlText html={item.d.text} />}
      {item.d.kids && <h3>КОМЕНТАРИИ</h3>}
      <Comments com={item.d.kids} />
    </>
  )
}
export default Item
