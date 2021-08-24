import React from 'react'
import Slider from "react-slick";
import Film from '../Film/Film';
import slickEdit from './CarouselSlick.module.css'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={`${className} ${slickEdit['slick-prev']}`}
            style={{ ...style, display: "block", color: 'black' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${slickEdit['slick-next']}`}
            style={{ ...style, display: "block", color: 'black' }}
            onClick={onClick}
        />
    );
}
export default function CarouselSlick(props) {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 4,
        speed: 200,
        rows: 2,
        slidesPerRow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const { danhSachPhim } = props
    // console.log("danhSachPhim", danhSachPhim)
    const renderDanhSachPhim = () => {
        return danhSachPhim?.map((item, index) => {
            return <div key ={index}>
                <Film dataFilm={item} />
                
            </div>
        })
    }
    return (
        <div>
           
            <Slider {...settings}>
               {renderDanhSachPhim()}
            </Slider>
        </div>
    )
}
