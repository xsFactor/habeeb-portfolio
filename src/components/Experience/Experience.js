import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Experience.css';
import { experienceData } from '../../data/experienceData';
import ExperienceCard from './ExperienceCard';

function Experience() {
    const { theme } = useContext(ThemeContext);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="experience" id="experience">
            <div className="experience-body">
                <div className="experience-image">
                    <img src={theme.expimg} alt="" />
                </div>
                <div className="experience-description">
                    <h1 style={{ color: theme.primary }}>Experience</h1>
                    <p className="exp-subtitle" style={{ color: '#666' }}>
                        <span style={{ color: theme.primary, fontFamily: 'Courier New, monospace' }}>➜ </span>
                        cat work-history.log
                    </p>

                    <div className="exp-cards-list">
                        {experienceData.slice(0, 3).map(exp => (
                            <ExperienceCard
                                key={exp.id}
                                id={exp.id}
                                jobtitle={exp.jobtitle}
                                company={exp.company}
                                startYear={exp.startYear}
                                endYear={exp.endYear}
                            />
                        ))}
                    </div>

                    {experienceData.length > 3 && (
                        <button
                            className="exp-view-all-btn"
                            style={{ backgroundColor: theme.primary }}
                            onClick={() => setShowModal(true)}
                        >
                            <span className="exp-view-all-text" style={{ color: theme.secondary }}>
                                View All
                            </span>
                            <span className="exp-view-all-arrow" style={{ backgroundColor: theme.secondary, color: theme.primary }}>
                                →
                            </span>
                        </button>
                    )}
                </div>
            </div>

            {showModal && (
                <div className="exp-modal-overlay" onClick={() => setShowModal(false)}>
                    <div
                        className="exp-modal"
                        style={{ backgroundColor: '#0d0d0d', border: `1px solid ${theme.primary}30` }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="exp-modal-header">
                            <h2 style={{ color: theme.primary }}>All Experience</h2>
                            <button
                                className="exp-modal-close"
                                style={{ backgroundColor: theme.primary, color: '#0a0a0a' }}
                                onClick={() => setShowModal(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="exp-modal-body">
                            {experienceData.map(exp => (
                                <ExperienceCard
                                    key={exp.id}
                                    id={exp.id}
                                    jobtitle={exp.jobtitle}
                                    company={exp.company}
                                    startYear={exp.startYear}
                                    endYear={exp.endYear}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Experience;