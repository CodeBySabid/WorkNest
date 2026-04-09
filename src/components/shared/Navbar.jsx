import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import logo from '/image.png'
import { IoCloseOutline, IoMenuOutline, IoMoonSharp, IoSunny } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [open, setOpen] = useState(null);
    const [theme, setTheme] = useState('dark');
    const handleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem('theme', newTheme);
    }
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        }
    }, []);
    const Nav = <>
        <div>
            <div
                className="relative"
                onMouseEnter={() => setOpenMenu("menu1")}
                onMouseLeave={() => setOpenMenu(null)}
            >
                <NavLink to={'/'} className={({ isActive }) => isActive ? "rounded-4xl text-blue-600 font-semibold flex items-center gap-0.5" : `${openMenu === 'menu1' ? "text-blue-300 flex items-center gap-0.5" : 'flex items-center gap-0.5'}`}>Find Work <IoIosArrowDown className={`${openMenu === 'menu1' ? 'transform transition-transform duration-300 ease-in-out rotate-180' : 'transform transition-transform duration-300 ease-in-out rotate-0'}`}></IoIosArrowDown> </NavLink>
                {openMenu === 'menu1' && (
                    <div className="absolute left-0 shadow-lg rounded-b-lg p-4 w-60 flex">
                        <div className="flex flex-col gap-1">
                            <NavLink className="hover:text-blue-500 cursor-pointer">Web Development</NavLink>
                            <NavLink className="hover:text-blue-500 cursor-pointer">UI/UX Design</NavLink>
                            <NavLink className="hover:text-blue-500 cursor-pointer">Mobile App Development</NavLink>
                            <NavLink className="hover:text-blue-500 cursor-pointer">Data Entry</NavLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <div>
            <div
                className="relative"
                onMouseEnter={() => setOpenMenu("menu2")}
                onMouseLeave={() => setOpenMenu(null)}
            >
                <NavLink to={'/home'} className={({ isActive }) => isActive ? "rounded-4xl text-blue-600 font-semibold flex items-center gap-0.5" : `${openMenu === 'menu2' ? "text-blue-300 flex items-center gap-0.5" : 'flex items-center gap-0.5'}`}>Find Work <IoIosArrowDown className={`${openMenu === 'menu2' ? 'transform transition-transform duration-300 ease-in-out rotate-180' : 'transform transition-transform duration-300 ease-in-out rotate-0'}`}></IoIosArrowDown> </NavLink>
                {openMenu === 'menu2' && (
                    <div className="absolute -translate-x-1/2  left-0 shadow-lg rounded-b-lg p-4 flex">
                        <div className="flex flex-col gap-2 mx-auto">
                            <div className='flex'>
                                <NavLink to={'/home'} className=" cursor-pointer">
                                    <div className='w-50 hover:bg-[#a3a3a35e] rounded-xl flex flex-col gap-3 items-start p-2'>
                                        <h1>Success stories</h1>
                                        <p>
                                            Discover how teams work strategically and grow together.
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink to={'/about'} className=" cursor-pointer">
                                    <div>
                                        <div className='w-50 hover:bg-[#a3a3a35e] rounded-xl flex flex-col gap-3 items-start p-2'>
                                            <h1>How to hire</h1>
                                            <p>
                                                Learn about the different ways to get work done.
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div className='flex'>
                                <NavLink to={'/servers'} className=" cursor-pointer">
                                    <div className='w-50 hover:bg-[#a3a3a35e] rounded-xl flex flex-col gap-3 items-start p-2'>
                                        <h1>                                Reviews
                                        </h1>
                                        <p>
                                            See what it’s like to collaborate on Upwork.
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink to={'/find'} className=" cursor-pointer">
                                    <div className='w-50 hover:bg-[#a3a3a35e] rounded-xl flex flex-col gap-3 items-start p-2'>
                                        <h1>                                How to find work
                                        </h1>
                                        <p>
                                            Learn about how to grow your independent career.
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
    return (
        <div className='w-screen py-1'>
            <div className='flex justify-between items-center md:px-4'>
                <h1 className='flex text-blue-400 gap-1 items-center justify-start font-semibold text-xl md:text-2xl'><img className='md:w-10 w-9 md:h-8 h-7 ' src={logo} alt="logo" />WorkNest</h1>
                <div className='lg:flex items-center gap-3 hidden'>
                    {Nav}
                </div>
                <div className=' text-black'>
                    <button onClick={handleTheme} className={`lg:text-3xl max-lg:text-xl mr-2.5 cursor-pointer`}>
                        {
                            theme === "dark" ? <IoSunny size="22"></IoSunny> : <IoMoonSharp size="22"></IoMoonSharp>
                        }
                    </button>
                    <button className='lg:hidden' onClick={() => setOpen(!open)}>
                        {open ? <IoCloseOutline size={26} /> : <IoMenuOutline size={26} />}
                    </button>
                </div>
                <div className='flex absolute lg:hidden'>
                    {
                        open ? <><div>{Nav}</div></> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;