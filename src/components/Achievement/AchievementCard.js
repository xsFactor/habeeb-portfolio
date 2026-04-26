import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AiOutlineFolder, AiOutlineCalendar, AiOutlineTrophy } from 'react-icons/ai';
import './Achievement.css';

function AchievementCard({ id, title, details, date, field, image }) {
    const { theme } = useContext(ThemeContext);
    const [hovered, setHovered] = useState(false);

    return (
        <Fade bottom>
            <div className='achievement-timeline-item'>

                {/* ── Timeline Line & Dot ── */}
                <div className='achievement-timeline-left'>
                    <div
                        className='achievement-timeline-dot'
                        style={{
                            backgroundColor: hovered ? theme.primary : '#0d0d0d',
                            border: `2px solid ${theme.primary}`,
                            boxShadow: hovered ? `0 0 12px ${theme.primary}, 0 0 24px ${theme.primary}40` : `0 0 6px ${theme.primary}40`,
                        }}
                    >
                        <AiOutlineTrophy style={{ color: hovered ? '#0a0a0a' : theme.primary, fontSize: '1rem' }} />
                    </div>
                    <div
                        className='achievement-timeline-line'
                        style={{ backgroundColor: `${theme.primary}30` }}
                    />
                </div>

                {/* ── Card Content ── */}
                <div
                    className='achievement-timeline-card'
                    style={{
                        backgroundColor: '#0d0d0d',
                        border: `1px solid ${hovered ? theme.primary : theme.primary + '25'}`,
                        boxShadow: hovered
                            ? `0 0 25px ${theme.primary}25, 0 0 50px ${theme.primary}10`
                            : '0 4px 20px rgba(0,0,0,0.3)',
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {/* Card Header */}
                    <div
                        className='achievement-card-header'
                        style={{ borderBottom: `1px solid ${theme.primary}20` }}
                    >
                        <span
                            className='achievement-card-prompt'
                            style={{ color: theme.primary, fontFamily: 'Courier New, monospace', fontSize: '0.8rem' }}
                        >
                            ➜ achievement.log
                        </span>
                        <div className='achievement-card-meta'>
                            <span style={{ color: theme.primary, display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'Courier New, monospace', fontSize: '0.78rem' }}>
                                <AiOutlineCalendar />
                                {date}
                            </span>
                            <span style={{ color: `${theme.primary}80`, display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'Courier New, monospace', fontSize: '0.78rem' }}>
                                <AiOutlineFolder />
                                {field}
                            </span>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className='achievement-card-body'>
                        <div className='achievement-card-text'>
                            <h2 style={{ color: '#fff' }}>{title}</h2>
                            <p style={{ color: '#888' }}>{details}</p>
                        </div>
                        {image && (
                            <div
                                className='achievement-card-img'
                                style={{ border: `1px solid ${theme.primary}20` }}
                            >
                                <img src={image} alt={title} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default AchievementCard;