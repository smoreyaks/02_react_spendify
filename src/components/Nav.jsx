// React Packages
import React from "react";

// Data
import { nav } from "../data";

const Nav = () => {
    return (
        <nav>
            <ul className="flex gap-x-10">
                {nav.map((item, index) => {
                    // Destructure Item
                    const { href, name } = item;
                    return (
                        <li key={index}>
                            <a
                                className="hover:text-accent font-semibold transition"
                                href={href}
                            >
                                {name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;
