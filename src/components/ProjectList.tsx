import React from 'react';
import './ProjectList.css';
import Project from './Project';

export const ProjectList = () => {

    const projects = [
        {
            name: "Spot CLI",
            version: "1.0.0, beta",
            description: "Smart directory & stack manager",
            link: "https://github.com/pav-dev98/spot",
            features: [
                "📍 Smart directory & stack manager",
                "Fast SQLite persistence (zero config)",
                "Pattern: Service/Repository + Zod",
                "Testing with Vitest & TypeScript",
            ]
        },{
            name: "Peruvian Amazonite",
            version: "1.0.0, beta",
            description: "Peruvian Amazonite is a landing page for a Peruvian Amazonite co",
            link: "https://github.com/pav-dev98/spot",
            features: [
                "📍 Responsive design",
                "Fast SQLite persistence (zero config)",
                "Pattern: Service/Repository + Zod",
                "Testing with Vitest & TypeScript",
            ]
        },{
            name: "Life Rock",
            version: "1.0.0, beta",
            description: "Ecommerce for stones products",
            link: "https://github.com/pav-dev98/spot",
            features: [
                "📍 Responsive design",
                "Fast SQLite persistence (zero config)",
                "Pattern: Service/Repository + Zod",
                "Testing with Vitest & TypeScript",
            ]
        }
    ];

    return (
        <div className="projects">
            <div className='blend'></div>
            {projects.map((project, index) => (
                <Project key={index} name={project.name} version={project.version} description={project.description} link={project.link} features={project.features} className={index === 1 ? "first" : index === 2 ? "second" : ""}/>
            ))}
        </div>
    );
};
