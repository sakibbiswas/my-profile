import React from 'react';
import { Helmet } from 'react-helmet-async';
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
            <Helmet>
                <title> Portfolio | Home</title>
            </Helmet>
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