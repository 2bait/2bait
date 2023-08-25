import React, { FC, useState } from 'react';
import { Renderable } from '../../data/types';
import RenderableComponent from '../renderableComponent';

type ExpertiseSectionProps = {
};

type ExpertiseEntryProps = {
    title: string;
    content: Renderable[];
};

const ExpertiseEntry: FC<ExpertiseEntryProps> = ({ title, content }) => {
    const [expertiseOpen, setExpertiseOpen] = useState<boolean>(false);

    return (
        <li className={expertiseOpen ? 'expertise-item is-active' : 'expertise-item'}
            onClick={() => setExpertiseOpen((expertiseOpen) => !expertiseOpen)}>
            <div className={expertiseOpen ? 'expertise-item-header is-active' : 'expertise-item-header'}>
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
                    <h3>What Can We Do For You?</h3>
                    <p>We offer in-depth knowledge and experience in digital transformation strategies tailored specifically for manufacturing companies, ensuring clients benefit from the latest and best practices. Includes Industry Insight, Innovation, Customization, Collaboration and Continuous Support. </p>
                    <ul className="expertise-list">
                        <ExpertiseEntry title={`Identify areas where technological advancement would be most beneficial`} content={
                            [
                                {
                                    type: "paragraph",
                                    items: [{
                                        type: "important",
                                        text: "Business Process Mapping:"
                                    },
                                        "potential gaps, bottlenecks, redundancies and areas for optimization",
                                    ]
                                },
                                {
                                    type: "paragraph",
                                    items: [{
                                        type: "important",
                                        text: "Operational Assessment:"
                                    },
                                        "understanding existing worflows",
                                    ]
                                },
                                {
                                    type: "paragraph",
                                    items: [{
                                        type: "important",
                                        text: "Risk Assessment:"
                                    },
                                        "risks and challenges that might arise during digital transformation",
                                    ]
                                },
                                {
                                    type: "paragraph",
                                    items: [{
                                        type: "important",
                                        text: "Digital Maturity Assessment:"
                                    },
                                        "compatibility and effectiveness of existing technologies",
                                    ]
                                }
                            ]} />
                        <ExpertiseEntry title={`Develop a strategy for the digital transformation`} content={[
                                {
                                    type: "paragraph",
                                    items: [{
                                        type: "important",
                                        text: "Set SMART Objectives:"
                                    },
                                        " Specific, Measurable, Achievable, Relevant and Time-bound goals",
                                    ]
                                },
                                {
                                    type: "paragraph",
                                    items: [{
                                        type: "important",
                                        text: "Process Redesign:"
                                    },
                                        " integrate digital technologies seamlessly",
                                    ]
                                },
                                {
                                    type: "paragraph",
                                    items: [{
                                        type: "important",
                                        text: "Digitizing operations:"
                                    },
                                        " optimizing, simplifying, and rationalizing existing processes",
                                    ]
                                },
                                {
                                    type: "paragraph",
                                    items: [{
                                        type: "important",
                                        text: "IT uplift:"
                                    },
                                        " upgrading the company’s IT infrastructure",
                                    ],
                                },
                                {
                                    type: "paragraph",
                                    items: [{
                                        type: "important",
                                        text: "Technology Selection:"
                                    },
                                        "Scalability and compatibility with existings systems",
                                    ]
                                },

                                {
                                    type: "paragraph",
                                    items: [{
                                        type: "important",
                                        text: "Set Performance Metrics:"
                                    },
                                        " define relevant KPIs",
                                    ]
                                },
                                {
                                    type: "paragraph",
                                    items: [{
                                        type: "important",
                                        text: "Continous Improvement:"
                                    },
                                        " evaluate impact of digital transformation on KPIs",
                                    ]
                                }
                            ]
                        } />
                        <ExpertiseEntry title={`Supervise installation and adoption of the new technology`} content={[{
                            type: "list",
                            items: [
                                "ERP, PLM, CSM, WMS, MRP, MES, QMS, RPA",
                                "Digital Twin Technology",
                                "Smart factory and Industry 4.0",
                                "Advanced data and analytics",
                                "Supply Chain Optimization",
                                "Automation and Robotics"
                            ]
                        }]} />
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
