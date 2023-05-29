import Header from '../../Components/Header'
import HeaderImage from '../../images/header-bg4.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import Trainer from '../../Components/Trainer'

import './Trainers.css'

const Trainers = () => {
  return (
    <>
    <Header title="Our Team" image={HeaderImage}>
      We are a group of people from Kashmir valley to bring innovations to next level.
    </Header>
    <section className='trainers'>
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name, job, socials}) => {
            return <Trainer key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <AiOutlineTwitter/>, link: socials[1]},
                {icon: <FaFacebookF/>, link: socials[2]},
                {icon: <FaLinkedinIn/>, link: socials[3]}
              ]
            }/>
          })
        }
      </div>
    </section>

    </>
  )
}

export default Trainers