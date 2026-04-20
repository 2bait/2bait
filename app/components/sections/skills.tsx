import React, { FC } from 'react';
import { ResumeSkill, ResumeSkillDetail } from "../../../src/data/types";
import Section from "../shared/section";
import { TextHighlight } from '../shared/textHighlight';

type SkillDetailEntryProps = {
    entry: ResumeSkillDetail;
}

type SkillEntryProps = {
    skillEntry: ResumeSkill;
}

type SkillsSectionProps = {
    skills: ResumeSkill[];
}

export function SkillDetailEntry({ entry }: SkillDetailEntryProps) {
    return (
        <div className='ribbon'>
            <span className="ribbon-label">
                {entry.name}
            </span>
            {(entry.level === "100") ? <span className="ribbon-rank ribbon-rank-expert">Expert</span>
                : (entry.level === "90") ? <span className="ribbon-rank ribbon-rank-profi">Profi</span>
                    : (entry.level === "80") ? <span className="ribbon-rank ribbon-rank-competent">Competent</span>
                        : ""}

        </div>
    );
};

export function SkillEntry({ skillEntry }: SkillEntryProps) {
    return (
        <div className='card fade-in-up'>
            <h3>{skillEntry.title}</h3>
            <p className='card-subtitle'>{skillEntry.description}</p>
            <div className="ribbon-list">
                {skillEntry.skillDetails.map(function (entry, index) {
                    return (
                        <SkillDetailEntry key={index} entry={entry} />
                    );
                })}
            </div >
        </div>
    );
};

export default function SkillsSection({ skills }: SkillsSectionProps) {

    return (
        <Section id="skill" title="Skills" subtitle={<>
            Where I create the{" "}
            <TextHighlight
                variant="underline"
                color="neonPurple"
            >
                most impact
            </TextHighlight>
        </>}>
            <div className='grid-3'>
                {skills.map(function (skillEntry, index) {
                    return (
                        <SkillEntry
                            key={index}
                            skillEntry={skillEntry} />
                    );
                })}
            </div>
        </Section>
    );
};
