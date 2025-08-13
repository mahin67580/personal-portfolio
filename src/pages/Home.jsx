import React, { useEffect } from 'react';
import Hero from '../component/Hero';
import Footer from '../component/Footer';
import Servicestwo from '../component/homecomponent/Servicestwo';
import AboutMetwo from '../component/AboutMetwo';
import Projectstwo from '../component/Projectstwo';
import Skillstwo from '../component/Skillstwo';
import SpecialSkillstwo from '../component/SpecialSkillstwo';
import Contacttwo from '../component/Contacttwo';
import Education from '../component/Education';
import Chatbot from '../Chatbot';
import PortfolioChatbot from '../PortfolioChatbot';
 


const Home = () => {
     useEffect(() => {
                        document.title = 'Home';
                        window.scrollTo(0, 0);
                    }, []);
    return (
        <div>
            <Hero></Hero>
            <PortfolioChatbot></PortfolioChatbot>
            <AboutMetwo></AboutMetwo>
            <Skillstwo></Skillstwo>
            <Education></Education>
            <Projectstwo></Projectstwo>
            <SpecialSkillstwo></SpecialSkillstwo>
            <Servicestwo></Servicestwo>
            <Contacttwo></Contacttwo>
            <Footer></Footer>
        </div>
    );
};

export default Home;