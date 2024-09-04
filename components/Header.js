
import {ArrowRightOutlined} from '@ant-design/icons'
import "@/styles/header.css"
import Link from 'next/link';


const Header = () => {
  return (
    <div className='overlay-container'>
        <div className='overlay-text'>
            <div className='ot-left'>
                <h2><span>Empowering students</span> to achieve their full potential</h2>
                <Link href="/#about" passHref>
                  <button className="header-button">
                      <div className="header-button-sign"><ArrowRightOutlined /></div>
                      <span className="header-button-text">Learn More</span>
                  </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header