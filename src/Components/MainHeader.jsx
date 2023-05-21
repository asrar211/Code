import {Link} from 'react-router-dom'
// import Image from '../images/'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfCode</h4>
          <h1>Welcome & Join Cod'Error</h1>
          <p>Developer's Community. We deal with the all kinds of Web Development Projects and much more with the help of best Developers of the Valley.</p>
          <Link to="/Plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            {/* <img src="{Image}" alt="Main Header Image"/> */}
          </div>
        </div>
      </div>

    </header>
  )
}

export default MainHeader