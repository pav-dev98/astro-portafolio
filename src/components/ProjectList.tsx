import React from 'react';
import './ProjectList.css';

export const ProjectList = () => {
    return (
        <div className="projects">
            <div className="project">
                <div className="blend">
                </div>
                <div className="project-header">
                    <h4>Social media</h4>
                    <span>100, commits</span>
                </div>
                <div className="project-body">
                    <div className="editor">
                        <p className="line">/**</p>
                        <p className="line">* Integrates 4 diferent apis</p>
                        <p className="line">* Over 200 different components</p>
                        <p className="line">* React ,express,mysql</p>
                        <p className="line">* docker, docker-compose, kubernates</p>
                        <p className="line">*/</p>
                    </div>
                    <button>see the project</button>
                </div>
            </div>
        </div>
    );
};
