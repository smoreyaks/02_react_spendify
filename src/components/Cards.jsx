// React Components
import React, { useState } from "react";

// Data
import { product } from "../data";

// Images
import ArrowImg from "../assets/img/product/cards/arrow.svg";

const Cards = () => {
    // Index State
    const [index, setIndex] = useState(1);

    // Destructure Product Data
    const { cards } = product;

    return (
        <>
            {/* Cards */}
            <div className="flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px] justify-around">
                {cards.map((card, cardIndex) => {
                    // Destructure Card
                    const { icon, title, subtitle, delay } = card;
                    return (
                        <div
                            key={cardIndex}
                            data-aos="zoom-out"
                            data-aos-offset="300"
                            data-aos-delay="delay"
                        >
                            <div
                                onClick={() => setIndex(cardIndex)}
                                className={`${
                                    index === cardIndex
                                        ? "bg-white shadow-2xl"
                                        : "shadow-md"
                                }
                              min-w-[230px] h-[350px] flex flex-col justify-between items-center mx-auto py-[50px] px-[50px] text-center rounded-[12px] cursor-pointer transition-all bg-white`}
                            >
                                {/* Card Icon */}
                                <div className="mb-6">
                                    <img src={icon} alt="" />
                                </div>

                                {/* Card Title */}
                                <div className="mb-3 text-[30px] font-medium">
                                    {title}
                                </div>

                                {/* Card Subtitles */}
                                <p className="mb-6 text-light">{subtitle}</p>

                                {/* Arrow Title */}
                                {index === cardIndex && <img src={ArrowImg} />}
                                <div></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Cards;
