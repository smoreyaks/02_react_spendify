// React Packages
import React from "react";

// Data
import { overview } from "../data";

// Components
import Brands from "./Brands";

const Overview = () => {
    // Destructure Overview Data
    const { productImg, title } = overview;
    return (
        <section
            id="overview"
            className="pt-[30px] lg:py-[266px] section lg:min-h-[100vh] flex items-center"
        >
            <div
                className="container mx-auto flex flex-col justify-center items-center overflow-hidden contentBox"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <h2 className="title flex text-center">{title}</h2>
                <Brands />
                {/* <img
                    src={productImg}
                    alt=""
                    data-aos="fade-up"
                    data-aos-offset="300"
                /> */}
            </div>
        </section>
    );
};

export default Overview;
