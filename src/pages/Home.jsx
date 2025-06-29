import React, { useEffect } from 'react';
import Hero from '../component/Hero';
import Projects from '../component/Projects';
import Skills from '../component/Skills';
import SpecialSkills from '../component/SpecialSkills';
import Contact from '../component/Contact';
import Footer from '../component/Footer';
import Servicestwo from '../component/homecomponent/Servicestwo';
import AboutMetwo from '../component/AboutMetwo';
import Projectstwo from '../component/Projectstwo';
import Skillstwo from '../component/Skillstwo';
import SpecialSkillstwo from '../component/SpecialSkillstwo';
import Contacttwo from '../component/Contacttwo';


const Home = () => {
     useEffect(() => {
                        document.title = 'Home';
                        window.scrollTo(0, 0);
                    }, []);
    return (
        <div>
            <Hero></Hero>
            <Projectstwo></Projectstwo>
            <Skillstwo></Skillstwo>
            <SpecialSkillstwo></SpecialSkillstwo>
            <Servicestwo></Servicestwo>
            <AboutMetwo></AboutMetwo>
            <Contacttwo></Contacttwo>
            <Footer></Footer>
        </div>
    );
};

export default Home;