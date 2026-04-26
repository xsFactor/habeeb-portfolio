import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FaBriefcase, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import { AiOutlineCaretRight } from 'react-icons/ai';
import './Experience.css';

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
    const { theme } = useContext(ThemeContext);
    const [hovered, setHovered] = useState(false);

    return (
        <Fade bottom>
            <div
                className='exp-card'
                style={{
                    border: `1px solid ${hovered ? theme.primary : theme.primary + '25'}`,
                    boxShadow: hovered
                        ? `0 0 20px ${theme.primary}25, 0 0 40px ${theme.primary}10`
                        : '0 4px 15px rgba(0,0,0,0.3)',
                    backgroundColor: '#0d0d0d',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* ── Left: Icon ── */}
                <div
                    className='exp-card-icon'
                    style={{
                        backgroundColor: hovered ? theme.primary : 'transparent',
                        border: `2px solid ${theme.primary}`,
                        boxShadow: hovered ? `0 0 12px ${theme.primary}60` : 'none',
                    }}
                >
                    <FaBriefcase style={{ color: hovered ? '#0a0a0a' : theme.primary, fontSize: '1.1rem' }} />
                </div>

                {/* ── Right: Details ── */}
                <div className='exp-card-content'>
                    {/* Job Title */}
                    <div className='exp-card-title'>
                        <AiOutlineCaretRight style={{ color: theme.primary, fontSize: '0.9rem', flexShrink: 0 }} />
                        <h4 style={{ color: '#fff' }}>{jobtitle}</h4>
                    </div>

                    {/* Company */}
                    <div className='exp-card-company'>
                        <FaBuilding style={{ color: theme.primary, fontSize: '0.78rem' }} />
                        <h5 style={{ color: '#aaa' }}>{company}</h5>
                    </div>

                    {/* Date */}
                    <div className='exp-card-date'>
                        <FaCalendarAlt style={{ color: theme.primary, fontSize: '0.75rem' }} />
                        <span style={{ color: theme.primary, fontFamily: 'Courier New, monospace', fontSize: '0.78rem' }}>
                            {startYear} — {endYear}
                        </span>
                    </div>
                </div>

                {/* ── Status Badge ── */}
                <div
                    className='exp-card-status'
                    style={{
                        backgroundColor: endYear === 'Present' ? `${theme.primary}20` : 'rgba(255,255,255,0.05)',
                        border: `1px solid ${endYear === 'Present' ? theme.primary : '#333'}`,
                        color: endYear === 'Present' ? theme.primary : '#666',
                    }}
                >
                    <span
                        className='exp-status-dot'
                        style={{ backgroundColor: endYear === 'Present' ? theme.primary : '#555' }}
                    />
                    {endYear === 'Present' ? 'Active' : 'Completed'}
                </div>
            </div>
        </Fade>
    );
}

export default ExperienceCard;