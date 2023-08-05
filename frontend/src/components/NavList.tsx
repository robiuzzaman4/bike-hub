"use client";

import { TNavListProps } from '@/types/types';

const NavList = ({ targetId, children, setIsOpen, customStyle }: TNavListProps) => {
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        if (setIsOpen) {
            setIsOpen(false);
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`${customStyle && customStyle} text-[0.9375rem] font-normal leading-[1.5rem] `}>
            {children}
        </button>
    );
};

export default NavList;