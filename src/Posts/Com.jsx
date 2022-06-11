import { useState } from 'react'
import HtmlText from './HtmlText'
import Coments from './Coments'

export default function Com({ item }) {
  const [kids, setKids] = useState([])

  function comments() {
    setKids(item.kids)
  }

  return (
    <div onClick={comments}>
      <h3>Коментариев : {item.kids.length}</h3>
      <div className="cursor">
        {item.text && <HtmlText html={item.text} />}
      </div>
      {<Coments com={kids} />}
    </div>
  )
}
