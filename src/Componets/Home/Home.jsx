import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skils from '../Skils/Skils';
import Expertise from '../Expertise/Expertise';
import Testimonial from '../Testimonial/Testimonial';
import Hire from '../Hire/Hire';
import Conatct from '../Conatct/Conatct';
import Project from '../Project/Project';

const Home = () => {

    return (
        <div>

            <Banner></Banner>
            <About></About>
            <Skils></Skils>
            <Expertise></Expertise>
            <Project></Project>
            <Testimonial></Testimonial>
            <Hire></Hire>
            <Conatct></Conatct>
        </div>
    );
};

export default Home;