import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { styles } from "../../styles/styles";
import { logo, close, menu } from "../../assets/index";
import { navLinks } from "../constants/content";

const Navbar = () => {
    const navRef = useRef();
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);


    const handleClick = useCallback(
        (e) => {
            if (e.target === navRef.current && toggle) {
                setToggle(false);
            }
        },
        [toggle, navRef]
    );

    return (
        <nav
            className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scroll(0, 0);
                    }}
                >
                    <Image
                        src={logo}
                        alt="logo"
                        className="w-9 h-9 object-contain imageRounded"
                    />
                    <p className="text-white text-[18px] font-bold cursor-pointer">
                        Mahfujar Rahman
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title
                                    ? "text-white"
                                    : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            {link?.id === "Download" ? (
                                <a
                                    href={`${link?.link}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.title}
                                </a>
                            ) : (
                                <a href={`#${link.id}`}>{link.title}</a>
                            )}
                        </li>
                    ))}
                </ul>
                <div
                    ref={navRef}
                    onClick={handleClick}
                    className="sm:hidden flex flex-1 justify-end items-center"
                >
                    <Image
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] cursor-pointer object-contain"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-2xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${
                                        active === link.title
                                            ? "text-white"
                                            : "text-secondary"
                                    }   text-[16px] font-medium cursor-pointer font-poppins `}
                                    onClick={() => {
                                        setActive(link.title);
                                        setToggle(!toggle);
                                    }}
                                >
                                    {link?.id === "Download" ? (
                                        <a
                                            href={'../../assets/Mahfujar Rahman Resume - Full Stack Developer.pdf'}
                                            download
                                        >
                                            {link.title}
                                        </a>
                                    ) : (
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
