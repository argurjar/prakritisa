
import React from 'react'


import '../assets/Css/Counter.css'
import textSaopImg from '../assets/Image/textSoapImg.jpg'
import { Link } from 'react-router-dom'
import { TfiArrowTopRight } from "react-icons/tfi";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import icon1 from '../assets/Image/banner/icon-1.png';
import icon2 from '../assets/Image/banner/icon-2.png';
import icon3 from '../assets/Image/banner/icon-3.png';







const CounterSection = () => {


   const counterData = [
  {
    value: icon1,
    title: 'Rose Water from Kannauj'
  },
  {
    value: icon2,
    title: 'Turmeric from Meghalaya'
  },
  {
    value: icon3,
    title: 'Aloe Vera from Rajasthan'
  }
];





    return (
        <div className='counter_section'>

            <div className="container">

                <div className=' counter_section_title '>
                    {/* <img src={textSaopImg} width='140px' alt="textImg" /> */}
                    <h2>
                        Proudly made in India, we source the finest natural ingredients from the best regions across the country to craft high-quality products you can trust.
                    </h2>
                    {/* <p className='para'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum provident nesciunt rem architecto praesentium voluptatibus nisi adipisci, at minus doloremque!
                    </p> */}


                </div>



                <Swiper

                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 3 },
                    }}
                    spaceBetween={20}
                >
                    {counterData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="counter_box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center',}}>
                                <img
                                    style={{width:"150px"}}
                                    src={item.value}
                                    alt={`${item.title} icon`}
                                    className="icon-image"
                                />
                                <p className="counter_title">{item.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>



            </div>


        </div>
    )
}

export default CounterSection