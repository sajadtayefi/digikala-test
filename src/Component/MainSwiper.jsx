import {MainSwiperItems} from "../constant/MainSwiperItems"
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlidePrev from "./common/SlidePrev";


export default function MainSwiper (){
    return(
        <div className="pt-10 shadow-lg">
            <Swiper
                ClassName="relative"
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {MainSwiperItems.map((i)=>{
                    return(
                        <SwiperSlide>
                            <img className=" "  src={i.image}/>
                        </SwiperSlide>
                    )
                })}
                <SlidePrev />
            </Swiper>
    </div>    )
}
