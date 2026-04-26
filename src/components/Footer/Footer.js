import React, { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import {
    FaGithub,
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
    FaYoutube,
} from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

function Footer() {
    const { theme } = useContext(ThemeContext);

    const year = new Date().getFullYear();

    const shortname = (name) => {
        if (name.length > 10) return name.split(' ')[0];
        return name;
    };

    return (
        <div className='footer' style={{ borderTop: `1px solid ${theme.primary}20` }}>

            {/* ── Top Row ── */}
            <div className='footer--top'>

                {/* Brand */}
                <div className='footer--brand'>
                    <span className='footer--prompt' style={{ color: theme.primary }}>➜ </span>
                    <h2 className='footer--name' style={{ color: theme.primary }}>
                        {shortname(headerData.name)}
                    </h2>
                    <span className='footer--cursor' style={{ backgroundColor: theme.primary }} />
                </div>

                {/* Tagline */}
                <p className='footer--tagline' style={{ color: '#555', fontFamily: 'Courier New, monospace' }}>
                    Securing the digital world, one line at a time
                </p>

                {/* Socials */}
                <div className='footer--socials'>
                    {socialsData.github && (
                        <a href={socialsData.github} target='_blank' rel='noreferrer' className='footer--social' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}>
                            <FaGithub />
                        </a>
                    )}
                    {socialsData.linkedIn && (
                        <a href={socialsData.linkedIn} target='_blank' rel='noreferrer' className='footer--social' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}>
                            <FaLinkedinIn />
                        </a>
                    )}
                    {socialsData.twitter && (
                        <a href={socialsData.twitter} target='_blank' rel='noreferrer' className='footer--social' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}>
                            <FaTwitter />
                        </a>
                    )}
                    {socialsData.instagram && (
                        <a href={socialsData.instagram} target='_blank' rel='noreferrer' className='footer--social' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}>
                            <FaInstagram />
                        </a>
                    )}
                    {socialsData.tiktok && (
                        <a href={socialsData.tiktok} target='_blank' rel='noreferrer' className='footer--social' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}>
                            <FaTiktok />
                        </a>
                    )}
                    {socialsData.youtube && (
                        <a href={socialsData.youtube} target='_blank' rel='noreferrer' className='footer--social' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}>
                            <FaYoutube />
                        </a>
                    )}
                </div>
            </div>

            {/* ── Divider ── */}
            <div className='footer--divider' style={{ backgroundColor: `${theme.primary}20` }} />

            {/* ── Bottom Row ── */}
            <div className='footer--bottom'>
                <p style={{ color: '#444', fontFamily: 'Courier New, monospace', fontSize: '0.78rem' }}>
                    <span style={{ color: theme.primary }}>© {year}</span> {headerData.name}. All rights reserved.
                </p>
                <p style={{ color: '#444', fontFamily: 'Courier New, monospace', fontSize: '0.78rem' }}>
                    Built with <span style={{ color: theme.primary }}>❤</span> &amp; <span style={{ color: theme.primary }}>Mind</span>
                </p>
            </div>
        </div>
    );
}

export default Footer;