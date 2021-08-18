import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
    height: '700px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
export default function HomeCarousel() {
    return (
        <Carousel effect="fade" autoplay="true">
            <div>
                <div style={contentStyle}>
                    <img src="http://picsum.photos/1000" className="w-full" alt="123" />
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <img src="http://picsum.photos/1100" className="w-full" alt="123" />
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <img src="http://picsum.photos/1200" className="w-full" alt="123" />
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <img src="http://picsum.photos/1300" className="w-full" alt="123" />
                </div>
            </div>
        </Carousel>
    )
}
