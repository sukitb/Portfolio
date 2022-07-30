import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import Jammming from '../../assets/ProjectSS/Jammming/jammmingSS.png'

export function Projects() {


    const projectsData = [
        {
         img: Jammming,
         title: `Jammming`,
         content: `Test Test`,
        },
    ]

    return (
        <div className="Projects">
            {projectsData.map(({ img, title, content }) => (
                <ProjectCard
                img={img}
                title={title}
                content={content} />
            ))}
        </div>
    )
}