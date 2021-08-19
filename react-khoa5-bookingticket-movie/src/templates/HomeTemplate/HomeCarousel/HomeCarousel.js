import React from 'react'
import { useSelector } from 'react-redux'
import { Carousel } from 'antd';


export default function HomeCarousel(props) {
   
    const { arrCarousel } = useSelector(state => state.CarouselReducer)
    console.log(arrCarousel)

    const renderCarousel = () => {
        return arrCarousel.map((item, index) => {
            return <div key ={index}>
                <img src={item.hinhAnh} className="w-full" alt="123" />
            </div>
        })
    }

    return (
        <Carousel effect="fade" autoplay="true">
            {renderCarousel()}
        </Carousel>
    )
}
