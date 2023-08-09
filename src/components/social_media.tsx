import React, {FC} from 'react';
import { Profile} from "../data/types";

type SocialMediaProps = {
    profiles : Profile[]
}

function mapIcon(socialMedia:string) {
    const media = socialMedia.replace(/ /g, '-');
    switch (socialMedia) {
        case 'email':
            return (
                <i className={'fa fa-envelope'}/>
            );
        case 'quora':
            return (
                <i className='fa fa-fw'>
                    <strong className='fa-quora'>Q</strong>
                </i>
            );
        default:
            return (
                <i className={`fa fa-${media}`}/>
            );
    }
}

const SocialMedia: FC<SocialMediaProps> = ({profiles = [] }) => {

    return (
        <ul className='social-links'>
            {profiles.map(function (profile, index) {
                const icon = mapIcon(profile.network.toLowerCase());
                return (
                    <li key={index}>
                        <a href={profile.url}>
                            {icon}
                        </a>
                    </li>
                );
            })}
        </ul>
    )
 
}

export default SocialMedia;
