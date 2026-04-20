import { ResumeExperiences, Renderable } from "../../../src/data/types";
import RenderableComponent from '../shared/renderableComponent';
import Datetime from '../../../src/utils/datetime';
import Section from '../shared/section';
import { TextHighlight } from '../shared/textHighlight';

type ExperiencesSectionProps = {
    experiences: ResumeExperiences[]
}
type ExperienceEntryProps = {
    entry: ResumeExperiences;
}

export function ExperienceEntry({ entry }: ExperienceEntryProps) {
    return (
        <div className="timeline-item fade-in-up">
            <div className="timeline-dot" />
            <div className="timeline-content card">
                <span className="timeline-period">{Datetime.getDisplayFromDate(entry.startDate)} - {Datetime.getDisplayFromDate(entry.endDate)}</span>
                <h3>{entry.position}</h3>
                <p className="timeline-company">{entry.company}</p>
                <RenderableComponent data={entry.highlights as Renderable} className="card-list" />
            </div>
        </div>
    );
};

export default function ExperiencesSection({ experiences }: ExperiencesSectionProps) {
    return (
        <Section id="experience" title="Experience" subtitle={<>
            Where I create the{" "}
            <TextHighlight
                variant="underline"
                color="neonPurple"
            >
                most impact
            </TextHighlight>
        </>} >
            <div className="timeline">
                {experiences.map(function (entry, index) {
                    return (
                        <ExperienceEntry key={index} entry={entry}></ExperienceEntry>
                    )
                })}
            </div>

        </Section>

    );
};
