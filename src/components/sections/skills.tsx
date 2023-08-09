import React, { FC } from 'react';
import { ResumeSkill, ResumeSkillDetail } from "../../data/types";
import BulletPoints from "../bullet_points";

type SkillDetailEntryProps = {
  entry : ResumeSkillDetail;
}

type SkillEntryProps = {
    skillEntry: ResumeSkill;
}

type SkillsSectionProps = {
    skills : ResumeSkill[];
}

const SkillDetailEntry: FC<SkillDetailEntryProps> = ({entry})=>{

    /*getInitialState: function () {
        return {
            style: {
                background: '#313131'
            }
        };
    },

    handleMouseEnter: function () {
        return this.setState({
            style: {
                background: '#11ABB0'
            }
        });
    },

    handleMouseLeave: function () {
        return this.setState({
            style: {
                background: '#313131'
            }
        });
    },*/

        return (
            <li>
                <em>{entry.name}</em>
                <span
                    className={`bar-expand percentage${entry.level}`}
                    //style={this.state.style}
                    //onMouseEnter={handleMouseEnter}
                    //onMouseLeave={handleMouseLeave}
                    />
            </li>
        );
};

const SkillEntry: FC<SkillEntryProps> = ({skillEntry })=>{

        // const _summary = skillEntry.description.map(function (point, index) {
        //     return (
        //         <p key={index} className='skill-summary'>{point}</p>
        //     );
        // });

        return (
            <div className='row inside'>
                <h3>{skillEntry.title}</h3>
                <BulletPoints list={skillEntry.description} />
                <div className='bars'>
                    <ul className='skills'>
                        {skillEntry.skillDetails.map(function (entry, index) {
                            return (
                                <SkillDetailEntry key={index} entry={entry}/>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
};

const SkillsSection: FC<SkillsSectionProps> = ({skills}) => {

        return (
            <section id='skill'>
                <div className='row skill'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        {skills.map(function (skillEntry, index) {
                            return (
                                <SkillEntry  
                                    key={index}
                                    skillEntry={skillEntry}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
};

export default SkillsSection;
