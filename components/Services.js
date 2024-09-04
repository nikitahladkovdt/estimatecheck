
import Link from 'next/link';
import React from 'react'
import "@/styles/services.css"
import { serviceList } from './data';
import ServicesList from './ServicesList';

const Services = () => {
  return (
    <div className='m-services'>
        <div className='ms-header'>Our <span className="desktop-break"><br /></span>Services</div>
        <div className='ms-right'>
            <div className='ms-content'>
                {
                    serviceList.map((list, index) => (
                        <ServicesList 
                            key={list.id} 
                            {...list} 
                            isLast={index === serviceList.length - 1}   
                        />
                    ))
                }
            </div>
            <Link href="/contact" passHref>
                <button className="services-button">
                        <div className="services-button-sign">➔</div>
                        <span className="services-button-text">Book A Service</span>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Services