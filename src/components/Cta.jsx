// React Packages
import React from "react";

// Data
import { cta } from "../data";

// Icons
import { HiOutlineChevronDown } from "react-icons/hi";

const Cta = () => {
    // Destructure CTA Data
    const { title, subtitle, btnText, img1, img2 } = cta;
    return (
        <section className="section lg:min-h-[100vh] items-center">
            <div
                className="container mx-auto contentBox"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                {/* Text */}
                <div className="max-w-[920px] mx-auto text-center">
                    <h2
                        className="text-black mb-6 title"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {title}
                    </h2>
                    <p
                        className="text-2xl lg:text-4xl text-black"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {subtitle}
                    </p>
                    {/* Button & Images */}
                    <div className="flex justify-around">
                        <img
                            className="hidden xl:flex object-contain h-96"
                            src={img1}
                            alt=""
                            data-aos="zoom-out-right"
                            data-aos-delay="700"
                        />
                        <button
                            className="btn btn-outline btn-md btn-white mt-[40px] lg:text-[22px] gap-x-[10px] mx-auto md:min-w-[200px]"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            {btnText}
                            <HiOutlineChevronDown />
                        </button>
                        <img
                            className="hidden xl:flex object-contain h-96"
                            src={img2}
                            alt=""
                            data-aos="zoom-out-left"
                            data-aos-delay="700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
