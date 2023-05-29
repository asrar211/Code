import Header from '../../Components/Header'
import HeaderImage from '../../images/header-bg3.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'



import './Plans.css'

const Plans = () => {
  return (
    <>
    <Header title="Plans" image={HeaderImage}>
      In this section here are our plans regarding our Membership but are Unavailable this time.
    </Header>
    <section className='plans'>
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features}) => {
            return <Card key={id} className="plan">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1><h2>/Project</h2>
              <h4>Features</h4>
              {
                features.map(({feature, available}, index) => {
                  return <p key={index} className= {!available ? "disabled" : "" }>{feature}</p>
                })
              }
              <button className='btn lg'>Choose Plan</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans