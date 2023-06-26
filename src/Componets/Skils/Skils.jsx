import React from 'react';
import logo1 from '../../assets/js.a9df4a5d9aea74880c9f.png'
import logo2 from '../../assets/firebase.500e6fabd0115e7fba87.png'
import logo3 from '../../assets/tailwind.b0accb5db70ddc723318.png'
import logo4 from '../../assets/Bootstrap.7d7074503a72c9f0e4e5.png'
import logo5 from '../../assets/css3.18e16ce310e25a5e1334.png'
import logo6 from '../../assets/express.786d8f42f67a4f094925.png'
import logo7 from '../../assets/download.png'
import logo8 from '../../assets/html5.ac0a1f6d141827e6fd06.png'
import logo9 from '../../assets/mongodb.b734ca899c237b3e83c9.png'
import logo10 from '../../assets/Vscode.645fb69aa5ad0e365e92.png'
import logo11 from '../../assets/ReactQuery.b05d2ddcbd80cf625361.png'
const Skils = () => {
    return (
        <div className='bg-gray-700 px-8 py-5'
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <h2 className='text-center mb-5 text-4xl font-bold text-white'>Skils</h2>
            <h2 className='text-xl  text-white text-center'>HTML, CSS, Bootstrap, Tailwind, JavaScript, ES6, React, React Router, Firebase, Express Js, Node, MongoDB, JWT,  Git, Netlify</h2>
            <div className='md:flex justify-center items-center gap-10 mb-10 mt-8 '>
                <img className='w-[90px] h-[50px]' src={logo1} alt="" />
                <img className='w-[90px] h-[50px]' src={logo2} alt="" />
                <img className='w-[90px] h-[50px]' src={logo3} alt="" />
                <img className='w-[90px] h-[50px]' src={logo4} alt="" />
                <img className='w-[90px] h-[50px]' src={logo5} alt="" />
                <img className='w-[90px] h-[50px]' src={logo6} alt="" />
                <img className='w-[90px] h-[50px]' src={logo7} alt="" />
                <img className='w-[90px] h-[50px]' src={logo8} alt="" />
                <img className='w-[90px] h-[50px]' src={logo9} alt="" />
                <img className='w-[90px] h-[50px]' src={logo10} alt="" />
                <img className='w-[90px] h-[50px]' src={logo11} alt="" />


            </div>
        </div>
    );
};

export default Skils;