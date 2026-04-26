import React, { useContext, useState } from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
    FaRedditAlien,
    FaStackOverflow,
    FaCodepen,
    FaInstagram,
    FaGitlab,
    FaMediumM,
    FaTerminal,
} from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const { theme } = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();
        if (name && email && message) {
            if (isEmail(email)) {
                const responseData = { name, email, message };
                axios.post(contactsData.sheetAPI, responseData).then((res) => {
                    setSuccess(true);
                    setErrMsg('');
                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div className='contacts' id='contacts'
            style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #0d1f0d 50%, #0a0a0a 100%)' }}
        >
            {/* Header */}
            <div className='contacts--header'>
                <h1 style={{ color: theme.primary }}>Contact</h1>
                <p className='contacts--subtitle' style={{ color: '#666' }}>
                    <span style={{ color: theme.primary }}>➜ </span>
                    ./send-message.sh --secure --encrypted
                </p>
            </div>

            <div className='contacts--wrapper'>

                {/* ── Terminal Form ── */}
                <div className='contacts--terminal'
                    style={{
                        border: `1px solid ${theme.primary}30`,
                        boxShadow: `0 0 30px ${theme.primary}10`,
                    }}
                >
                    <div className='contacts--terminal-bar'
                        style={{ backgroundColor: '#1a1a1a', borderBottom: `1px solid ${theme.primary}20` }}
                    >
                        <span className='ct-btn ct-red' />
                        <span className='ct-btn ct-yellow' />
                        <span className='ct-btn ct-green' style={{ backgroundColor: theme.primary }} />
                        <span className='ct-title' style={{ color: theme.primary }}>
                            <FaTerminal style={{ marginRight: '5px', fontSize: '0.7rem' }} />
                            message.sh
                        </span>
                    </div>

                    <div className='contacts--form-body'>
                        {success ? (
                            <div className='contacts--success'>
                                <AiOutlineCheckCircle style={{ color: theme.primary, fontSize: '3rem' }} />
                                <p style={{ color: theme.primary, fontFamily: 'Courier New, monospace', marginTop: '1rem' }}>
                                    ➜ Message sent successfully!
                                </p>
                                <p style={{ color: '#666', fontFamily: 'Courier New, monospace', fontSize: '0.85rem' }}>
                                    I'll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleContactForm}>
                                <div className='ct-field'>
                                    <label style={{ color: theme.primary }}>
                                        <span className='ct-prompt'>➜ </span>enter_name:
                                    </label>
                                    <input
                                        placeholder='John Doe'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type='text'
                                        className='ct-input'
                                        style={{ borderBottom: `1px solid ${theme.primary}50`, color: '#fff', caretColor: theme.primary }}
                                    />
                                </div>
                                <div className='ct-field'>
                                    <label style={{ color: theme.primary }}>
                                        <span className='ct-prompt'>➜ </span>enter_email:
                                    </label>
                                    <input
                                        placeholder='john@doe.com'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type='email'
                                        className='ct-input'
                                        style={{ borderBottom: `1px solid ${theme.primary}50`, color: '#fff', caretColor: theme.primary }}
                                    />
                                </div>
                                <div className='ct-field'>
                                    <label style={{ color: theme.primary }}>
                                        <span className='ct-prompt'>➜ </span>enter_message:
                                    </label>
                                    <textarea
                                        placeholder='Type your message...'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className='ct-textarea'
                                        style={{ borderBottom: `1px solid ${theme.primary}50`, color: '#fff', caretColor: theme.primary }}
                                    />
                                </div>
                                <button
                                    type='submit'
                                    className='ct-submit'
                                    style={{ backgroundColor: theme.primary, color: '#0a0a0a' }}
                                >
                                    <span style={{ fontFamily: 'Courier New, monospace' }}>➜ </span>
                                    ./send.sh
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* ── Info Panel ── */}
                <div className='contacts--info'>
                    <div className='contacts--details-panel'
                        style={{ border: `1px solid ${theme.primary}20`, backgroundColor: '#0d0d0d' }}
                    >
                        <div className='contacts--details-header'
                            style={{ borderBottom: `1px solid ${theme.primary}20` }}
                        >
                            <span style={{ color: theme.primary, fontFamily: 'Courier New, monospace', fontSize: '0.85rem' }}>
                                ➜ cat contact-info.txt
                            </span>
                        </div>
                        <div className='contacts--details-body'>
                            <a href={`mailto:${contactsData.email}`} className='ct-detail-item'>
                                <div className='ct-detail-icon' style={{ color: theme.primary }}><FiAtSign /></div>
                                <p style={{ color: '#ccc' }}>{contactsData.email}</p>
                            </a>
                            <a href={`tel:${contactsData.phone}`} className='ct-detail-item'>
                                <div className='ct-detail-icon' style={{ color: theme.primary }}><FiPhone /></div>
                                <p style={{ color: '#ccc' }}>{contactsData.phone}</p>
                            </a>
                            <div className='ct-detail-item'>
                                <div className='ct-detail-icon' style={{ color: theme.primary }}><HiOutlineLocationMarker /></div>
                                <p style={{ color: '#ccc' }}>{contactsData.address}</p>
                            </div>
                        </div>
                    </div>

                    <div className='contacts--socials-panel'
                        style={{ border: `1px solid ${theme.primary}20`, backgroundColor: '#0d0d0d' }}
                    >
                        <div className='contacts--details-header'
                            style={{ borderBottom: `1px solid ${theme.primary}20` }}
                        >
                            <span style={{ color: theme.primary, fontFamily: 'Courier New, monospace', fontSize: '0.85rem' }}>
                                ➜ ls ./socials/
                            </span>
                        </div>
                        <div className='ct-socials'>
                            {socialsData.github && (<a href={socialsData.github} target='_blank' rel='noreferrer' className='ct-social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}><FaGithub /></a>)}
                            {socialsData.linkedIn && (<a href={socialsData.linkedIn} target='_blank' rel='noreferrer' className='ct-social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}><FaLinkedinIn /></a>)}
                            {socialsData.twitter && (<a href={socialsData.twitter} target='_blank' rel='noreferrer' className='ct-social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}><FaTwitter /></a>)}
                            {socialsData.instagram && (<a href={socialsData.instagram} target='_blank' rel='noreferrer' className='ct-social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}><FaInstagram /></a>)}
                            {socialsData.tiktok && (<a href={socialsData.tiktok} target='_blank' rel='noreferrer' className='ct-social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}><FaTiktok /></a>)}
                            {socialsData.youtube && (<a href={socialsData.youtube} target='_blank' rel='noreferrer' className='ct-social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}><FaYoutube /></a>)}
                            {socialsData.medium && (<a href={socialsData.medium} target='_blank' rel='noreferrer' className='ct-social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}><FaMediumM /></a>)}
                            {socialsData.reddit && (<a href={socialsData.reddit} target='_blank' rel='noreferrer' className='ct-social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}><FaRedditAlien /></a>)}
                            {socialsData.stackOverflow && (<a href={socialsData.stackOverflow} target='_blank' rel='noreferrer' className='ct-social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}><FaStackOverflow /></a>)}
                            {socialsData.codepen && (<a href={socialsData.codepen} target='_blank' rel='noreferrer' className='ct-social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}><FaCodepen /></a>)}
                            {socialsData.gitlab && (<a href={socialsData.gitlab} target='_blank' rel='noreferrer' className='ct-social-icon' style={{ color: theme.primary, borderColor: `${theme.primary}30` }}><FaGitlab /></a>)}
                        </div>
                    </div>
                </div>
            </div>

            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={4000} onClose={handleClose}>
                <SnackbarContent
                    action={<React.Fragment><IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}><CloseIcon fontSize='small' /></IconButton></React.Fragment>}
                    style={{ backgroundColor: theme.primary, color: '#0a0a0a', fontFamily: 'var(--primaryFont)' }}
                    message={errMsg}
                />
            </Snackbar>
        </div>
    );
}

export default Contacts;