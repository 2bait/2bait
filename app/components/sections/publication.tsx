import React, { FC } from 'react';
import { ResumePublication } from "../../../src/data/types";
import RenderableComponent from '../shared/renderableComponent';
import Section from '../shared/section';

type PublicationEntryProps = {
    entry: ResumePublication
}

type PublicationSectionProps = {
    publications: ResumePublication[]
}
export function PublicationEntry({ entry }:PublicationEntryProps)  {

    return (
        <article className="card fade-in-up">
            <h3>
                <a
                    href={entry.titleHref}
                    target="_blank"
                    rel="noreferrer"
                >
                    {entry.title}
                </a>
            </h3>
            <p className="publication-meta">{entry.description}</p>
            {entry.body &&
                entry.body.length > 0 &&
                entry.body.map((renderable, renderableIndex) => (
                    <RenderableComponent key={renderableIndex} data={renderable} className="publication-summary" />
                ))}
        </article>
    );
};

export default function PublicationSection({ publications }: PublicationSectionProps) {

    return (
        <Section id="publication" title="Publications" subtitle={""}>
            <div className="publications-list">
                {publications.map(function (entry, index) {
                    return (
                        <PublicationEntry key={index} entry={entry}></PublicationEntry>
                    );
                })}</div>
        </Section>
    );
};
