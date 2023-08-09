import React, { FC, useState, useEffect } from 'react';

type WrapperProps = {
    children: any;
};

const Header: FC<WrapperProps> = ({ children }) => {
    const [screenSize, setScreenSize] = useState({
        height: 0,
        width: 0
    });

    useEffect(() => {
        const onResize = () => {
            setScreenSize({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }

        window.addEventListener("resize", onResize);
    
        return () => { window.removeEventListener("resize", onResize); }
        
    }, []);


const style = {
    height: screenSize.height
};
return (
    <header id='home' style={style}>
        {children}
    </header>
);
};

export default Header;
