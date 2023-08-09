import React, { FC } from 'react';
import { ResumeAbout } from "../../data/types";
import Vcf from "./vcf";

type AboutProps = {
    about: ResumeAbout;
  };

const About: FC<AboutProps> = ({about}) => {
        


        return (
            <section id='about'>
                <div className='row'>
                    <div className='two columns'>
                        {/* <img className='profile-pic' src={about.picture} alt={`${about.firstName} ${about.lastName}`}/> */}
                    </div>
                    <div className='ten columns main-col'>
                        <h2>About Me</h2>
                        {about.summary.map(function (content, index) {
                            return (
                                <p key={index}>
                                    {content}
                                </p>
                            );
                        })}
                        <div className='row'>
                            <div className='columns contact-details'>
                                <h2>Contact Details</h2>
                                <p className='address'>                                   
                                    <span>{about.location.address}</span>
                                    <br/>                                 
                                    <span>{about.location.city}</span>
                                    <br/>
                                    <span>{about.location.countryCode}</span>
                                    <br/>
                                    <a href={`tel:${about.phone}`}>
                                        <span>{about.phone}</span>
                                    </a>
                                    <br/>
                                    <a href={`mailto:${about.email}`}>
                                        <span>{about.email}</span>
                                    </a>
                                </p>
                            </div>
                            <div className='columns download'>
                                    <Vcf about={about} />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    };

export default About;
