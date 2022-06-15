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
    <div className="">
      <div className="line">
        {item.d.url ? <a href={item.d.url}>{item.d.title && <h3>{item.d.title}</h3>}</a> : item.d.title && <h3>{item.d.title}</h3>}
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
    <div className="itempage">
      <div className="goback">
        <Button onClick={goBack} className="btn2">
          BACK
        </Button>
      </div>
      {!item.loading ? <Preloader /> : itemlode}
      <div className="btn1">
        <Button1 n={0.7} />
      </div>
      <div className="item">
        {item.d.text && <HtmlText html={item.d.text} />}
        {item.d.kids && <h3>КОМЕНТАРИИ</h3>}
      </div>
      <Comments com={item.d.kids} />
    </div>
  )
}
export default Item
