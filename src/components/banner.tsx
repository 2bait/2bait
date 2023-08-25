import React, { FC } from 'react';

type BannerProps = {
};

const Banner: FC<BannerProps> = () => {

    return (
        <div className="banner row">
            <div className="banner-img six columns">
                <img alt="img" src={require('../assets/images/work-illustration.png')} />
            </div>
            <div className="six columns">
                <div className="banner-content">
                    <h2 className="title">From Bait to Brilliance</h2>
                    <p>We empower Manufacturing firms with a roadmap to digital evolution, making Digital Transformation a strategic advantage.</p>
                    <a className="button" href="#expertise">Read more<span></span></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
