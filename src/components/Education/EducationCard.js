import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import { AiOutlineCaretRight } from 'react-icons/ai';
import './Education.css';

function EducationCard({ id, institution, course, startYear, endYear }) {
    const { theme } = useContext(ThemeContext);
    const [hovered, setHovered] = useState(false);

    // Extract degree type for badge
    const getDegree = (course) => {
        if (course.includes('Master')) return 'MSc';
        if (course.includes('Bachelor')) return 'BSc';
        if (course.includes('PhD')) return 'PhD';
        if (course.includes('Diploma')) return 'DIP';
        return 'EDU';
    };

    return (
        <Fade bottom>
            <div
                className='edu-card'
                style={{
                    backgroundColor: '#0d0d0d',
                    border: `1px solid ${hovered ? theme.primary : theme.primary + '25'}`,
                    boxShadow: hovered
                        ? `0 0 20px ${theme.primary}25, 0 0 40px ${theme.primary}10`
                        : '0 4px 15px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* ── Top: Terminal Header ── */}
                <div
                    className='edu-card-header'
                    style={{ borderBottom: `1px solid ${theme.primary}20`, backgroundColor: '#1a1a1a' }}
                >
                    <span style={{ color: theme.primary, fontFamily: 'Courier New, monospace', fontSize: '0.78rem' }}>
                        ➜ academic-record.cert
                    </span>
                    {/* Degree Badge */}
                    <span
                        className='edu-degree-badge'
                        style={{
                            backgroundColor: `${theme.primary}15`,
                            border: `1px solid ${theme.primary}50`,
                            color: theme.primary,
                        }}
                    >
                        {getDegree(course)}
                    </span>
                </div>

                {/* ── Body ── */}
                <div className='edu-card-body'>
                    {/* Icon */}
                    <div
                        className='edu-card-icon'
                        style={{
                            border: `2px solid ${theme.primary}`,
                            backgroundColor: hovered ? theme.primary : 'transparent',
                            boxShadow: hovered ? `0 0 12px ${theme.primary}60` : 'none',
                        }}
                    >
                        <FaGraduationCap
                            style={{ color: hovered ? '#0a0a0a' : theme.primary, fontSize: '1.2rem' }}
                        />
                    </div>

                    {/* Details */}
                    <div className='edu-card-content'>
                        {/* Course */}
                        <div className='edu-card-course'>
                            <AiOutlineCaretRight style={{ color: theme.primary, fontSize: '0.9rem', flexShrink: 0 }} />
                            <h4 style={{ color: '#fff' }}>{course}</h4>
                        </div>

                        {/* Institution */}
                        <div className='edu-card-institution'>
                            <FaUniversity style={{ color: theme.primary, fontSize: '0.78rem' }} />
                            <h5 style={{ color: '#aaa' }}>{institution}</h5>
                        </div>

                        {/* Date */}
                        <div className='edu-card-date'>
                            <FaCalendarAlt style={{ color: theme.primary, fontSize: '0.75rem' }} />
                            <span style={{ color: theme.primary, fontFamily: 'Courier New, monospace', fontSize: '0.78rem' }}>
                                {startYear} — {endYear}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default EducationCard;