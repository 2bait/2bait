import React, { FC } from 'react';
import SocialMedia from './social_media';
import { ResumeAbout } from "../data/types";

type FooterProps = {
    about: ResumeAbout;
  };

const Footer: FC<FooterProps> = ({about}) => {
   
        return (
            <footer>
                <div className='row'>
                    <div className='twelve columns'>
                        <SocialMedia profiles={about.profiles}/>
                        <ul className='copyright'>
                            <li>
                                This site is developed in React.js by&nbsp;
                                <a
                                    href='https://github.com/2bait'
                                    title='Borut Ajdič'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    © 2023 Borut Ajdič
                                </a>. All rights reserved.
                            </li>
                        </ul>
                    </div>
                    <div id='go-top'>
                        <a className='smoothscroll' title='Back to Top' href='#home'>
                            <i className='icon-up-open'/>
                        </a>
                    </div>
                </div>
            </footer>
        );
};

export default Footer;
