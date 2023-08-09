import React, { FC } from 'react';
import { Renderable } from '../../data/types';
import RenderableComponent from '../renderableComponent';

type ExpertiseSectionProps = {
};

type ExpertiseEntryProps = {
    title: string;
    content: Renderable[];
};

const ExpertiseEntry: FC<ExpertiseEntryProps> = ({ title, content }) => {

    return (
        <li className="expertise-item-active">
            <div className="expertise-item-header">
                <h5>{title}</h5>
            </div>
            <div className="expertise-item-body">
                {content &&
                    content.length > 0 &&
                    content.map((renderable, renderableIndex) => (
                        <RenderableComponent key={renderableIndex} data={renderable} />
                    ))}
            </div>
        </li>
    );
};

const ExpertiseSection: FC<ExpertiseSectionProps> = () => {

    return (
        <section id='expertise'>
            <div className='row expertise'>
                <div className='two columns header-col'>
                    <h1>
                        <span>Expertise</span>
                    </h1>
                </div>
                <div className='ten columns main-col'>
                    <h3>What Can I Do For You?</h3>
                    <ul className="expertise-list" data-aos="fade-up">
                        <ExpertiseEntry title={`Analyze a company's operations`} content={[]} />
                        <ExpertiseEntry title={`Identify areas where technological advancement would be most beneficial`} content={[]} />
                        <ExpertiseEntry title={`Develop a strategy for the digital transformation`} content={[]} />
                        <ExpertiseEntry title={`Supervise installation and adoption of the new technology`} content={[]} />
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
