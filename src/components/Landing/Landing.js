import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Typical from 'react-typical';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaInstagram,
} from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

// ── Animated Counter ──
function Counter({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const numeric = parseInt(target);
                    const duration = 1500;
                    const steps = 40;
                    const increment = numeric / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= numeric) {
                            setCount(numeric);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    return (
        <div className='landing' style={{ background: `linear-gradient(135deg, #0a0a0a 0%, #0d1f0d 50%, #0a0a0a 100%)` }}>

            {/* ── Main Hero ── */}
            <div className='landing--hero'>

                {/* Glowing Profile Photo */}
                <div className='landing--photo-wrapper'>
                    <div className='landing--photo-ring' style={{ borderColor: theme.primary, boxShadow: `0 0 30px ${theme.primary}, 0 0 60px ${theme.primary}40` }}>
                        <img
                            src={headerData.image}
                            alt={headerData.name}
                            className='landing--photo'
                            style={{ opacity: drawerOpen ? 0 : 1 }}
                        />
                    </div>
                    <div className='landing--orbit' style={{ borderColor: `${theme.primary}40` }} />
                </div>

                {/* Terminal Block */}
                <div className='landing--terminal'>
                    <div className='landing--terminal-bar'>
                        <span className='terminal-btn red' />
                        <span className='terminal-btn yellow' />
                        <span className='terminal-btn green' style={{ backgroundColor: theme.primary }} />
                        <span className='terminal-title'>habeeb@kali:~</span>
                    </div>
                    <div className='landing--terminal-body'>
                        <div className='terminal-line'>
                            <span className='terminal-prompt' style={{ color: theme.primary }}>➜ </span>
                            <span className='terminal-cmd'>whoami</span>
                        </div>
                        <div className='terminal-output' style={{ color: '#fff' }}>
                            <span style={{ color: theme.primary, fontWeight: 700, fontSize: '2rem' }}>
                                {headerData.name}
                            </span>
                        </div>
                        <div className='terminal-line' style={{ marginTop: '0.75rem' }}>
                            <span className='terminal-prompt' style={{ color: theme.primary }}>➜ </span>
                            <span className='terminal-cmd'>cat roles.txt</span>
                        </div>
                        <div className='terminal-output' style={{ color: theme.primary, fontSize: '1.1rem', minHeight: '1.8rem' }}>
                            <Typical
                                loop={Infinity}
                                wrapper="span"
                                steps={[
                                    'Intelligence Architect', 2000,
                                    'Vulnerability Management Engineer', 2000,
                                    'Instructor', 2000,
                                    'Penetration Tester', 2000,
                                    'Cybersecurity Expert', 2000,
                                ]}
                            />
                        </div>
                        <div className='terminal-line' style={{ marginTop: '0.75rem' }}>
                            <span className='terminal-prompt' style={{ color: theme.primary }}>➜ </span>
                            <span className='terminal-cmd'>echo $BIO</span>
                        </div>
                        <div className='terminal-output' style={{ color: '#aaa', fontSize: '0.95rem', maxWidth: '480px', lineHeight: '1.6' }}>
                            {headerData.desciption}
                        </div>
                    </div>
                </div>

                {/* Social Icons */}
                <div className='landing--socials'>
                    {socialsData.github && (
                        <a href={socialsData.github} target='_blank' rel='noreferrer' className='landing--social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}50` }}>
                            <FaGithub />
                        </a>
                    )}
                    {socialsData.linkedIn && (
                        <a href={socialsData.linkedIn} target='_blank' rel='noreferrer' className='landing--social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}50` }}>
                            <FaLinkedin />
                        </a>
                    )}
                    {socialsData.twitter && (
                        <a href={socialsData.twitter} target='_blank' rel='noreferrer' className='landing--social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}50` }}>
                            <FaTwitter />
                        </a>
                    )}
                    {socialsData.instagram && (
                        <a href={socialsData.instagram} target='_blank' rel='noreferrer' className='landing--social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}50` }}>
                            <FaInstagram />
                        </a>
                    )}
                    {socialsData.tiktok && (
                        <a href={socialsData.tiktok} target='_blank' rel='noreferrer' className='landing--social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}50` }}>
                            <FaTiktok />
                        </a>
                    )}
                    {socialsData.youtube && (
                        <a href={socialsData.youtube} target='_blank' rel='noreferrer' className='landing--social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}50` }}>
                            <FaYoutube />
                        </a>
                    )}
                </div>

                {/* CTA Buttons */}
                <div className='landing--buttons'>
                    {headerData.resumePdf && (
                        <a href={headerData.resumePdf} download='resume' target='_blank' rel='noreferrer'>
                            <button className='landing--btn-outline' style={{ borderColor: theme.primary, color: theme.primary }}>
                                Download CV
                            </button>
                        </a>
                    )}
                    <NavLink to='/#contacts' smooth={true} spy='true' duration={2000}>
                        <button className='landing--btn-solid' style={{ backgroundColor: theme.primary, color: '#0a0a0a' }}>
                            Contact Me
                        </button>
                    </NavLink>
                </div>
            </div>

            {/* ── Stats Bar ── */}
            <div className='landing--stats' style={{ borderTop: `1px solid ${theme.primary}30` }}>
                <div className='landing--stat'>
                    <h3 style={{ color: theme.primary }}><Counter target={4} suffix="+" /></h3>
                    <p>Years Experience</p>
                </div>
                <div className='landing--stat-divider' style={{ backgroundColor: `${theme.primary}30` }} />
                <div className='landing--stat'>
                    <h3 style={{ color: theme.primary }}><Counter target={10} suffix="+" /></h3>
                    <p>Projects Completed</p>
                </div>
                <div className='landing--stat-divider' style={{ backgroundColor: `${theme.primary}30` }} />
                <div className='landing--stat'>
                    <h3 style={{ color: theme.primary }}><Counter target={10} suffix="+" /></h3>
                    <p>Certifications</p>
                </div>
                <div className='landing--stat-divider' style={{ backgroundColor: `${theme.primary}30` }} />
                <div className='landing--stat'>
                    <h3 style={{ color: theme.primary }}><Counter target={100} suffix="%" /></h3>
                    <p>Commitment</p>
                </div>
            </div>
        </div>
    );
}

export default Landing;