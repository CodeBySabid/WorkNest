import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import logo from '/image.png'
import { IoMoonSharp, IoSunny } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);
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
        <NavLink>
            <div
                className=""
                onMouseEnter={() => setOpenMenu("menu1")}
                onMouseLeave={() => setOpenMenu(null)}
            >
                <button className="font-medium flex items-center gap-1 justify-end">Find Work <IoIosArrowDown className={`${openMenu === 'menu1' ? 'transform transition-transform duration-300 ease-in-out rotate-180' : 'transform transition-transform duration-300 ease-in-out rotate-0'}`}></IoIosArrowDown> </button>
                {openMenu === 'menu1' && (
                    <div className="absolute bg-[#6362627e] left-0 shadow-lg rounded-b-lg p-4 flex w-screen">
                        <ul className="space-y-2">
                            <li className="hover:text-blue-500 cursor-pointer">Web Development</li>
                            <li className="hover:text-blue-500 cursor-pointer">UI/UX Design</li>
                            <li className="hover:text-blue-500 cursor-pointer">Mobile App Development</li>
                            <li className="hover:text-blue-500 cursor-pointer">Data Entry</li>
                        </ul>
                    </div>
                )}
            </div>
        </NavLink>
        <NavLink>
            <div
                className=""
                onMouseEnter={() => setOpenMenu("menu2")}
                onMouseLeave={() => setOpenMenu(null)}
            >
                <button className="font-medium flex items-center gap-1 justify-end">Find Work <IoIosArrowDown className={`${openMenu === 'menu2' ? 'transform transition-transform duration-300 ease-in-out rotate-180' : 'transform transition-transform duration-300 ease-in-out rotate-0'}`}></IoIosArrowDown> </button>
                {openMenu === 'menu2' && (
                    <div className="absolute bg-[#6362627e] left-0 shadow-lg rounded-b-lg p-4 flex w-screen">
                        <div>
                            <div className='flex flex-col gap-6 items-start p-6'>
                                <h1>Success stories</h1>
                                <p>
                                    Discover how teams work strategically and grow together.
                                </p>
                            </div>
                            <div className='flex flex-col gap-6 items-start p-6'>
                                <h1>How to hire</h1>
                                <p>
                                    Learn about the different ways to get work done.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-6 items-start p-6'>
                                <h1>                                Reviews
                                </h1>
                                <p>
                                    See what it’s like to collaborate on Upwork.
                                </p>
                            </div>
                            <div className='flex flex-col gap-6 items-start p-6'>
                                <h1>                                How to find work
                                </h1>
                                <p>
                                    Learn about how to grow your independent career.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </NavLink>

    </>
    return (
        <div className='w-screen p-3'>
            <div className='flex justify-between md:px-4'>
                <h1 className='flex text-blue-400 gap-1 items-center justify-start font-semibold text-xl md:text-2xl'><img className='md:w-10 w-9 md:h-8 h-7 ' src={logo} alt="logo" />WorkNest</h1>
                <div className='flex gap-3'>
                    {Nav}
                </div>
                <button onClick={handleTheme} className={`lg:text-3xl max-lg:text-xl mr-2.5 cursor-pointer`}>
                    {
                        theme === "dark" ? <IoSunny size="22"></IoSunny> : <IoMoonSharp size="22"></IoMoonSharp>
                    }
                </button>
            </div>
        </div>
    );
};

export default Navbar;