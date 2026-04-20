import React, { FC } from 'react';
import { SocialProfile } from "../../src/data/types";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

type SocialMediaProps = {
    profiles: SocialProfile[]
}

export function mapIcon(socialMedia: string) {
    const media = socialMedia.replace(/ /g, '-');
    switch (socialMedia) {
        case 'email':
            return (
                <FaEnvelope></FaEnvelope>
            );
           case 'github':
            return (
                <FaGithub></FaGithub>
            );
            case 'linkedin':
            return (
                <FaLinkedin></FaLinkedin>
            );
        // case 'quora':
        //     return (
        //         <i className='fa fa-fw'>
        //             <strong className='fa-quora'>Q</strong>
        //         </i>
        //     );
        default:
            return (
                <i className={`fa fa-fw`} />
            );
    }
}

export default function SocialMedia({ profiles = [] }: SocialMediaProps) {

    return (
        <div className="footer-social">
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
        </div>
    );
}
