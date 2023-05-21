import Header from '../../Components/Header'
import HeaderImage from '../../images/header-bg3.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'






import './Contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae iure reprehenderit ut eos facere facilis quam voluptate? Perspiciatis, est?
    </Header>
    <section className='contact'>
   <div className="container contact__container">
    <div className="contact__wrapper">
      <a href="mailto:aliasrar84@gmail.com" target="_blank" rel='noreferrer noopener'><MdEmail/></a>
      <a href="https://m.me/aliasrar2" target="_blank" rel='noreferrer noopener'><BsMessenger/></a>
      <a href="https://wa.me/+917889789033" target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp/></a>
    </div>
   </div>
    </section>
    </>
  )
}

export default Contact