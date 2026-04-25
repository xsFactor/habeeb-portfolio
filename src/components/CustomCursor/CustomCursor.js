import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './CustomCursor.css';

function CustomCursor() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const dot = document.querySelector('.cursor-dot');
        const ring = document.querySelector('.cursor-ring');

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
        };

        // Smooth ring follow
        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            ring.style.left = ringX + 'px';
            ring.style.top = ringY + 'px';
            requestAnimationFrame(animateRing);
        };

        // Grow on hover over clickable elements
        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button')
            ) {
                dot.classList.add('cursor-hover');
                ring.classList.add('cursor-hover');
            }
        };

        const handleMouseOut = () => {
            dot.classList.remove('cursor-hover');
            ring.classList.remove('cursor-hover');
        };

        // Hide on mouse leave, show on enter
        const handleMouseLeave = () => {
            dot.style.opacity = '0';
            ring.style.opacity = '0';
        };

        const handleMouseEnter = () => {
            dot.style.opacity = '1';
            ring.style.opacity = '1';
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);
        animateRing();

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    return (
        <>
            <div
                className='cursor-dot'
                style={{ backgroundColor: theme.primary }}
            />
            <div
                className='cursor-ring'
                style={{ borderColor: theme.primary }}
            />
        </>
    );
}

export default CustomCursor;