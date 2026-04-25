import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const lines = [
    { text: '> Initializing system...', delay: 0 },
    { text: '> Loading security modules...', delay: 600 },
    { text: '> Establishing encrypted connection...', delay: 1200 },
    { text: '> Running reconnaissance...', delay: 1800 },
    { text: '> Access granted. Welcome.', delay: 2400 },
];

function LoadingScreen({ onComplete }) {
    const [visibleLines, setVisibleLines] = useState([]);
    const [done, setDone] = useState(false);

    useEffect(() => {
        lines.forEach((line) => {
            setTimeout(() => {
                setVisibleLines((prev) => [...prev, line.text]);
            }, line.delay);
        });

        // Fade out after all lines shown
        setTimeout(() => {
            setDone(true);
            setTimeout(() => {
                onComplete();
            }, 600);
        }, 3200);
    }, [onComplete]);

    return (
        <div className={`loading-screen ${done ? 'loading-screen--done' : ''}`}>
            <div className="loading-terminal">
                <div className="loading-terminal--bar">
                    <span className="loading-btn red" />
                    <span className="loading-btn yellow" />
                    <span className="loading-btn green" />
                    <span className="loading-terminal--title">habeeb@kali:~</span>
                </div>
                <div className="loading-terminal--body">
                    {visibleLines.map((line, index) => (
                        <div
                            key={index}
                            className={`loading-line ${
                                index === visibleLines.length - 1 ? 'loading-line--last' : ''
                            }`}
                        >
                            <span className="loading-line--text">{line}</span>
                            {index === visibleLines.length - 1 && !done && (
                                <span className="loading-cursor">█</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;