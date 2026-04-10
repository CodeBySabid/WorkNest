import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/image.png";
import {
  IoCloseOutline,
  IoMenuOutline,
  IoMoonSharp,
  IoSunny,
} from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Theme Toggle
  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Animation Variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <>
      {/* Navbar */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-screen shadow-md py-2"
      >
          <div className="flex z-50 justify-between items-center px-4">
            {/* Logo */}
            <h1 className="flex items-center gap-1 font-semibold text-xl md:text-2xl text-blue-500">
              <img className="w-8 h-7 md:w-10 md:h-8" src={logo} alt="logo" />
              WorkNest
            </h1>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Menu 1 */}
              <div
                className="relative"
                onMouseEnter={() => setOpenMenu("menu1")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <NavLink className="flex items-center gap-1">
                  Find Work
                  <motion.span
                    animate={{ rotate: openMenu === "menu1" ? 180 : 0 }}
                  >
                    <IoIosArrowDown />
                  </motion.span>
                </NavLink>

                <AnimatePresence>
                  {openMenu === "menu1" && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 mt-3 shadow-lg rounded-xl p-4 w-56"
                    >
                      <div className="flex flex-col gap-2">
                        <NavLink className="hover:text-blue-500">
                          Web Development
                        </NavLink>
                        <NavLink className="hover:text-blue-500">
                          UI/UX Design
                        </NavLink>
                        <NavLink className="hover:text-blue-500">
                          Mobile App Development
                        </NavLink>
                        <NavLink className="hover:text-blue-500">
                          Data Entry
                        </NavLink>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              {/* Theme Button */}
              <button onClick={handleTheme}>
                {theme === "dark" ? <IoSunny size={22} /> : <IoMoonSharp size={22} />}
              </button>

              {/* Mobile Toggle */}
              <button className="lg:hidden" onClick={() => setOpen(!open)}>
                {open ? <IoCloseOutline size={26} /> : <IoMenuOutline size={26} />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="fixed lg:hidden top-9 right-0 w-2/3 h-full shadow-lg p-5"
              >
                <div className="flex flex-col gap-4">
                  <NavLink>Find Work</NavLink>
                  <NavLink>About</NavLink>
                  <NavLink>Contact</NavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
      </motion.div>

    </>
  );
};

export default Navbar;