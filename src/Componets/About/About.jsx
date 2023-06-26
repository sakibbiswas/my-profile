import React from 'react';
import picture from '../../assets/pic2.jpg'
import resume from '../../assets/Sazzadur Rahman Resume.pdf'
import { Helmet } from 'react-helmet-async';
import { FaDownload } from 'react-icons/fa';
const About = () => {
    return (

        <div className=' bg-pink-100 p-8'>
            <Helmet>
                <title> Portfolio | About me</title>
            </Helmet>
            <div className="md:grid grid-cols-2 justify-center items-center ">
                <img className='w-[500px] h-[500px] rounded-full' src={picture} data-aos="zoom-in-down" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" />
                <div className='space-y-4'>
                    <h2 className='text-4xl font-bold text-slate-800  mb-10'>About Me</h2>
                    <h3 className='text-slate-800 text-xl '>Hello, I am a Full Stack Web Developer with a list of skills in HTML, CSS, Bootstrap, Tailwind,JavaScript,  ES6, React,  Firebase, Express Js, Node Js, MongoDB, JWT, Git, Netlify, Google Api, Problem Solving, etc.</h3>
                    <h3 className='text-slate-800  text-xl'>
                        I enjoy being challenged and engaging with projects that require me to work outside my comfort  and knowledge set, as continuing to learn new things and development techniques are important to me and the success of my work field.
                    </h3>
                    <h3 className='text-slate-800  text-xl'>
                        Thank you for the time to read this. I look forward to speaking with you if you have any opportunity for me. Feel free to ask me any questions. I am always here to respond. Thank you!
                    </h3>
                    <a href={resume} download=' resume'>

                        <button className='btn btn-neutral mt-4 mb-20'> <FaDownload></FaDownload> Download Resume</button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default About;