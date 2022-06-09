import { useState } from 'react'

import Coments from './Coments'

export default function Com({ item }) {
  const [kids, setKids] = useState([])

  // function comments(e) {
  //   const kid = e.currentTarget.id

  //   if (item.id === +kid) {
  //     setKids(item.kids)
  //   }
  // }

  function comments() {
    setKids(item.kids)
  }

  return (
    <div  onClick={comments}>
      <h3>Коментариев : {item.kids.length}</h3>
      <div className="cursor">
        <p>{item.text}</p>
      </div>

      {<Coments com={kids} />}
    </div>
  )
}
