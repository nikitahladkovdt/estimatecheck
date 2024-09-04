import "@/styles/footer.css"
import {FacebookFilled, TwitterCircleFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Let us help you achieve your full potential together</h2>
        <Link href="/contact" passHref>
          <button className="footer-button">
            <div className="footer-button-sign">➔</div>
            <span className="footer-button-text">Book a Service</span>
          </button>
        </Link>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 VLAD Education. All rights reserved.</p>
        {/* <div className="footer-icons">
          <span className="footer-icon"><FacebookFilled /></span>
          <span className="footer-icon"><TwitterCircleFilled /></span>
          <span className="footer-icon"><InstagramFilled /></span>
          <span className="footer-icon"><LinkedinFilled /></span>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer