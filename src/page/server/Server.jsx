import React from 'react';
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

// react-icons
import { FaCode, FaPalette, FaPenNib, FaBullhorn, FaBriefcase, FaBalanceScale, FaUsers, FaTools, FaRobot } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";

const Server = () => {

  const categories = [
    { title: "AI Services", icon: FaRobot },
    { title: "Development & IT", icon: FaCode },
    { title: "Design & Creative", icon: FaPalette },
    { title: "Sales & Marketing", icon: FaBullhorn },
    { title: "Writing & Translation", icon: FaPenNib },
    { title: "Admin & Support", icon: FaBriefcase },
    { title: "Finance & Accounting", icon: MdAccountBalance },
    { title: "Legal", icon: FaBalanceScale },
    { title: "HR & Training", icon: FaUsers },
    { title: "Engineering & Architecture", icon: FaTools },
  ];

  // ✅ logo images (cdn logos use করলাম)
  const logos = [
    "https://cdn.simpleicons.org/airbnb",
    "https://cdn.simpleicons.org/databricks",
    "https://cdn.simpleicons.org/cloudflare",
    "https://cdn.simpleicons.org/scaleway",
    "https://cdn.simpleicons.org/microsoft",
    "https://cdn.simpleicons.org/grammarly",
    "https://cdn.simpleicons.org/bamboohr",
    "https://cdn.simpleicons.org/shutterstock",
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">

      {/* 🔝 Trusted Logos */}
      <div className="text-center mb-12">
        <p className="text-gray-400 text-xs md:text-sm tracking-widest mb-6">
          TRUSTED BY 800,000+ CLIENTS
        </p>

        {/* ✅ Marquee */}
        <Marquee pauseOnHover={true} speed={50} gradient={false}>
          {logos.map((logo, i) => (
            <div key={i} className="mx-8 flex items-center">
              <img
                src={logo}
                alt="brand"
                className="h-8 md:h-10 opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* 🧠 Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 max-w-2xl">
        Find freelancers for every type of work
      </h2>

      {/* 📦 Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {categories.map((cat, index) => {
          const Icon = cat.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="group bg-white border rounded-xl p-5 shadow-sm hover:shadow-lg hover:border-green-500 cursor-pointer"
            >
              <Icon className="text-green-600 w-8 h-8 mb-4 transition group-hover:scale-110" />

              <h3 className="text-sm md:text-base font-medium text-gray-800">
                {cat.title}
              </h3>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default Server;