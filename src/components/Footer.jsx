// React Packages
import React from "react";

// Data
import { footer } from "../data";

// Components
import Copyright from "../components/Copyright";

const Footer = () => {
    // Destructure Footer Data
    const { logo, links, legal, newsletter, form } = footer;
    return (
        <footer className="pt-[142px] pb-[60px] section">
            <div
                className="container mx-auto contentBox"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-evenly gap-y-8">
                    {/* List 1 */}
                    <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="500"
                    >
                        <div className="text-2xl uppercase font-bold mb-6 px-10 ">
                            Links
                        </div>
                        <ul className="flex flex-col gap-y-3 px-10 ">
                            {links.map((item, index) => {
                                // Destructure Item
                                const { href, name } = item;
                                return (
                                    <li key={index}>
                                        <a
                                            className="font-semibold hover:text-accent transition"
                                            href={href}
                                        >
                                            {name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* List 2 */}
                    <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="700"
                    >
                        <div className="text-2xl uppercase font-bold mb-6">
                            Legal
                        </div>
                        <ul className="flex flex-col gap-y-3">
                            {legal.map((item, index) => {
                                // Destructure Item
                                const { href, name } = item;
                                return (
                                    <li key={index}>
                                        <a
                                            className="font-semibold hover:text-accent transition"
                                            href={href}
                                        >
                                            {name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="900"
                    >
                        <div className="text-2xl uppercase font-bold mb-6">
                            {newsletter.title}
                        </div>
                        <div className="text-xl text-light mb-[18px]">
                            {newsletter.subtitle}
                        </div>

                        {/* Form */}
                        <form className="max-w-[349px] mb-[10px]">
                            <div className="h-[62px] p-[7px] flex border border-dark rounded-lg">
                                <input
                                    className="w-full h-full pl-2 border-none text-sm sm:text-base outline-none placeholder:text-dark"
                                    type="text"
                                    placeholder={form.placeholder}
                                />
                                <button className="btn btn-xsm sm:btn-sm text-sm sm:text-base bg-accent hover:bg-accentHover w-[102px] text-white ">
                                    {form.btnText}
                                </button>
                            </div>
                        </form>
                        <span className="text-sm sm:text-base text-light">
                            {form.smallText}
                        </span>
                    </div>
                </div>
                <hr
                    className="mt-10 mb-5"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="1100"
                />
                <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left lg:justify-center gap-y-8">
                    {/* Logo */}
                    <div
                        data-aos="fade-up"
                        // data-aos-offset='200'
                        data-aos-delay="1300"
                    >
                        <img className="object-fit h-7" src={logo} alt="" />
                    </div>
                    <Copyright />
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="1300"
                    className="mt-4 text-center"
                >
                    <a
                        className="hover:text-accent"
                        href="https://www.freepik.com/free-vector/flat-colorful-geometric-background_14667909.htm"
                    >
                        Background Image by pikisuperstar on Freepik
                    </a>{" "}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
