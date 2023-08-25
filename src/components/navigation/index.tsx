import React, { FC, useState } from "react";
import Link from './link';

type NavigationProps = {
    navigation: object;
};

const Navigation: FC<NavigationProps> = ({ navigation }) => {
    const [navigationOpen, setNavigationOpen] = useState<boolean>(false);

    console.log(navigationOpen)
    const toggleNavigation = () => {
        setNavigationOpen((navigationOpen) => !navigationOpen);
    };
    return (
        <nav id='nav-wrap' className='opaque'>
            <button
                className="mobile-btn"
                onClick={toggleNavigation}
            >
                {navigationOpen ? 'open' : 'close'}
            </button>
            <ul id='nav' className={navigationOpen ? 'nav open' : 'nav'}>
                {Object.keys(navigation).map((key, index) => {
                    const navigationName = navigation[key as keyof typeof navigation];
                    return (
                        <Link key={index} link={key} name={navigationName} isCurent={false} toggleNavigation={toggleNavigation} />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
