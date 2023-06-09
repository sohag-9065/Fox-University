import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderTop from "./HeaderTop";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    const [toggle, setToggle] = useState(false);


    const navMenu = <>
        <NavLink to="/home" className={({ isActive }) => isActive ? 'text-secondary hover:text-white' : ' text-white  '}  > Home </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-secondary hover:text-white' : ' text-white  '}  > About </NavLink>
        <NavLink to="/course" className={({ isActive }) => isActive ? 'text-secondary hover:text-white' : ' text-white  '}  > Course </NavLink>
        <NavLink to="/staff" className={({ isActive }) => isActive ? 'text-secondary hover:text-white' : ' text-white  '}  > Staff </NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-secondary hover:text-white' : ' text-white  '}  > Blog </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-secondary hover:text-white' : ' text-white  '}  > Contact </NavLink>


    </>

    return (
        <div className="max-w-[1140px]   mx-auto">

            <HeaderTop />

            <div className="  md:hidden  px-6 sm:px-16 md:px-6   py-2  bg-primary items-center">
                <div className="sm:flex sm:gap-10 justify-between  text-white/[.5]">
                    <div className="sm:flex-none  cursor-pointer flex  items-center " onClick={() => setToggle(!toggle)}>
                        <FontAwesomeIcon icon={faBars}  />
                        <p className="pl-2 ">MENU</p>
                    </div>
                    <div className="sm: grow border-[1px] border-slate-700 px-4 py-4 my-2 rounded-full ">
                        <input type="text" placeholder="Search" className=" w-11/12 bg-transparent pr-2  focus:outline-none  "   />
                        <FontAwesomeIcon icon={faSearch}   />
                    </div>
                </div>

                {
                    toggle &&
                    <div className=" flex flex-col  gap-5 py-3" onClick={() => setToggle(!toggle)}>
                        {navMenu}
                    </div>
                }

            </div>


            <div>

                <div className=" hidden md:flex md:justify-between md:flex-row-reverse px-6 bg-primary items-center text-white">

                    <div className=" border-[1px] border-slate-700 px-4 py-4 my-2 rounded-full ">
                        <input type="text" placeholder="Search" className=" w-80 bg-transparent pr-2  focus:outline-none" />
                        <FontAwesomeIcon icon={faSearch} className=" " />
                    </div>

                    <div className=" flex  gap-10" onClick={() => setToggle(false)}>
                        {navMenu}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;