import React from 'react';
import pic from '../../assets/pic (1).jpg'
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import resume from '../../assets/Sazzadur Rahman Resume.pdf'
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {
    return (
        <div className='bg-pink-100 '>

            <div className="md:flex justify-center items-center gap-10 p-10">
                <div className='space-y-3 mt-20'>

                    <h2 className='text-xl'> <span className='text-red-600 '>----</span> Hello</h2>
                    <TypeAnimation
                        sequence={[
                            'I ',
                            1000,
                            'I am',
                            500,
                            'Sazzadur',
                            500,
                            'Sazzadur Rahman',
                            1000,
                            'Sazzadur Rahman Sakib',
                            1000,
                            'Sazzadur Rahman',
                            500,
                            'Sazzadur',
                            500,
                            '',
                            500,
                        ]}
                        speed={40}
                        style={{ fontSize: '3em', fontFamily: 'bold' }}
                        repeat={Infinity}
                    >
                        <h1 className='text-4xl font-bold'>I am Sazzadur<span className='text-red-500 '> Rahman</span>  Sakib</h1>

                    </TypeAnimation>
                    <h2 className='text-gray-800 text-xl'>
                        This is Sazzadur Rahman Sakib a <span className='font-bold'>Full Stack Developer ( MERN )</span> and <span className='font-bold'>UI/UX Designer</span> located in Bangladesh. Looking for working around the world.
                    </h2>
                    <a href={resume} download=' resume'>

                        <button className='btn btn-neutral mt-4 mb-20'>
                            <FaDownload></FaDownload>  Download Resume</button>
                    </a>

                    <div className='md:flex justify-start items-center gap-8'>
                        <a href="https://github.com/sakibbiswas">
                            <FaGithub className='w-10 h-8 '>
                            </FaGithub>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100089945906008">
                            <FaFacebook className='w-10 h-8 '></FaFacebook>
                        </a>
                        <a href="https://www.linkedin.com/in/sazzadur-rahman-sakib-3ab995280/">
                            <FaLinkedin className='w-10 h-8 ' ></FaLinkedin>
                        </a>

                    </div>
                </div>

                <img className=" w-[500px] h-[500px]  rounded-full" src={pic} data-aos="fade-up"
                    data-aos-duration="3000" />


            </div>
        </div >
    );
};

export default Banner;