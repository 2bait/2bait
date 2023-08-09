import React, { FC } from 'react';
import { ResumeExperiences,Renderable } from "../../data/types";
import RenderableComponent from '../renderableComponent';
import Datetime from '../../utils/datetime';
import { Chrono } from "react-chrono";

// type ExperienceEntryProps = {
//     index: number,
//     total: number,
//     entry: ResumeExperiences
// }

type ExperiencesSectionProps = {
    experiences: ResumeExperiences[]
}

// const ExperienceEntry: FC<ExperienceEntryProps> = ({index, total, entry}) => {

//         const startDate = Datetime.getDisplayFromDate(entry.startDate);
//         const endDate = Datetime.getDisplayFromDate(entry.endDate);   
//         const divider = index === total ? (<br/>) : (<hr/>);

//         return (
//             <div className='row item'>
//                 <div className='twelve columns'>
//                     <h3>
//                         <a href={entry.website}>{entry.company}</a>
//                     </h3>
//                     <p className='info'>
//                         {entry.position}
//                         <span> &bull; </span>
//                         <span className='info-summary'>{entry.summary}</span>
//                         <span> &bull; </span>
//                         <em className='date'>{startDate} - {endDate}</em>
//                     </p>
//                     <SectionBulletPoints list={entry.highlights}/>
//                 </div>
//                 {divider}
//             </div>
//         );
// };

// const ExperienceEntry1: FC<ExperienceEntryProps> = ({index, total, entry}) => {

//     const startDate = Datetime.getDisplayFromDate(entry.startDate);
//     const endDate = Datetime.getDisplayFromDate(entry.endDate);   
//     const divider = index === total ? (<br/>) : (<hr/>);

//     return (
//         <div className={`timeline-box ${  (index % 2 == 0) ? 'timeline-box-left' : 'timeline-box-right' }`}>
//             <span className="dot"></span>
//             <div className="timeline-box-inner animate-right animated">
//             <span className="arrow"></span>
//             <div className="date">{startDate} - {endDate}</div>

//                 <h3>
//                     <a href={entry.website}>{entry.company}</a>
//                 </h3>
//                 <p className='info'>
//                     {entry.position}
//                     <span> &bull; </span>
//                     <span className='info-summary'>{entry.summary}</span>
//                     <span> &bull; </span>
//                     <em className='date'>{startDate} - {endDate}</em>
//                 </p>
//                 <SectionBulletPoints list={entry.highlights}/>
//             </div>
//             {divider}
//         </div>
//     );
// };

const ExperiencesSection: FC<ExperiencesSectionProps> = ({experiences}) => {

    const items = experiences.map(entry =>( {
        title: `${Datetime.getDisplayFromDate(entry.startDate)} - ${Datetime.getDisplayFromDate(entry.endDate)}`,
        cardTitle: entry.company,
        cardSubtitle:entry.position,
        cardDetailedText: ["paragraph1", "paragraph2"],
        timelineContent: <RenderableComponent data={entry.highlights as Renderable}/>,
        url: entry.website
      }));
    return (
        <section id='work'>
            <div className='row work'>
                <div className='two columns header-col'>
                    <h1>
                        <span>Work</span>
                    </h1>
                </div>
                <div className='ten columns main-col'>
                    <Chrono items={items} mode="VERTICAL_ALTERNATING" hideControls
                    theme={{
                        primary: '#838C95',
                        secondary: 'white',
                        cardBgColor: 'white',
                        titleColor: '#838C95',
                        titleColorActive: '#838C95',
                      }}
                      classNames={{
                        card: 'timeline',
                        cardMedia: 'timeline-media',
                        cardSubTitle: 'timeline-subtitle',
                        cardText: 'timeline-text',
                        cardTitle: 'timeline-title',
                        title: 'timeline-title',
                      }}></Chrono>
                     {/* {experiences.map(function (entry, index) {
                        return (
                            <ExperienceEntry1 key={index} index={index + 1} total={numEntries} entry={entry}/>
                        );
                    })}  */}
                </div>
            </div>
        </section>
    );
};

export default ExperiencesSection;
