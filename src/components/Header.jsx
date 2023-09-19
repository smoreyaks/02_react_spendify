// React Packages
import React, { useState, useEffect } from "react";

// Data
import { header } from "../data";

// Icons
import { HiOutlineX, HiMenuAlt4 } from "react-icons/hi";

// Components
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";

const Header = ({ isActive }) => {
    // Mobile Navigation State
    const [mobileNav, setMobileNav] = useState(false);

    // Header State
    // const [isActive, setIsActive] = useState(false);

    // Destructure Header Data
    const { logo, btnText } = header;

    // // Scroll Event
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         window.scrollY > 20 ? setIsActive(true) : setIsActive(false);
    //     });
    // });

    return (
        <header
            id="header-nav"
            className={`${
                isActive ? "lg:top-0 bg-neutral shadow-lg" : " top-[0%]" // or top-[22%]
            } py-6 lg:py-8 fixed w-full transition-all duration-700 z-10`}
        >
            <div className="container mx-auto px-12 lg:px-[100px] flex justify-between items-center">
                {/* Logo */}
                <a data-aos="fade-down" data-aos-delay="1000" href="#">
                    <img className="object-fit h-7" src={logo} alt="" />
                </a>

                {/* Navigation - Hidden on Mobile, shows on Desktop */}
                <div
                    data-aos="fade-down"
                    data-aos-delay="1200"
                    className="hidden lg:flex"
                >
                    <Nav />
                </div>

                {/* CTA Button - Hidden on Mobile, shows on Deskop  */}
                <button
                    data-aos="fade-down"
                    data-aos-delay="1400"
                    className="btn btn-sm btn-outline hidden lg:flex"
                >
                    {btnText}
                </button>

                {/* Mobile Nav Trigger Button - Hidden on Mobile, shows on Desktop */}
                <button
                    className="lg:hidden"
                    onClick={() => setMobileNav(!mobileNav)}
                >
                    {mobileNav ? (
                        <HiOutlineX className="text-3xl text-accent" />
                    ) : (
                        <HiMenuAlt4 className="text-3xl text-accent" />
                    )}
                </button>
                {/* Mobile Navigation - Hidden on Mobile, shows on Desktop */}
                {/* ***** CHECK STYLING IF BROKEN ***** */}
                <div
                    className={`${
                        mobileNav ? "left-0" : "-left-full"
                    } fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all `}
                >
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
