import {AiOutlineMenu, AiOutlinePercentage} from "react-icons/ai"
import {FaGripfire, FaTicketAlt} from "react-icons/fa"
import { TfiLocationPin } from "react-icons/tfi"
import {MdOutlineFastfood} from "react-icons/md";


export const HeaderItems = [{
        id: 1,
        name: "دسته‌بندی کالاها",
        icon: <AiOutlineMenu /> ,
    Cname: "ml-5"
    },
    {
        id: 2,
        name: "سوپرمارکت",
        icon: <MdOutlineFastfood />,
        Cname: "ml-5"
    },
    {
        id: 3,
        name: "پرفروش ترین‌ها",
        icon: <FaGripfire />,
        Cname: "ml-5"
    },
    {
        id: 4,
        name: "تخفیف‌هاوپیشنهادها",
        icon: <FaTicketAlt />,
        Cname: "ml-5"
    },
    {
        id: 5,
        name: "شگفت‌انگیزها",
        icon: <AiOutlinePercentage />,
        Cname: "ml-5"
    },
    {
        id: 6,
        name: "سوالی دارید؟",
        Cname: "w-32 border-r"
    },
    {
        id: 7,
        name: "در دیجی کالا بفروشید!",
        Cname: "ml-5"

    },
    {
        id: 8,
        name: "لطفا شهر خود را انتخاب کنید",
        icon: <TfiLocationPin />,
        Cname: " mr-auto"
    },
]