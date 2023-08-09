import React, { FC } from 'react';
import { ResumeProject } from "../../data/types";
import Random from "../../utils/random";
//import Modal from "../../utils/random";

type ProjectEntryProps = {
    entry: ResumeProject
}

type ProjectSectionProps = {
    publications: ResumeProject[]
}
const ProjectEntry: FC<ProjectEntryProps> = ({ entry }) => {

    return (
        <div className='columns project-item'>
            {/* <div className='item-wrap' onClick={handleOpenModal}>
            <img
                src={entry.image.thumb}
                alt={entry.name}/>
            <div className='overlay'>
                <div className='project-item-meta'>
                    <h5>{entry.name}</h5>
                    <p>{entry.category}</p>
                </div>
            </div>
            <div className='link-icon'>
                <i className='icon-down-open'/>
            </div>
        </div>
        <Modal entry={entry} isOpen={state.modalOpen} onRequestClose={handleCloseModal}/> */}
        </div>
    );
};

const ProjectSection: FC<ProjectSectionProps> = ({ publications }) => {
    //const items = Random.shuffleArray(publications).slice(0, 8);
    return (
        <section id='publication'>
            <div className='row publication'>
                <div className='two columns header-col'>
                    <h1>
                        <span>Projects</span>
                    </h1>
                </div>
                <div className='ten columns main-col'>
                    {publications.map(function (entry, index) {
                        return (
                            <ProjectEntry key={index} entry={entry} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
