import {BsFillArrowDownRightCircleFill} from 'react-icons/bs'
import SectionHead from './SectionHead'
import {program, Prog} from '../data'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'
import {MdWork} from 'react-icons/md'



const Progr = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead icon={<MdWork/>} title="Works"/>
            
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
  )
}

export default Progr