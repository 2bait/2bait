'use client';
import React, {  useEffect, useState } from 'react';

type SectionProps = {
    id?: string;
    title?: string;
    subtitle?: any;
    children: React.ReactNode;
    className?: string;
};

export default function Section({ id, title, subtitle, children,className   }:SectionProps) {
   
    const [visibleSection, setVisibleSection] = useState("");

    useEffect(() => {
        const targetSections = document.querySelectorAll("section");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    if (id) {
                        setVisibleSection(id);
                    }
                }
            });
        });

        targetSections.forEach((section) => {
            observer.observe(section);
        });
    }, []);
    
    
     return (
        <section id={id} className={`section ${className ? className : ""} `}>
            {title ? <div className='section-header'>
                <h2>{title}</h2>
                <p className={`section-subtitle underline ${visibleSection == id ? "animate-underline":""}`}>{subtitle}</p>
            </div> : <></>
            }
            
                {children}
        </section>
    );
};
