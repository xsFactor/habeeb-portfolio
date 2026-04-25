import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import './Projects.css'
import SingleProject from './SingleProject/SingleProject';

function Projects() {
    const { theme } = useContext(ThemeContext);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.slice(0, 3).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div>

                        {projectsData.length > 3 && (
                            <div className="projects--viewAll">
                                <button
                                    className="projects--viewAllBtn"
                                    style={{ backgroundColor: theme.primary }}
                                    onClick={() => setShowModal(true)}
                                >
                                    <span className="projects--viewAllText" style={{ color: theme.secondary }}>
                                        View All
                                    </span>
                                    <span className="projects--viewAllArrow" style={{ backgroundColor: theme.secondary, color: theme.primary }}>
                                        →
                                    </span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Modal */}
                    {showModal && (
                        <div className="projects--modalOverlay" onClick={() => setShowModal(false)}>
                            <div
                                className="projects--modal"
                                style={{ backgroundColor: theme.secondary }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal Header */}
                                <div className="projects--modalHeader">
                                    <h2 style={{ color: theme.primary }}>All Projects</h2>
                                    <button
                                        className="projects--modalClose"
                                        style={{ backgroundColor: theme.primary, color: theme.secondary }}
                                        onClick={() => setShowModal(false)}
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Modal Body */}
                                <div className="projects--modalBody">
                                    {projectsData.map(project => (
                                        <SingleProject
                                            theme={theme}
                                            key={project.id}
                                            id={project.id}
                                            name={project.projectName}
                                            desc={project.projectDesc}
                                            tags={project.tags}
                                            code={project.code}
                                            demo={project.demo}
                                            image={project.image}
                                        />
                                    ))}
                                </div>

                                {/* Modal Footer */}
                                <div className="projects--modalFooter" style={{ borderTop: `1px solid ${theme.primary30}` }}>
                                    <Link to="/projects" onClick={() => setShowModal(false)}>
                                        <button
                                            className="projects--gotoBtn"
                                            style={{ backgroundColor: theme.primary }}
                                        >
                                            <span className="projects--viewAllText" style={{ color: theme.secondary }}>
                                                Go to All Projects
                                            </span>
                                            <span className="projects--viewAllArrow" style={{ backgroundColor: theme.secondary, color: theme.primary }}>
                                                →
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default Projects