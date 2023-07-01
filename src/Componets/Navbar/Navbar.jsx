
import { Link } from 'react-router-dom';
import logo from '../../assets/kisspng-computer-icons-font-awesome-icon-design-button-5adbbb3693d8b7.3603920515243497506056.jpg'
import './style.css'
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    const navLi = <>
        <li className='text-xl font-semibold hover: transform 
         hover:scale-75 duration-300 '>
            <HashLink
                to="/"
            >Home</HashLink>

        </li>

        <li className='text-xl font-semibold   hover:  transform 
         hover:scale-75 duration-300 '>
            <HashLink
                to="/#about"
            >About Me</HashLink>
        </li>
        <li className='text-xl  font-semibold  hover:  transform 
         hover:scale-75 duration-300 '>
            <HashLink
                to="/#expertise"
            >Expertise</HashLink>
        </li>
        <li className='text-xl font-semibold   hover: transform 
         hover:scale-75 duration-300 '>
            <HashLink
                to="/#testimonial"
            >Testimonial</HashLink>

        </li>
        <li className='text-xl font-semibold   hover: hover: transform 
         hover:scale-75 duration-300 '>
            <HashLink
                to="/#contact"
            >Contact</HashLink>

        </li>
        <li> <button onClick={toggleMode} className='btn btn-neutral'></button></li>
    </>
    return (

        <div className={isDarkMode ? 'dark' : 'light'}>

            <div className="navbar text-gray-800 " >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-teal-100 rounded-box w-52">
                            {navLi}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='w-[60px] h-[50px] rounded-3xl' src={logo} alt="" />
                    </Link>
                    <h2 className='text-2xl font-semibold text-gray-800' >Sazzadur <span className='text-red-500'>Rahman</span> Sakib</h2>
                </div>
                <div className="navbar-end justify-evenly  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navLi}
                    </ul>
                </div>

            </div>
        </div >
    );
};
export default Navbar;


