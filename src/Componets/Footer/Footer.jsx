import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-slate-800 text-white">
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
            </footer>
            <footer className="footer footer-center p-4 bg-gray-900 text-white">
                <div>
                    <p>Copyright © 2023 - All right reserved by Sazzadur Rahman Sakib</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
