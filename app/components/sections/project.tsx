import { ResumeProject } from "../../../src/data/types";
import Section from '../shared/section';
import { TextHighlight } from '../shared/textHighlight';

type ProjectEntryProps = {
    entry: ResumeProject
}

type ProjectSectionProps = {
    publications: ResumeProject[]
}
export function ProjectEntry({ entry }: ProjectEntryProps) {

    return (
        <div className='columns project-item'>
        </div>
    );
};

export default function ProjectSection({ publications }: ProjectSectionProps) {
    return (
        <Section id="project" title="Projects" subtitle={<>
            Where I create the{" "}
            <TextHighlight
                variant="underline"
                color="neonPurple"
            >
                most impact
            </TextHighlight>
        </>}>
            <div className='card'>
                {publications.map(function (entry, index) {
                    return (
                        <ProjectEntry key={index} entry={entry} />
                    );
                })}
            </div>
        </Section>
    );
};
