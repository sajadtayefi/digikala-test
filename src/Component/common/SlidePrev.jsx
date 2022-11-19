import { useSwiper } from 'swiper/react';
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function SlidePrev() {
    const swiper = useSwiper();

    return (
        <div className="flex flex-row justify-center items-center absolute ">
            <button className="flex flex-row justify-center items-center text-white"
                    onClick={() => swiper.slidePrev()}>
                <MdKeyboardArrowLeft className="" size={32} />
            </button>
        </div>
    );
}