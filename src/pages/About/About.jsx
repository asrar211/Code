import Header from '../../Components/Header'
import HeaderImage from '../../images/header-bg1.jpg'
import StoryImage from '../../images/story.jpg'


import './About.css'


const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    Developer's Community. We deal with the all kinds of Web Development Projects and much more with the help of best Developers of the Valley.
    </Header>

    <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum libero illo autem est laudantium voluptas dignissimos at sunt dolor in?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam voluptatem ipsum autem architecto officia fugit illo quas, consequuntur voluptatum molestiae!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, tenetur!</p>
        </div>
      </div>
    </section>

    <section className='about__vision'>
      <div className="container about__vision-container">
        
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum libero illo autem est laudantium voluptas dignissimos at sunt dolor in?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam voluptatem ipsum autem architecto officia fugit illo quas, consequuntur voluptatum molestiae!
          </p>
        </div>
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>

    <section className='about__mission'>
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum libero illo autem est laudantium voluptas dignissimos at sunt dolor in?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam voluptatem ipsum autem architecto officia fugit illo quas, consequuntur voluptatum molestiae!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, tenetur!</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About