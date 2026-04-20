import { ResumeEducation } from "../../../src/data/types";
import Datetime from '../../../src/utils/datetime';
import Section from '../shared/section';
import { TextHighlight } from '../shared/textHighlight';

type EducationEntryProps = {
    entry: ResumeEducation
}

type EducationSectionProps = {
    education: ResumeEducation[]
}
export function EducationEntry({ entry }: EducationEntryProps) {
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

export default function EducationSection({ education }: EducationSectionProps) {
    return (
        <Section id="education" title="Education" subtitle={<>
            Where I create the{" "}
            <TextHighlight
                variant="underline"
                color="neonPurple"
            >
                most impact
            </TextHighlight>
        </>} >
            <div className='card'>
                {education.map(function (entry, index) {
                    return (
                        <EducationEntry key={index} entry={entry} />
                    );
                })}
            </div>

        </Section>
    );
};
