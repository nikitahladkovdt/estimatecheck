
import {ArrowRightOutlined} from '@ant-design/icons'
import "@/styles/about.css"

const About = () => {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-left'>
                <h1>We Are VLAD Education.</h1>
                {/* <button className="about-button">
                    <div className="about-button-sign"><ArrowRightOutlined className='arrow' /></div>
                    <span className="about-button-text">Learn More</span>
                </button> */}
            </div>
            <div className='about-right'>
                <div className='about-right-top'>
                    Founded and managed by industry expert <b>Volodymyr Naidiuk</b> who has been at the forefront of education consulting since 2010 and got his MBA degree in the UK with distinction, VLAD Education has successfully placed over 1,000 students in top educational institutions worldwide. With our headquarters in the UK, we specialize in English-speaking programs and have established strong partnerships with prestigious universities such as King’s College and UCL, as well as renowned schools like Malvern College and Cheltenham College.
                </div>
                <div className='about-right-bottom'>
                    <p>At VLAD Education, we believe that every student is unique and possesses the potential to achieve their dreams with the right support and guidance.</p>
                    <div className='about-line'></div>
                    <p>Since 2013, we have dedicated ourselves to helping students and families navigate the complex world of education with confidence and success.</p>
                </div>
            </div>
        </div>
        <div className='about-bottom'>
            <h1>Our unique approach</h1>
            <p>What sets VLAD Education apart is our commitment to a personal and professional approach at every stage of the application process. We take pride in our ability to understand each student’s individual needs and aspirations, ensuring they receive the support necessary to unlock their full potential.</p>
        </div>
    </div>
  )
}

export default About