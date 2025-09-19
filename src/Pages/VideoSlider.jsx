

import React from 'react';

import videoSlider from '../assets/Image/video/videoslide.mp4'
import { Autoplay } from 'swiper/modules';

import video3 from '../assets/Image/banner/1.mp4'
import video4 from '../assets/Image/banner/2.mp4'
import video5 from '../assets/Image/banner/3.mp4'
import video6 from '../assets/Image/banner/4.mp4'
import '../assets/Css/InstaPost.css'


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const VideoSlider = () => {

const videoSlides = [
  { id: '1', video: video3 },
  { id: '2', video: video4 },
  { id: '3', video: video5 },
  { id: '4', video: video6 },
  
];
    // console.log(videoSlides)

    return (
        <div className='video_container'>
            <div className="container">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1.2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 4 },
                    }}
                    spaceBetween={20}>

                    {videoSlides.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="video_slides">

                                <video width="100%"  playsInline autoPlay loop muted>
                                    <source src={item.video} type="video/mp4" />
                                </video>

                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>


            </div>
        </div>
    )
}

export default VideoSlider