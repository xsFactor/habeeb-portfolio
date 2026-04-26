import React, { useState } from 'react';
import { FaPlay, FaCode, FaTerminal } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Fade bottom>
            <div
                key={id}
                className='singleProject'
                style={{
                    backgroundColor: '#0d0d0d',
                    border: `1px solid ${hovered ? theme.primary : theme.primary + '30'}`,
                    boxShadow: hovered ? `0 0 25px ${theme.primary}30, 0 0 50px ${theme.primary}10` : '0 4px 20px rgba(0,0,0,0.4)',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* ── Terminal Bar ── */}
                <div className='sp-terminal-bar' style={{ backgroundColor: '#1a1a1a', borderBottom: `1px solid ${theme.primary}20` }}>
                    <span className='sp-btn sp-red' />
                    <span className='sp-btn sp-yellow' />
                    <span className='sp-btn sp-green' style={{ backgroundColor: theme.primary }} />
                    <span className='sp-terminal-title' style={{ color: theme.primary }}>
                        <FaTerminal style={{ marginRight: '5px', fontSize: '0.7rem' }} />
                        {name.toLowerCase().replace(/ /g, '-')}.sh
                    </span>
                </div>

                {/* ── Project Image ── */}
                <div className='sp-image-wrapper'>
                    <img
                        src={image ? image : placeholder}
                        alt={name}
                        className='sp-image'
                        style={{ opacity: hovered ? 0.15 : 1 }}
                    />
                    {/* Overlay on hover */}
                    <div
                        className='sp-overlay'
                        style={{ opacity: hovered ? 1 : 0 }}
                    >
                        <p style={{ color: '#ccc', fontFamily: 'Courier New, monospace', fontSize: '0.85rem', lineHeight: '1.7' }}>
                            <span style={{ color: theme.primary }}>➜ </span>
                            cat description.txt<br />
                            <span style={{ color: '#aaa' }}>{desc}</span>
                        </p>
                    </div>
                </div>

                {/* ── Project Name ── */}
                <div className='sp-name'>
                    <span style={{ color: theme.primary, fontFamily: 'Courier New, monospace', fontSize: '0.85rem' }}>➜ </span>
                    <h2 style={{ color: '#fff' }}>{name}</h2>
                </div>

                {/* ── Tags ── */}
                <div className='sp-tags'>
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className='sp-tag'
                            style={{
                                color: theme.primary,
                                border: `1px solid ${theme.primary}40`,
                                backgroundColor: `${theme.primary}10`,
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* ── Buttons ── */}
                <div className='sp-buttons'>
                    {demo && (
                        <a
                            href={demo}
                            target='_blank'
                            rel='noreferrer'
                            className='sp-btn-action'
                            style={{
                                backgroundColor: theme.primary,
                                color: '#0a0a0a',
                            }}
                        >
                            <FaPlay style={{ marginRight: '6px', fontSize: '0.75rem' }} />
                            Demo
                        </a>
                    )}
                    {code && (
                        <a
                            href={code}
                            target='_blank'
                            rel='noreferrer'
                            className='sp-btn-action sp-btn-outline'
                            style={{
                                borderColor: theme.primary,
                                color: theme.primary,
                            }}
                        >
                            <FaCode style={{ marginRight: '6px', fontSize: '0.75rem' }} />
                            Code
                        </a>
                    )}
                </div>
            </div>
        </Fade>
    );
}

export default SingleProject;