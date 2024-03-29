// React Packages
import React from "react";

// Data
import { features } from "../data";

const Feature1 = () => {
    // Destructure Features
    const { feature1 } = features;

    // Destructure Feature 1
    const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature1;
    return (
        <section
            id="feature-1"
            className="section lg:min-h-[100vh] flex items-center feature-1"
        >
            <div
                className="container mx-auto contentBox"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <div className="flex flex-col justify-start lg:justify-end lg:flex-row lg:items-center lg:gap-x-[30px]">
                    {/* Text */}
                    <div
                        className="flex-1"
                        data-aos="fade-right"
                        data-aos-offset="400"
                    >
                        <h2 className="title text-center">{title}</h2>
                        <div className="text-center pretitle">{pretitle}</div>
                        <p className="lead text-center">{subtitle}</p>

                        {/* Learn More Button */}
                        <div className="flex justify-center lg:flex-none">
                            <button className="btn btn-md btn-outline btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
                                {btnLink}
                                <img src={btnIcon} alt="" />
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div
                        className="flex-1"
                        data-aos="fade-left"
                        data-aos-offset="300"
                    >
                        <img className="lg:scale-100" src={image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature1;
