import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Removed Link, only need navigate
import { ArrowUpRight } from "lucide-react"; // Make sure lucide-react is installed
import PropTypes from 'prop-types';

export const SlideNavTabs = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 hidden mx-auto text-white bg-transparent md:block"> {/* Hide on mobile */}
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Helper to scroll to an id
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (e, target) => {
    e.preventDefault();
    // We only have one route ("/") currently. Ensure we are on it.
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      // Slight delay to ensure content is rendered
      setTimeout(() => scrollToId(target), 50);
    } else {
      scrollToId(target);
    }
  };

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({ ...prev, opacity: 0 }));
      }}
      className="relative flex items-center px-5 py-3 mx-auto text-sm text-gray-200 border-2 rounded-full shadow-lg mt-14 bg-gradient-to-tr to-transparent w-fit border-white/5 from-zinc-300/5 via-gray-400/5 backdrop-blur-lg"
    >
      <Tab setPosition={setPosition}>
        <a href="#home" className="w-full h-full" onClick={(e) => handleNavClick(e, "home")}>Home</a>
      </Tab>
      <Tab setPosition={setPosition}>
        <a href="#features" className="w-full h-full" onClick={(e) => handleNavClick(e, "features")}>Features</a>
      </Tab>
      <Tab setPosition={setPosition}>
        <a href="#pricing" className="w-full h-full" onClick={(e) => handleNavClick(e, "pricing")}>Pricing</a>
      </Tab>
      <Tab setPosition={setPosition}>
        <a href="#contact" className="w-full h-full" onClick={(e) => handleNavClick(e, "contact")}>Contact Us</a>
      </Tab>

      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-start justify-start w-full px-5 py-3 ml-3 duration-200 border gap-x-2 rounded-3xl sm:w-auto group bg-page-gradient border-white/30 text-md font-geistSans hover:border-zinc-600 hover:bg-transparent/10 hover:text-zinc-100"
      >
        Try Now
        <div className="relative flex items-center justify-center w-5 h-5 ml-1 overflow-hidden">
          <ArrowUpRight className="absolute transition-all duration-500 group-hover:translate-x-4 group-hover:-translate-y-5" />
          <ArrowUpRight className="absolute transition-all duration-500 -translate-x-4 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
        </div>
        <span className="absolute inset-x-0 w-1/2 h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </a>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="block relative z-40 py-2.5 px-3 text-xs text-white cursor-pointer md:py-2 md:px-5 md:text-base lg:text-lg"
      >
        {children}
      </li>
  );
};

Tab.propTypes = {
  children: PropTypes.node,
  setPosition: PropTypes.func.isRequired,
};

// Cursor component
const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      className="absolute z-0 bg-transparent rounded-full shadow-lg h-7 bg-glass-gradient md:h-10 backdrop-blur-lg"
    />
  );
};

Cursor.propTypes = {
  position: PropTypes.shape({
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    opacity: PropTypes.number.isRequired,
  }).isRequired,
};
