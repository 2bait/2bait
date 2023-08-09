import React, { FC } from 'react';
import { ResumePublication } from "../../data/types";
import RenderableComponent from '../renderableComponent';
import Link from '../renderLink';

type PublicationEntryProps = {
    entry: ResumePublication
}

type PublicationSectionProps = {
    publications: ResumePublication[]
}
const PublicationEntry: FC<PublicationEntryProps> = ({ entry }) => {

    return (
        <div className='row item'>
            <div className='twelve columns'>
                <h3>{!entry.titleHref && entry.title}
                    {entry.titleHref && <Link title={entry.title} href={entry.titleHref} className="ml-1" />}</h3>
                <p className='info'>
                    {entry.description}
                </p>
                {entry.body &&
                    entry.body.length > 0 &&
                    entry.body.map((renderable, renderableIndex) => (
                        <RenderableComponent key={renderableIndex} data={renderable} />
                    ))}
            </div>
        </div>
    );
};

const PublicationSection: FC<PublicationSectionProps> = ({ publications }) => {

    return (
        <section id='publication'>
            <div className='row publication'>
                <div className='two columns header-col'>
                    <h1>
                        <span>Publications</span>
                    </h1>
                </div>
                <div className='ten columns main-col'>
                    {publications.map(function (entry, index) {
                        return (
                            <PublicationEntry key={index} entry={entry} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PublicationSection;
