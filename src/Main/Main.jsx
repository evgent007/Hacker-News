import { Routes, Route } from 'react-router-dom'
import { Home } from '../Posts/Home'
import Item from '../Posts/Item'
import NotFound from './NotFound'
import pix from '../img/imgonline-2.png'

import './Main.css'

function Main({ btn, clickbtn }) {

  return (
    <>
      <main className="main">
        <div className="pix">
          <img className="pix1" src={pix} alt="pix" />
        </div>
        <Routes>
          <Route path="/" element={<Home btn={btn} clickbtn={clickbtn} />} />
          <Route path="/item/:id" element={<Item btn={btn} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}
export default Main
