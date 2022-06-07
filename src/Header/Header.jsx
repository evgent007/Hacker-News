import './Header.css'
import Clock from './Clock'
import Button from '../Button/Button'

function Header({ clickbtn }) {
  return (
    <header className="header flex">
      <div className="logo">
        <img className="payk" src="https://img.icons8.com/clouds/452/scream.png" alt="паук" />
      </div>
      <div className="clock">
        <Clock />
      </div>
      <Button id={1} click={clickbtn}  text="ОБНОВИТЬ" />
      <div className="hedertitle">
        <h1>Hacker News</h1>
      </div>
    </header>
  )
}
export default Header
