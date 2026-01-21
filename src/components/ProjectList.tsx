import React from 'react';
import './ProjectList.css';

export const ProjectList = () => {

    return (
        <div className="projects">
            <div className="project">
                <div className="blend">
                </div>
                <div className="project-header">
                    <h4>Spot CLI</h4>
                    <span>v1.0.0, beta</span>
                </div>
                <div className="project-body">
                    <div className="editor">
                        <p className="line">/**</p>
                        <p className="line">* 📍 Smart directory & stack manager</p>
                        <p className="line">* Fast SQLite persistence (zero config)</p>
                        <p className="line">* Pattern: Service/Repository + Zod</p>
                        <p className="line">* Testing with Vitest & TypeScript</p>
                        <p className="line">*/</p>
                    </div>
                    <button onClick={() => {
                        // abrir en una nueva pestaña
                        window.open('https://github.com/pav-dev98/spot', '_blank');
                    }}>see the project</button>
                </div>
            </div>
        </div>
    );
};
