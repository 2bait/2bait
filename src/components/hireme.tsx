import React, { FC } from 'react';

type HireMeProps = {
    caption: string;
  };

const HireMe: FC<HireMeProps> = ({caption}) =>{
        return (
            <div className='row hire'>
                <div className='twelve columns'>
                    <h1 className='hire-text'>
                        {caption}
                    </h1>
                    <a href='#contact' className='button'>Hire Me<span></span></a>
                </div>
            </div>
        );
};

export default HireMe;
