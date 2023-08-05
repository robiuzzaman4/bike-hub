"use client";

import { TScrollToTopProps } from '@/types/types';
import { useState, useEffect } from 'react';

const ScrollToTop = ({ style }: TScrollToTopProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setIsVisible(scrollTop > 100); // Show the button when the user has scrolled more than 100 pixels
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Add smooth scrolling effect
        });
    };

    return (
        <button
            className={`scroll-to-top-button ${isVisible ? 'visible' : 'hidden'} ${style && style} z-10 h-10 w-10 flex items-center justify-center rounded-full bg-bh-secondary hover:bg-bh-neutrals-100 transition duration-300 shadow-grid hover:text-bh-primary`}
            onClick={scrollToTop}
        >
            <i className="ri-arrow-up-line text-2xl"></i>
        </button>
    );
};

export default ScrollToTop;
