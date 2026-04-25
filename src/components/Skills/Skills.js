import React, { useContext, useState } from 'react';
import './Skills.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsCategories } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {
    const { theme } = useContext(ThemeContext);
    const [activeTab, setActiveTab] = useState(0);

    const activeCategory = skillsCategories[activeTab];

    return (
        <div className="skills" style={{ backgroundColor: theme.secondary }}>

            {/* Header */}
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>

            {/* Category Tabs */}
            <div className="skills--tabs">
                {skillsCategories.map((cat, index) => (
                    <button
                        key={cat.id}
                        className={`skills--tab ${activeTab === index ? 'skills--tab-active' : ''}`}
                        style={{
                            borderColor: activeTab === index ? theme.primary : `${theme.primary}30`,
                            color: activeTab === index ? theme.secondary : theme.primary,
                            backgroundColor: activeTab === index ? theme.primary : 'transparent',
                            boxShadow: activeTab === index ? `0 0 12px ${theme.primary}60` : 'none',
                        }}
                        onClick={() => setActiveTab(index)}
                    >
                        {cat.category}
                    </button>
                ))}
            </div>

            {/* Skills Grid */}
            <div className="skills--grid">
                {activeCategory.skills.map((skill, id) => {
                    const image = skillsImage(skill);
                    return (
                        <div
                            key={id}
                            className="skill--box"
                            style={{
                                backgroundColor: '#0d0d0d',
                                border: `1px solid ${theme.primary}20`,
                                boxShadow: `0px 0px 15px ${theme.primary}10`,
                            }}
                        >
                            {image ? (
                                <img src={image} alt={skill} />
                            ) : (
                                <div
                                    className="skill--noicon"
                                    style={{ color: theme.primary }}
                                >
                                    {'>_'}
                                </div>
                            )}
                            <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;