"use client";

import { TNavListProps } from '@/types/types';
import Link from 'next/link';


const NavList = ({ targetId, children, setIsOpen, customStyle }: TNavListProps) => {
    const handleClick = () => {
        if (setIsOpen) {
            setIsOpen(false);
        }
    };

    return (
        <Link
            href={`/#${targetId}`}
            onClick={handleClick}
            className={`${customStyle && customStyle} text-[0.9375rem] font-normal leading-[1.5rem] `}>
            {children}
        </Link>
    );
};

export default NavList;