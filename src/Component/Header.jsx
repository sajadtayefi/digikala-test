import logo from "../assets/icon/logo.svg"
import Btn from "./common/Btn"
import { GiExitDoor } from "react-icons/gi"
import { TfiShoppingCart } from "react-icons/tfi"


function Header() {
    return (
        <div className="flex flex-row justify-between items-center w-full " >
            <div className="flex flex-row">
                <img src={logo} alt="logo" />
                <input placeholder={`جستجو کنید`} type="text" />
            </div>
            <div className="flex flex-row justify-center items-center">
                <Btn
                    cname="flex flex-row justify-center items-center border p-2"
                    text={"ورود | ثبت‌نام"}
                    icon={<GiExitDoor />}
                />
                <TfiShoppingCart  className="" /> a

            </div>

        </div>
    );
}

export default Header;