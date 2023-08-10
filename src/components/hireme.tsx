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
                    <a href='#Social' className='button'>Hire Me</a>
                </div>
            </div>
        );
};

export default HireMe;
