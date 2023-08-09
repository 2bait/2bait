import React, { FC } from 'react';
import { ResumeEducation } from "../../data/types";
//import SectionBulletPoints from '../bullet_points';
import Datetime from '../../utils/datetime';

type EducationEntryProps = {
    entry: ResumeEducation
}

type EducationSectionProps = {
    education : ResumeEducation[]
}
const EducationEntry: FC<EducationEntryProps> = ({entry})=> {


        const startDate = Datetime.getDisplayFromDate(entry.startDate);
        const endDate = Datetime.getDisplayFromDate(entry.endDate);
        return (
            <div className='row item'>
                <div className='twelve columns'>
                    <h3>{entry.institution}</h3>
                    <p className='info'>
                        {entry.area}
                        <span> &bull; </span>
                        <span className='info-summary'>{entry.summary}</span>
                        <span> &bull; </span>
                        <em className='date'>{startDate} - {endDate}</em>
                    </p>
                </div>
            </div>
        );
};

const EducationSection: FC<EducationSectionProps> = ({education}) => {

        return (
            <section id='education'>
                <div className='row education'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        {education.map(function (entry, index) {
                            return (
                                <EducationEntry key={index} entry={entry}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
};

export default EducationSection;
