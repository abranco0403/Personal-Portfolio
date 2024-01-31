
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// export const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const isDesktop = useMediaQuery({ minWidth: 1024 });

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <header className='w-full max-w-[80rem] h-[50px] mx-auto border border-gray-700 p-1 flex justify-between'>
//       <div className="flex items-center">
//         <Link to="/">Alessandro Branco</Link>
//         <img src="" alt="" />
//       </div>
//       {isDesktop ? (
//         <nav className="hidden lg:flex lg:justify-between lg:items-center lg:py-4 lg:pl-4 lg:transform lg:transition lg:duration-300">
//           <NavLink className='p-2' to="/" end>Home</NavLink>
//           <NavLink className='p-2 mx-2' to="products">Products</NavLink>
//           <NavLink className='p-2' to="contact">Contact</NavLink>
//         </nav>
//       ) : (
//         <>
//           <nav className={`flex items-center lg:hidden ${showMenu ? 'block' : 'hidden'}`}>
//             <NavLink className='p-2' to="/" end>Home</NavLink>
//             <NavLink className='p-2 mx-2' to="products">Products</NavLink>
//             <NavLink className='p-2' to="contact">Contact</NavLink>
//           </nav>
//           <button className="lg:hidden" onClick={toggleMenu}>
//             {showMenu ? (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//               </svg>
//             ) : (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//               </svg>
//             )}
//           </button>
//         </>
//       )}
//     </header>
//   );
// };



export const Header = () => {
  return (


    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Alessandro Branco</span>
      </Link>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <NavLink to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
          </li>
          <li>
            <NavLink to="about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
          </li>
          <li>
            <NavLink to="projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</NavLink>
          </li>
          <li>
            <NavLink to="contaxt" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
          </li>
        </ul>
      </div>
      </div>
    </nav>

  );
};