import React, { FC } from "react";
//const Link = require('./link');
//const ResumePropTypes = require('../../prop_types/resume');

// type NavigationProps = {
//     title?: string;
//     href: string;
//     inline?: boolean;
//     className?: string;
//   };
const Navigation: FC<object> = (navigation) => {
        return (
            <nav id='nav-wrap' className='opaque'>
                <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>Show navigation</a>
                <a className='mobile-btn' href='#' title='Hide navigation'>Hide navigation</a>
                <ul id='nav' className='nav'>
                    {/* {Object.keys(navigation).map(function (navigationLink, index) {
                        const navigationName = navigation[navigationLink];
                        return (
                            <Link key={index} link={navigationLink} name={navigationName}/>
                        );
                    }.bind(this))} */}
                </ul>
            </nav>
        );
};

export default Navigation;
