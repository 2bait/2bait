import resume from "../../src/data/resume";
import SocialMedia from './social_media';

export default function Footer() {

    return (
        <footer className="page-footer">
            <div className="footer-top">
                <SocialMedia profiles={resume.about.social} />
            </div>
            <div className="footer-bottom">
                <p className='copyright'>
              
                    This site is developed in React.js by&nbsp;
                    <a
                        href='https://github.com/2bait'
                        title='Borut Ajdič'
                        target='_blank'
                        rel='noopener noreferrer'>
                        © <span id="year">2026</span> Borut Ajdič
                    </a>. All rights reserved.
            
                </p>
            </div>
        </footer>
    );
};
