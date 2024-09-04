"use client";

import React, {useState} from 'react'
import './global.css'
import { useForm, ValidationError } from '@formspree/react';



const services = [
    "School and University Counselling",
    "Tutoring",
    "Admission Documents Preparation",
    "Visa Support",
    "Career Orientation and Mentoring",
    "Guardianship Services",
    "Others"
  ];


//   'https://formspree.io/f/xdknyrjp'




const page = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        countryCode: '+44',
      });

      const [state, handleSubmit] = useForm("xdknyrjp");

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleCountryCodeChange = (e) => {
        setFormData({ ...formData, countryCode: e.target.value });
      };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-8">
        <div className="contact-header">
            <h4>At VLAD Education, we’re here to support you every step of the way on your educational journey. Whether you have questions about our services, need personalized advice, or want to discuss your options, our team is ready to assist.</h4>
            <h4>Feel free to reach out to us via the contact form below, email, or phone. We look forward to connecting with you and helping you achieve your academic and career goal.</h4>
            <h2>Contact Us</h2>
        </div>
        {state.succeeded ? (
            <div className='contactForm'>
                <p>Thank you for contacting us! We will get back to you shortly.</p>
            </div>
        ): (
            <form className="contactForm" onSubmit={handleSubmit}>
                <div className="formGroup">
                    <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="inputField"
                    required
                    />
                    <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="inputField"
                    required
                    />
                </div>
                <div className="formGroup">
                    <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="inputField"
                    required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="formGroup-phone">
                    <div className="phoneGroup">
                        <select 
                            className="countryCode" 
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleCountryCodeChange}
                            required
                        >
                            <option value="+44">+44 (UK)</option>
                            <option value="+1">+1 (US)</option>
                        </select>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="phoneInput"
                            required
                        />
                    </div>
                </div>
                <div className="formGroup">
                    <div className="mdEInput1">
                    <select 
                        name="service" 
                        onChange={handleChange} 
                        className="mdEAnswer"
                        value={formData.service}
                    >
                        <option value="" disabled>Select a Service</option>
                        <option value="Tutoring">Tutoring</option>
                        <option value="Visa Support">Visa Support</option>
                        <option value="Career Mentoring">Career Mentoring</option>
                        <option value="University Counselling">University Counselling</option>
                        <option value="Guardianship Services">Guardianship Services</option>
                        <option value="Document Preparation">Document Preparation</option>
                        <option value="Others">Others</option>
                    </select>
                    </div>
                </div>
                <div className="formGroup">
                    <textarea
                    name="message"
                    placeholder="Message to the team (optional)"
                    value={formData.message}
                    onChange={handleChange}
                    className="textArea"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" className="contact-button">
                        <div className="contact-button-sign">➔</div>
                        <span className="contact-button-text">Send us a message</span>
                </button>
            </form>
        )}
    </main>
  )
}

export default page