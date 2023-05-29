import Header from '../../Components/Header'
import HeaderImage  from '../../images/header-bg2.jpg'
import {program} from '../../data'
import {BsFillArrowDownRightCircleFill} from 'react-icons/bs'
import Card from '../../UI/Card'
import {Link} from 'react-router-dom'

import './Gallery.css'

const Gallery = () => {
  return (
    <>
    <Header title="Our Works" image={HeaderImage}>
      Here are some of our works made out of scrath from latest Technologies
    </Header>
    <section className="programs">
        <div className="container programs__container">
            
            <div className="programs__wrapper">
                {
                    program.map(({id, icon, title, info, path}) => {
                        return (
                            <Card className="programs__program" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link to={path} className="btn sm">Learn More <BsFillArrowDownRightCircleFill/></Link>

                            </Card>
                        )
                    })
                }
            </div>
            </div> 
    </section>
    </>
  )
}

export default Gallery