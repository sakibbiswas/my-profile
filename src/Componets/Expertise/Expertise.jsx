import React from 'react';
import { Helmet } from 'react-helmet-async';
import logo1 from '../../assets/a1.png'
import logo2 from '../../assets/a2.png'
import logo3 from '../../assets/a3.png'
import { motion } from "framer-motion"
const Expertise = () => {
    return (
        <div className='bg-pink-100 pt-5'>
            <Helmet>
                <title> Portfolio | Expertise</title>
            </Helmet>
            <div className="">
                <h2 className='mb-3  text-center text-4xl font-bold text-slate-800'>Expertise Area</h2>
                <p className='text-xl text-center mb-8 text-slate-800'>Some of my expertise area in bellow.</p>
            </div>
            <div className="md:flex justify-center items-center gap-10 ">

                <motion.div className="card w-96 bg-base-100 shadow-xl h-[360px]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <figure className="px-10 pt-10">
                        <img src={logo1} className="rounded-xl w-[150px] h-[150px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Web Development</h2>
                        <p className='text-xl text-slate-800'>I am a full stack web developer with (MERN) with lot of tech skills. I can make any website you want. Love to do coding and building new things.</p>

                    </div>
                </motion.div>
                <motion.div className="card w-96 bg-base-100 shadow-xl h-[360px]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <figure className="px-10 pt-10">
                        <img src={logo2} className="rounded-xl w-[150px] h-[150px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">UI/UX Design</h2>
                        <p className='text-xl text-slate-800'>Before starting, I have worked with ui/ux. If you have any idea you can share with me so we can get started with your project with ui/ux</p>

                    </div>
                </motion.div>
                <motion.div className="card w-96 bg-base-100 shadow-xl h-[360px]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <figure className="px-10 pt-10">
                        <img src={logo3} className="rounded-xl w-[150px] h-[140px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">React</h2>
                        <p className='text-xl text-slate-800'> React is most popular library in javascript now. I am expert at react to do any type of website by using react</p>

                    </div>
                </motion.div>
            </div>

        </div>
    );
};

export default Expertise;