import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Posts from '../Posts/Posts'
import Item from '../Posts/Item'
import NotFound from './NotFound'
import pix from '../img/imgonline-2.png'
import Post from '../Posts/Post'

import './Main.css'

function Main({ btn, clickbtn }) {
  // const [id, setId] = useState()

  // function onClickItem(e) {
  //   const idItem = e.currentTarget.id
  //   console.log(idItem)
  //   setId(idItem)
  // }

  return (
    <>
      <Router>
        <main className="main">
          <div className="pix">
            <img className="pix1" src={pix} alt="pix" />
          </div>
          <Routes>
            <Route path="/" element={<Posts btn={btn}  clickbtn={clickbtn} />} />
            <Route path="/item/:id" element={<Item  />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}
export default Main
