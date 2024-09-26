import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import Marquee from "react-fast-marquee";

import luggege from '../../assets/luggege.jpg'
import bnrOne from '../../assets/bnr-bottom2.jpg'

import '../stylee/stylee.css'
import Country from './Country';

const Banner = () => {

    const bannerInfo =<>
        <div className="hero-overlay bg-opacity-40 "></div>
            <div className="hero-content   text-white ">
                <div className="">
                    <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Travel with UniTour And Explore the world</h1>
                    <p className="mb-5 text-sm md:text-base">
                        Our company has a great reputation and its a trusted.We have a awosome and exprienced guilds 
                        .We always have look on our customers.So travel with us and travel with UniTour.it will be a great option 
                        you, your familly, your friends and coluges.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className="bg-slate-300 w-4/12 opacity-85 rounded-xl hidden lg:flex">
                    <img className='rounded-lg' src={luggege} alt="" />
                </div>
            </div>
    </>

    return (
        <div className="relative md:mb-40">
            <Swiper slidesPerView={1} spaceBetween={30}
            autoplay={{delay:2500,disableOnInteraction:false,}}
            loop={true}
            pagination={{ clickable: true,}}
            navigation={true}
            modules={[Pagination,Autoplay, Navigation]}
            className="mySwiper  mb-9 w-[96%] lg:w-[100%] rounded  h-72 md:h-[440px] lg:h-[600px]">
                <SwiperSlide>
                    <div className="hero bg-cover w-full h-full bgfirst " >
                        {bannerInfo}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero bg-cover w-full h-full bgsecond " >
                        {bannerInfo}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero bg-cover w-full h-full bgthird " >
                        {bannerInfo}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero bg-cover w-full h-full bgfourth " >
                        {bannerInfo}
                    </div>
                </SwiperSlide>
            </Swiper>

             {/* bottom slider */}
            <div className="hidden lg:flex w-[85%] absolute -bottom-24 right-0 left-0 z-20  justify-around p-3 items-center mx-auto xl:w-[75%] bg-slate-100 rounded-lg h-52">
            <Country></Country>
                {/*<div className=" ">
                <img className='rounded-xl  ' src={bnrOne} alt="" />
                </div>
                <div className=" ">
                    <img className='rounded-xl  ' src={bnrOne} alt="" />
                </div>
                <div className=" ">
                    <img className='rounded-xl  ' src={bnrOne} alt="" />
                </div>*/}
            
        </div> 
            
        </div>
    );
};

export default Banner;