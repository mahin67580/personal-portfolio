import React from 'react';
import Hero from '../component/Hero';
import Projects from '../component/Projects';
import Skills from '../component/Skills';
import SpecialSkills from '../component/SpecialSkills';
import Services from '../component/Services';
import AboutMe from '../component/AboutMe';
import Contact from '../component/Contact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Projects></Projects>
            <Skills></Skills>
            <SpecialSkills></SpecialSkills>
            <Services></Services>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    );
};

export default Home;