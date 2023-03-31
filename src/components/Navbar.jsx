// import { useState } from 'react';
// import { BsSearch, BsSun } from 'react-icons/bs';
// import { AiOutlineBell, AiOutlineStar } from 'react-icons/ai';
// import { VscLayoutSidebarLeftOff } from 'react-icons/vsc';
// import { RxCounterClockwiseClock } from 'react-icons/rx';
// import Notification from './Notification'

// const Navbar = () => {
//   const [notificationsOpen, setNotificationsOpen] = useState(false);

//   const handleNotificationsClick = () => {
//     setNotificationsOpen(!notificationsOpen);
//   };

//   return (
    
//     <nav className="sticky top-0 bg-[#1C1C1C]/90 border-b border-white/10 z-30 h-[72px] md:h-[84px] p-7 md:p-10 text-white">
//       <div className="flex justify-center md:justify-between">
//         <div className="flex items-center w-10 md:w-60 justify-between">
//           <VscLayoutSidebarLeftOff />
//           <AiOutlineStar />
//           <span className="hidden md:block">Event Selection /</span>
//         </div>
//         <div className="flex items-center w-80 md:w-96 justify-between">
//           <label htmlFor="search" className="relative text-white/30 focus-within:text-gray-600  block">
//             <BsSearch className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-3" />
//             <input type="text" className="form-input bg-white/10 rounded placeholder-gray-500 pl-10" placeholder="Search" />
//           </label>
//           <BsSun />
//           <RxCounterClockwiseClock />
//           <AiOutlineBell onClick={handleNotificationsClick} />
//           <VscLayoutSidebarLeftOff />
//         </div>
//       </div>

// <div>
//     {notificationsOpen &&
//         <Notification/>}
//       </div>
      
//     </nav>
//   );
// };

// export default Navbar;
