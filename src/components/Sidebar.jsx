import { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../links";
import avatar from "../assets/avatar.png";
import logo from "../assets/Logo.png";
import {
  AiOutlineMenu,
  AiOutlineBell, AiOutlineStar
} from "react-icons/ai";
import { BsSearch, BsSun } from 'react-icons/bs';
import { VscLayoutSidebarLeftOff } from 'react-icons/vsc';
import { RxCounterClockwiseClock, RxSlash} from 'react-icons/rx';

import Notification from './Notification'
// import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";


const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }; 
   const handleNotificationsClick = () => {
    setNotificationsOpen(!notificationsOpen);
  };
  return (
    <div className="flex">
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute left-1 top-4 z-[99] md:hidden text-white"
      />

      <aside className={`md:flex bg-[#1C1C1C]/90 md:w-[15vw] pr-5 text-white text-sm border-r border-white/10 ${
          nav ? "block" : "hidden md:block"
        }`}>
        <div>
          <>
            <div className="mt-6 ml-6 flex items-center">
              <img
                src={avatar}
                alt="avatar"
                className="rounded-full w-[24px] cursor-pointer"
              />{" "}
              <span className="ml-[8px]">Clark Kent</span>
            </div>
            {links.map((item) => (
              <div key={item.id} className="ml-7">
                <p className="text-white/40 mb-3 mt-8">
                  {item.title}
                  {item.title === "Favorites" && (
                    <span className="text-white/20 ml-[20px]">
                      Recently
                    </span>
                  )}
                </p>
                {item.links.map((link) => (
                  <NavLink to={`/${link.name}`} key={link.id}>
                    <div className="flex items-center">
                      <div className="text-white/20 md:mr-3">
                        {link.drop_down}
                      </div>
                      <div>{link.icon}</div>

                      <span className="md:text-sm">{link.name}</span>
                    </div>
                  </NavLink>
                ))}
              </div>
            ))}
          </>
          <img
            src={logo}
            alt="logo"
            className="absolute bottom-7 left-10 w-28 md:w-26"
          />
        </div>
      </aside>
      <div className={`w-screen transition-all duration-500 ${notificationsOpen ? 'mr-64': 'ml-0'}`}>
    <nav className="top-0 bg-[#1C1C1C]/90 border-b border-white/10 z-30 h-[72px] md:h-[84px] p-7 md:p-10 text-white">
      <div className="flex justify-center md:justify-between">
        <div className="flex items-center w-10 md:w-60 justify-between">
          <VscLayoutSidebarLeftOff />
          <AiOutlineStar />
          <span className="hidden md:block" aria-label="Breadcrumb"> <ul><li className="inline-flex items-center"><a href="/"  className="inline-flex items-center text-sm">Event Selection<RxSlash className="text-white/40"/></a></li></ul> </span>
        </div>
        <div className="flex items-center w-80 md:w-96 justify-between">
          <label htmlFor="search" className="relative text-white/30 focus-within:text-gray-600  block">
            <BsSearch className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-3" />
            <input type="text" className="form-input h-7 bg-white/10 rounded placeholder-gray-500 pl-10" placeholder="Search" />
          </label>
          <BsSun />
          <RxCounterClockwiseClock />
          <AiOutlineBell onClick={handleNotificationsClick} />
          <VscLayoutSidebarLeftOff />
        </div>
      </div>

<div>
    {notificationsOpen &&
        <Notification/>}
      </div>
      
    </nav>
 
      
    
    <Dashboard />
    <Footer/>
      </div>
      
    </div>
  );
};

export default Sidebar;
