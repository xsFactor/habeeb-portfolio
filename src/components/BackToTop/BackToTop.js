import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './BackToTop.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const toggleVisible = () => {
            setVisible(document.documentElement.scrollTop > 300);
        };
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            className={`backToTop ${visible ? 'backToTop--visible' : ''}`}
        >
            <button
                onClick={scrollToTop}
                aria-label='Back to top'
                className='backToTop--btn'
                style={{
                    backgroundColor: '#0d0d0d',
                    border: `1px solid ${theme.primary}`,
                    color: theme.primary,
                    boxShadow: `0 0 10px ${theme.primary}40`,
                }}
            >
                <span className='backToTop--prompt' style={{ color: theme.primary }}>➜</span>
                <span className='backToTop--cmd'>^ top</span>
            </button>
        </div>
    );
}

export default BackToTop;