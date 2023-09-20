import React, { useEffect, useState } from "react";

// import aos
import Aos from "aos";

// import aos css
import "aos/dist/aos.css";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Brands from "./components/Brands";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Product from "./components/Product";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

const App = () => {
    const [isActive, setIsActive] = useState(false);

    // initialize aos
    Aos.init({
        duration: 1800,
        offset: 100,
    });

    // Scroll Event
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 20 ? setIsActive(true) : setIsActive(false);
        });
        // if (isActive) {
        //     setTimeout(100)

        // }
    });

    return (
        <div className="overflow-hidden bg-neutral bg-hero bg-repeat-y bg-center bg-contain">
            <Header
                isActive={isActive}
                className={`${
                    isActive
                        ? "lg:top-0 bg-neutral shadow-lg"
                        : " top-[23%] opacity-0" // or top-[22%]
                } py-6 lg:py-8 fixed w-full transition-all duration-700 z-10`}
            />
            <Hero />
            <Feature1 />
            <Feature2 />
            <Feature3 />
            <Product />
            <Pricing />
            {/* <Overview /> */}
            <Testimonials />
            <Cta />
            <Footer />
        </div>
    );
};

export default App;
