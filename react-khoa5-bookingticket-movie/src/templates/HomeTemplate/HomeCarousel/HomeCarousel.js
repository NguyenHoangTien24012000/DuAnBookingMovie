import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd';
import { getCarouselAction } from '../../../redux/actions/CarouselAction';

export default function HomeCarousel(props) {
   
    const { arrCarousel } = useSelector(state => state.CarouselReducer)
  
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCarouselAction)
    }, [])

    const renderCarousel = () => {
        return arrCarousel.map((item, index) => {
            return <div key ={index}>
                <img src={item.hinhAnh} className="w-full"  alt="123" />
            </div>
        })
    }

    return (
        <Carousel dotPosition="left" effect="fade" autoplay="true">
            {renderCarousel()}
        </Carousel>
    )
}
