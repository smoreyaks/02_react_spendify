// React  Packages
import React, { useState } from "react";

// Data
import { pricing } from "../data";

// Icons
import { HiOutlineArrowNarrowRight, HiCheck } from "react-icons/hi";

const Pricing = () => {
    // Index State
    const [index, setIndex] = useState(1);

    // Destructure Pricing
    const { title, cards } = pricing;

    return (
        <section className="section">
            <div
                className="container mx-auto contentBox"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                {/* Title */}
                <h2
                    className="h2 mb-10 lg:mb-20 text-center px-10"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {title}
                </h2>

                {/* Cards */}
                <div className="flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center">
                    {cards.map((card, cardIndex) => {
                        // Destructure Card
                        const {
                            icon,
                            title,
                            services,
                            price,
                            userAmount,
                            btnText,
                            delay,
                        } = card;

                        // Card
                        return (
                            <div
                                key={cardIndex}
                                data-aos="fade-up"
                                data-aos-delay={delay}
                                data-aos-offset="300"
                            >
                                <div
                                    onClick={() => setIndex(cardIndex)}
                                    className={`${
                                        cardIndex === index
                                            ? "bg-white shadow-2xl"
                                            : "shadow-md bg-[#FEFEFE]"
                                    } 
                                    min-w-[230px] h-[500px] rounded-[12px] p-[40px] cursor-pointer transition-all bg-white`}
                                >
                                    {/* Card Title Row */}
                                    <div className="flex flex-row justify-between">
                                        {/* Card Title */}
                                        <div className="text-2xl font-semibold mb-8">
                                            {title}
                                        </div>

                                        {/* Card Icon */}
                                        <div className="mb-8">
                                            <img src={icon} alt="" />
                                        </div>
                                    </div>

                                    {/* Card Services */}
                                    <div className="flex flex-col gap-y-2 mb-6">
                                        {services.map((service, index) => {
                                            // Destructure Service
                                            const { name } = service;
                                            return (
                                                <div
                                                    className="flex justify-start items-center gap-x-[10px]"
                                                    key={index}
                                                >
                                                    <HiCheck className="text-light" />
                                                    <div>{name}</div>
                                                </div>
                                            );
                                        })}
                                        <div className="mb-10 py-4">
                                            <div className="flex justify-start">
                                                <span className="text-2xl font-semibold">
                                                    {price}/
                                                </span>
                                                <span className="text-2xl text-light font-light">
                                                    {" "}
                                                    Month{" "}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <div className="flex justify-center">
                                        <button
                                            className={`${
                                                cardIndex === index
                                                    ? "bg-accent hover:bg-accentHover text-white"
                                                    : "border border-accent text-accent btn-outline"
                                            } btn btn-sm space-x-[14px] `}
                                        >
                                            <span>{btnText}</span>
                                            <HiOutlineArrowNarrowRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
