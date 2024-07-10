import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-start items-center w-full h-[100px] relative">
      <div className="flex justify-center items-center bg-gradient-to-r from-sky-500 to-emerald-500 w-full h-full">
        <div className=" grid grid-cols-3 w-full h-[50px]">
          <h3 className="flex justify-center items-center h-full w-full col-span-1 text-grey font-bold text-xl">
            Triox Technology Pvt Ltd
          </h3>
          <div className="hidden md:grid md:grid-cols-5 md:col-span-2 items-center h-full">
            <span className="hover:text-[#006E73] cursor-pointer col-span-1">
              Products
            </span>
            <span className="hover:text-[#006E73] cursor-pointer col-span-1">
              Services
            </span>
            <span className="hover:text-[#006E73] cursor-pointer col-span-1">
              Company
            </span>
            <span className="hover:text-[#006E73] cursor-pointer col-span-1">
              Support
            </span>
            <span className="hover:text-[#006E73] cursor-pointer col-span-1">
              <Link to={"/contact"}>Contact Us</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="flex md:hidden">icon</div>
    </div>
  );
};

export default Header;
