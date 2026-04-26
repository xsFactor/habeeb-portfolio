import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { FaTerminal, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import placeholder from '../../../assets/png/placeholder.png';
import './SingleBlog.css';

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Fade bottom>
            <a
                className='singleBlog'
                key={id}
                href={url}
                target='_blank'
                rel='noreferrer'
                style={{
                    backgroundColor: '#0d0d0d',
                    border: `1px solid ${hovered ? theme.primary : theme.primary + '30'}`,
                    boxShadow: hovered
                        ? `0 0 25px ${theme.primary}30, 0 0 50px ${theme.primary}10`
                        : '0 4px 20px rgba(0,0,0,0.4)',
                    textDecoration: 'none',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* ── Terminal Bar ── */}
                <div
                    className='sb-terminal-bar'
                    style={{
                        backgroundColor: '#1a1a1a',
                        borderBottom: `1px solid ${theme.primary}20`,
                    }}
                >
                    <span className='sb-btn sb-red' />
                    <span className='sb-btn sb-yellow' />
                    <span className='sb-btn sb-green' style={{ backgroundColor: theme.primary }} />
                    <span className='sb-terminal-title' style={{ color: theme.primary }}>
                        <FaTerminal style={{ marginRight: '5px', fontSize: '0.7rem' }} />
                        blog.log
                    </span>
                </div>

                {/* ── Image ── */}
                <div className='sb-image-wrapper'>
                    <img
                        src={image ? image : placeholder}
                        alt={title}
                        className='sb-image'
                        style={{ opacity: hovered ? 0.15 : 1 }}
                    />
                    {/* Hover overlay */}
                    <div
                        className='sb-overlay'
                        style={{ opacity: hovered ? 1 : 0 }}
                    >
                        <p style={{
                            color: '#aaa',
                            fontFamily: 'Courier New, monospace',
                            fontSize: '0.82rem',
                            lineHeight: '1.7',
                        }}>
                            <span style={{ color: theme.primary }}>➜ </span>
                            cat summary.txt<br />
                            <span style={{ color: '#ccc' }}>{desc}</span>
                        </p>
                    </div>
                </div>

                {/* ── Body ── */}
                <div className='sb-body'>
                    {/* Date */}
                    <div className='sb-date' style={{ color: theme.primary }}>
                        <FaCalendarAlt style={{ marginRight: '5px', fontSize: '0.75rem' }} />
                        <span style={{ fontFamily: 'Courier New, monospace', fontSize: '0.78rem' }}>
                            {date}
                        </span>
                    </div>

                    {/* Title */}
                    <div className='sb-title-row'>
                        <span style={{ color: theme.primary, fontFamily: 'Courier New, monospace', fontSize: '0.85rem' }}>➜ </span>
                        <h3 style={{ color: '#fff' }}>{title}</h3>
                    </div>

                    {/* Read more */}
                    <div className='sb-read-more' style={{ color: theme.primary }}>
                        <FaExternalLinkAlt style={{ marginRight: '5px', fontSize: '0.75rem' }} />
                        <span style={{ fontFamily: 'Courier New, monospace', fontSize: '0.78rem' }}>
                            ./read-more.sh
                        </span>
                    </div>
                </div>
            </a>
        </Fade>
    );
}

export default SingleBlog;