import React, { FC, useState } from "react";
import Link from './link';

type NavigationProps = {
    navigation: object;
};

const Navigation: FC<NavigationProps> = ({ navigation }) => {
    const [ navigationOpen, setNavigationOpen ] = useState<boolean>(false);

    const toggleNavigation = () => {
        setNavigationOpen(!navigationOpen);
    };
    return (
        <nav id='nav-wrap' className='opaque'>
            <a className='mobile-btn' onClick={toggleNavigation}>Show navigation</a>
            <ul id='nav' className={navigationOpen ? 'nav close': 'nav'}>
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
