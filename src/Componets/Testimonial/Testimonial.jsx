import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import logo from '../../assets/quote.07b3f84a27ac64614e06.png'
import man1 from '../../assets/young-bearded-man-with-striped-shirt_273609-5677.avif'
import man2 from '../../assets/images.jfif'
import man3 from '../../assets/images (1).jfif'
import { Helmet } from "react-helmet-async";
const Testimonial = () => {
    return (
        <div className="bg-pink-100 p-8 space-y-4">
            <Helmet>
                <title> Portfolio | Testimonial</title>
            </Helmet>
            <h1 className='text-center text-4xl font-bold text-gray-800'>Testimonial</h1>
            <p className='text-center text-xl text-slate-800'>Know about myself from here from my previous clients</p>
            <div className="">
                <Swiper

                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={
                        { delay: 4000 }
                    }
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <div className="bg-base-100 w-[1240px] h-[380px] rounded-3xl p-8 ">
                            <img className="w-[250px] h-[100px] " src={logo} alt="" />
                            <h2 className="text-xl text-slate-800
                            mb-5">I have worked with Sazzadur Rahman Sakib before and i will in the future.Excellent work and communication.You won't be disappointed</h2>
                            <div className="md:flex  justify-start items-center gap-10">
                                <img className="w-28 h-24 rounded-full" src={man1} alt="" />
                                <div className="">
                                    <h1 className="text-xl font-semibold mb-4">Revga Wright</h1>
                                    <p className="text-xl text-slate-800">United States</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="bg-base-100 w-[1240px] h-[380px] rounded-3xl p-8">
                            <img className="w-[250px] h-[100px] " src={logo} alt="" />
                            <h2 className="text-xl text-slate-800
                            mb-5">I have worked with Sazzadur Rahman Sakib before and i will in the future.Excellent work and communication.You won't be disappointed</h2>
                            <div className="md:flex  justify-start items-center gap-10">
                                <img className="w-28 h-24 rounded-full" src={man2} alt="" />
                                <div className="">
                                    <h1 className="text-xl font-semibold mb-4">Chudyi lozue</h1>
                                    <p className="text-xl text-slate-800">United States</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="bg-base-100 w-[1240px] h-[380px] rounded-3xl p-8">
                            <img className="w-[250px] h-[100px] " src={logo} alt="" />
                            <h2 className="text-xl text-slate-800
                            mb-5">I have worked with Sazzadur Rahman Sakib before and i will in the future.Excellent work and communication.You won't be disappointed</h2>
                            <div className="md:flex  justify-start items-center gap-10">
                                <img className="w-28 h-24 rounded-full" src={man1} alt="" />
                                <div className="">
                                    <h1 className="text-xl font-semibold mb-4">Revga Wright</h1>
                                    <p className="text-xl text-slate-800">United States</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="bg-base-100 w-[1240px] h-[380px] rounded-3xl p-8">
                            <img className="w-[250px] h-[100px] " src={logo} alt="" />
                            <h2 className="text-xl text-slate-800
                            mb-5">I have worked with Sazzadur Rahman Sakib before and i will in the future.Excellent work and communication.You won't be disappointed</h2>
                            <div className="md:flex  justify-start items-center gap-10">
                                <img className="w-28 h-24 rounded-full" src={man3} alt="" />
                                <div className="">
                                    <h1 className="text-xl font-semibold mb-4">Revga Wright</h1>
                                    <p className="text-xl text-slate-800">United Kingdom</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>






                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;
