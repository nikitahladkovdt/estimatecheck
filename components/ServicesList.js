"use client";

import React, {useState} from 'react'
import "@/styles/services.css"
import {UpOutlined, DownOutlined} from '@ant-design/icons'

const ServicesList = ({topic, content, isLast}) => {
    const [showInfo, setShowInfo] = useState(false)
    return (
            <div className='ms-list'>
                <div className='msl-header'>
                    <h5>{topic}</h5>
                    <button className='msl-button' onClick={() => setShowInfo(!showInfo)}>
                        {showInfo ? <UpOutlined /> : <DownOutlined />}
                    </button>
                </div>
                {showInfo && (
                    <p className='msl-content'>{content}</p>
                )}
                <div className='ms-line'></div>
            </div>
    )
}

export default ServicesList