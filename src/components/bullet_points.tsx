import React, { FC } from 'react';
import { BulletPoints } from "../data/types";

type SectionBulletPointsProps = {
    list?: BulletPoints;
}

const SectionBulletPoints: FC<SectionBulletPointsProps> = ({list}) => {
        return (
            list ? 
            <div>
                {list.map(function (entry, index) {
                    return (
                        <p key={index} className='point'>
                            <span className='bullet-point'>&bull; </span>
                            {entry}
                        </p>
                    );
                })}
            </div>
            : <div></div>
        );
};

export default SectionBulletPoints;
