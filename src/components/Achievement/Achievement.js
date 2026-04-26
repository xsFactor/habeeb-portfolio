import React, { useContext, useState } from 'react';
import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData';
import AchievementCard from './AchievementCard';

function Achievement() {
    const { theme } = useContext(ThemeContext);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {achievementData.achievements.length > 0 && (
                <div className="achievement" id="achievement" style={{ backgroundColor: theme.secondary }}>

                    {/* Left: Title & Bio */}
                    <div className="achievement-body">
                        <h1 style={{ color: theme.primary }}>Achievements</h1>
                        <h4 style={{ color: theme.tertiary }}>{achievementData.bio}</h4>
                    </div>

                    {/* Right: Timeline */}
                    <div className="achievement-cards">
                        {achievementData.achievements.slice(0, 3).map(achieve => (
                            <AchievementCard
                                key={achieve.id}
                                id={achieve.id}
                                title={achieve.title}
                                details={achieve.details}
                                date={achieve.date}
                                field={achieve.field}
                                image={achieve.image}
                            />
                        ))}

                        {achievementData.achievements.length > 3 && (
                            <div className="achievement-viewAll">
                                <button
                                    className="achievement-viewAllBtn"
                                    style={{ backgroundColor: theme.primary }}
                                    onClick={() => setShowModal(true)}
                                >
                                    <span className="achievement-viewAllText" style={{ color: theme.secondary }}>
                                        View All
                                    </span>
                                    <span className="achievement-viewAllArrow" style={{ backgroundColor: theme.secondary, color: theme.primary }}>
                                        →
                                    </span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Modal */}
                    {showModal && (
                        <div className="achievement-modalOverlay" onClick={() => setShowModal(false)}>
                            <div
                                className="achievement-modal"
                                style={{ backgroundColor: '#0d0d0d', border: `1px solid ${theme.primary}30` }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="achievement-modalHeader">
                                    <h2 style={{ color: theme.primary }}>All Achievements</h2>
                                    <button
                                        className="achievement-modalClose"
                                        style={{ backgroundColor: theme.primary, color: theme.secondary }}
                                        onClick={() => setShowModal(false)}
                                    >
                                        ✕
                                    </button>
                                </div>
                                <div className="achievement-modalBody">
                                    {achievementData.achievements.map(achieve => (
                                        <AchievementCard
                                            key={achieve.id}
                                            id={achieve.id}
                                            title={achieve.title}
                                            details={achieve.details}
                                            date={achieve.date}
                                            field={achieve.field}
                                            image={achieve.image}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default Achievement;