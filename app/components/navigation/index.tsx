'use client'
import useDarkMode from "@/src/useDarkMode";
import React, { FC, useEffect, useState } from "react";
import NavigationLink from "./navigation_link";
import { usePathname } from 'next/navigation'
import { FaBars, FaXmark } from "react-icons/fa6";


type NavigationProps = {
    navigation: object;
};

export default function Navigation({ navigation }: NavigationProps) {
    //const [navigationOpen, setNavigationOpen] = useState<boolean>(false);


    // const toggleNavigation = () => {
    //     setNavigationOpen((navigationOpen) => !navigationOpen);
    // };

    const [visibleSection, setVisibleSection] = useState("home");
    const [isOpen, setOpen] = useState(false);
    const { isDarkMode, toggleDarkMode, resetToSystem } = useDarkMode();

    useEffect(() => {
        const targetSections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id");
                        if (id) {
                            setVisibleSection(id);
                        }
                    }
                });
            },
            {
                root: null,
                threshold: 0.3,        // sweet spot for stacked sections
                rootMargin: "0px 0px -40% 0px", // triggers when top 60% of viewport
            }
        );

        targetSections.forEach((section) => {
            observer.observe(section);
        });
    }, []);


    return (
        <>
            <div className="nav-logo">From Bait to Brilliance</div>
            <nav id="nav-menu" className={`nav-menu ${isOpen ? "show" : ""}`}>

                {Object.keys(navigation).map((key, index) => {
                    const navigationName = navigation[key as keyof typeof navigation];
                    return (
                        <NavigationLink
                            key={index}
                            link={`#${key}`}
                            name={navigationName}
                            isSelected={visibleSection === key}
                        />
                    );
                })}


                <button id="theme-toggle"
                    className="theme-toggle"
                    onClick={toggleDarkMode}
                >
                    <span id="themeIcon">{isDarkMode ? '🌙' : '☀️'}</span>
                    <span id="themeMode">Mode</span>
                </button>
            </nav>
                <button id="mobile-toggle" onClick={() => setOpen(!isOpen)}>
                    
                    {isOpen ? <FaXmark /> : <FaBars />}
                </button>
        </>
    );
};
