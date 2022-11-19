import logo from "../assets/icon/logo.svg"
import Btn from "./common/Btn"
import { TfiShoppingCart } from "react-icons/tfi"
import {IoExitOutline} from "react-icons/io5"
import {HeaderItems} from "../constant/HeaderItems"

function Header() {
    return (
        <div className="flex flex-col  w-full container mx-auto " >
            <div className="flex flex-row justify-between w-full items-center  py-5">
                <div className="flex flex-row">
                    <img src={logo} alt="logo" />
                    <input className="w-[600px] p-3 outline-none bg-slate-200 rounded-xl mr-5 "  placeholder="جستجو "  type="text" />
                </div>
                <div className="flex flex-row justify-center items-center">
                    <Btn
                        cname="flex flex-row justify-center items-center border rounded-lg py-2 px-4"
                        text={"ورود | ثبت ‌نام"}
                        icon={<IoExitOutline className="ml-5" />}
                    />
                    <TfiShoppingCart size={20} className="mr-5 border-r-2 " />
                </div>
            </div>
            <div className="flex flex-row w-full ">
                {HeaderItems.map((i)=>{
                    return(
                        <li className={`${i.Cname}  list-none flex flex-row-reverse justify-center items-center `}>
                            <h5>
                                {i.name}
                            </h5>
                           <h4 className="ml-1">
                               {i.icon}
                           </h4>
                        </li>
                    )
                })}

            </div>

        </div>
    );
}

export default Header;