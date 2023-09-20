import React, { useEffect, useState } from "react";

import Header from "./Header";

// Import data
import { hero } from "../data";

// Import Icons
import { HiOutlineChevronDown } from "react-icons/hi";

const Hero = ({ isActive, className }) => {
    // Destructure Hero Data
    const { title, subtitle, btnText, compText, image } = hero;
    const [navVisible, setNavVisible] = useState(false);

    // Scroll Event
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 20 ? setNavVisible(true) : setNavVisible(false);
        });
    });

    return (
        <section
            id="hero"
            className="min-h-[900px] lg:min-h-[100vh] py-auto section flex items-center hero"
        >
            <div
                className="container mx-auto lg:min-h-[700px] flex justify-around items-center contentBox"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <Header
                    isActive={isActive}
                    className={`${
                        navVisible
                            ? "lg:top-0 bg-neutral opacity-0 duration-200 ease-disappear"
                            : " top-[0] opacity-100 duration-500 ease-appear" // or top-[22%]
                    } py-6 lg:py-8 fixed w-full  z-10`}
                />

                <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row lg:items-center justify-between text-center lg:text-left pt-20 lg:pt-0">
                    {/* Hero Title Text */}
                    <div className="flex-1 text-center">
                        <h1
                            className="title mb-2 lg:mb-5"
                            data-aos="fade-down"
                            data-aos-delay="400"
                        >
                            {title}
                        </h1>

                        {/* Subtitle Text */}
                        <p
                            className="py-2 lead mb-5 lg:mb-10"
                            data-aos="fade-down"
                            data-aos-delay="800"
                        >
                            {subtitle}
                        </p>

                        {/* Btn & Comp Text */}
                        <div
                            className="flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6"
                            data-aos="fade-down"
                            data-aos-delay="1300"
                        >
                            <button className="btn btn-md lg:btn-lg btn-accent flex justify-center items-center">
                                {btnText}
                            </button>
                            <span className="text-light lg:lead lg:mb-0">
                                {compText}
                            </span>
                        </div>
                    </div>

                    {/* Image */}
                    <div
                        className="flex flex-1 max-h-auto"
                        data-aos="fade-up"
                        data-aos-delay="1700"
                    >
                        <img className="" src={image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
