import {Link} from 'react-router-dom'
import {FaFacebook, FaLinkedin} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'






const Footer = () => {
  return (
    <footer className='foot'>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <h2>Cod'Error</h2>
                </Link>
                <p>
                Developer's Community. We deal with the all kinds of Web Development Projects and much more with the help of best Developers of the Valley.
                </p>
                 <div className="footer__socials">
                    <a href="https://linkedin.com" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://facebook.com" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="https://twitter.com" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://instagram.com" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                 </div>
            </article>
            <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Our Team</Link>
            <Link to="/gallery">Works</Link>
            <Link to="/contact">Contact</Link>
            </article>
            <article>
            <h4>Insights</h4>
            <Link to="/s">Blog</Link>
            <Link to="/s">Case Studies</Link>
            <Link to="/s">Events</Link>
            <Link to="/s">Communities</Link>
            <Link to="/s">FAQs</Link>
            </article>
            <article>
            <h4>Get In Touch</h4>
            <Link to="/Contact">Contact Us</Link>
            <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer___copyright">
            <small>2023 Cod'Error &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer