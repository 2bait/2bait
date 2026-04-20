import React, { FC } from 'react';
import Navigation from './navigation';
type WrapperProps = {
};

const Header: FC<WrapperProps> = ({ }) => {    

    return (

        <header className="navbar">
            <Navigation navigation={{
                welcome: 'Home',
                about: 'About',
                expertise: 'Expertise',
                skill: 'Skills',
                experience: 'Experience',
                publication: 'Publications',
                //education: 'Education',
                // portfolio: 'Portfolio',
                //testimonials: 'References',
                contact: 'Contact'

            }} />
        </header>
    );
};

export default Header;
