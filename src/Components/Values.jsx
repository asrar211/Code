
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'
import Image from '../images/values.png'



const Values = () => {
  return (
    <section className='values'>
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values Image" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond/>} title="What We Do?"/>
        <p>
          We are providing all kind of support in the field od Web and App Development.
        </p>
        <div className="values__wrapper">
          {
              values.map(({id, icon, title, desc}) => {
                return <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>


                </Card>
              })
          }
        </div>
        </div>
      </div>
       
    </section>
  )
}

export default Values