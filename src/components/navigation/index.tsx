import React, { FC } from "react";
import Link from './link';

type NavigationProps = {
    navigation: object;
  };

const Navigation: FC<NavigationProps> = ({navigation}) => {
    
    console.log(Object.keys(navigation));
        return (
            <nav id='nav-wrap' className='opaque'>
                <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>Show navigation</a>
                <a className='mobile-btn' href='#' title='Hide navigation'>Hide navigation</a>
                <ul id='nav' className='nav'>
                     {Object.keys(navigation).map((key, index) => {
                        const navigationName = navigation[key as keyof typeof navigation];                        
                        return (
                            <Link key={index} link={key} name={navigationName}/>
                        );
                    })} 
                </ul>
            </nav>
        );
};

export default Navigation;
