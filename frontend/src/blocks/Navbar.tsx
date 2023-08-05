"use client";

import NavList from "@/components/NavList";
import { navLinks, navbarInfo } from "@/constants";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-bh-neutrals-100 z-10" id="home">
            <div className="bh-container flex flex-col md:flex-row md:items-center justify-between gap-6 py-6 relative">
                {/* nab brand */}
                <Link
                    href="/"
                    className="flex items-center gap-2">
                    <h3 className="bh-text-h3 text-bh-primary">
                        {navbarInfo.brandTextFirst}
                    </h3>
                    <h3 className="bh-text-h3">
                        {navbarInfo.brandTextLast}
                    </h3>
                </Link>

                <div className={`md:flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${isOpen ? "flex" : "hidden"}`}>
                    {
                        navLinks.map((link) => (
                            <NavList
                                targetId={link.targetId}
                                setIsOpen={setIsOpen}
                                customStyle="text-bh-neutrals-600 hover:text-bh-primary transition">{link.title}</NavList>
                        ))
                    }

                    {/* subscribe */}
                    <NavList
                        targetId="newsletter"
                        setIsOpen={setIsOpen}
                        customStyle="md:hidden px-4 py-2 rounded-full bg-bh-primary transition text-bh-neutrals-100 font-medium shrink-0 text-center w-full">Subscribe</NavList>
                </div>

                {/* menu button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden absolute top-6 right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 h-9 w-9 flex items-center justify-center rounded-full bg-bh-neutrals-100 hover:bg-bh-secondary transition duration-300 shadow-grid">
                    {
                        isOpen ? <i className="ri-close-line text-xl"></i>
                            : <i className="ri-equal-line text-xl"></i>
                    }
                </button>

                {/* subscribe */}
                <NavList
                    targetId="newsletter"
                    setIsOpen={setIsOpen}
                    customStyle="hidden md:block px-4 py-2 rounded-full bg-bh-primary transition text-bh-neutrals-100 font-medium shrink-0 text-center">Subscribe</NavList>

            </div>
        </nav>
    );
};

export default Navbar;