import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/Tawang.jpg'
import ava02 from '../../assets/images/indo.jpg'
import ava03 from '../../assets/images/most-beautiful.jpg'
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,


        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    }
    return <Slider  {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
                A tourism or travel website serves as an information hub for prospective
                travelers planning a getaway.
                Today, people travel for a range of experiences—babymoons, staycations, voluntourism or bleisure—you name it.
                So, provide as much relevant information as possible to help users plan their trips.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div >
                    <h6 className="mb-0 mt-3">
                    India
                    </h6>
                    
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                A tourism or travel website serves as an information hub for prospective
                travelers planning a getaway.
                Today, people travel for a range of experiences—babymoons, staycations, voluntourism or bleisure—you name it.
                So, provide as much relevant information as possible to help users plan their trips.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div >
                    <h6 className="mb-0 mt-3">
                    Green Land
                    </h6>
                  
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                A tourism or travel website serves as an information hub for prospective
                travelers planning a getaway.
                Today, people travel for a range of experiences—babymoons, staycations, voluntourism or bleisure—you name it.
                So, provide as much relevant information as possible to help users plan their trips.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div >
                    <h6 className="mb-0 mt-3">
                    Indonesia
                    </h6>

                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                A tourism or travel website serves as an information hub for prospective
                travelers planning a getaway.
                Today, people travel for a range of experiences—babymoons, staycations, voluntourism or bleisure—you name it.
                So, provide as much relevant information as possible to help users plan their trips.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div >
                    <h6 className="mb-0 mt-3">
                    Green Land
                    </h6>
                    
                </div>
            </div>
        </div>
    </Slider>
}
export default Testimonial