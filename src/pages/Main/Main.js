import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
import './Main.css'

// ── Animated Section Wrapper ──
function AnimatedSection({ children, direction = 'up' }) {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section--visible');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.08 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`section--hidden section--from-${direction}`}>
            {children}
        </div>
    );
}

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Portfolio</title>
            </Helmet>
            <Navbar />
            <Landing />
            <AnimatedSection direction="up">
                <About />
            </AnimatedSection>
            <AnimatedSection direction="left">
                <Education />
            </AnimatedSection>
            <AnimatedSection direction="up">
                <Skills />
            </AnimatedSection>
            <AnimatedSection direction="right">
                <Experience />
            </AnimatedSection>
            <AnimatedSection direction="up">
                <Projects />
            </AnimatedSection>
            <AnimatedSection direction="left">
                <Achievement />
            </AnimatedSection>
            <AnimatedSection direction="up">
                <Services />
            </AnimatedSection>
            <AnimatedSection direction="right">
                <Testimonials />
            </AnimatedSection>
            <AnimatedSection direction="up">
                <Blog />
            </AnimatedSection>
            <AnimatedSection direction="left">
                <Contacts />
            </AnimatedSection>
            <Footer />
        </div>
    )
}

export default Main