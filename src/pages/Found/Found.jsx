import {Link}  from 'react-router-dom'

import  './Found.css'

const Found = () => {
  return (
    <section>
      <div className="container found__container">
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'>Go Back</Link>
      </div>
    </section>
  )
}

export default Found