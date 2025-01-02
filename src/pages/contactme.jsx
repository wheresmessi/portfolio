import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export const ContactMe = () => {
    return (
        <footer className='py-8' id='contact'>
            <div className='max-w-[1200px] mx-auto px-4'>
                {/* Contact Heading and Email */}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between font-bold mb-10 text-white/50'>
                <div>
    <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-10 text-white/50'>
        Get in <span className='text-gray-400'>Touch</span>
    </h2>
    <div className="flex flex-col gap-6">
    <a
        className="text-xl sm:text-2xl md:text-4xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
        href="mailto:nandakumaran005@gmail.com"
    >
        nandakumaran005@gmail.com
    </a>
    <a
        className="text-xl sm:text-2xl md:text-4xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
        href="tel:+917395959112"
    >
        +91 73959 59112
    </a>
</div>

</div>

                    {/* Phone and Address 
                    <div className='text-white/50 mt-8 md:mt-0'>
                        <div className='mb-8'>
                            <p className='text-lg font-semibold mb-1'>Phone</p>
                            <a
                                href="tel:+917395959112"
                                className='text-lg md:text-xl font-semibold underline decoration-gray-400 decoration-2
                                underline-offset-4 hover:decoration-gray-200 transition duration-300'
                            >
                                +91 73959 59112
                            </a>
                        </div>
                        {/*<div className='text-lg mb-8'>
                            <p className='font-bold'>Address</p>
                            <p>31, Surya Narayanan Nagar 1st Cross,</p>
                            <p>Thiruverkadu</p>
                            <p>Chennai</p>
                        </div>
                    </div> */}
                </div>

                {/* Decorative Name in Background */}
                <div className='relative z-10 text-center mt-8 py-12'>
                    <h1 className='hidden sm:block text-[3rem] md:text-[5rem] lg:text-[6rem] font-bold text-white opacity-10'>
                        NANDAKUMARAN<br/>SATHYAN
                    </h1>
                </div>

                {/* Footer Links */}
                <div className='relative mt-12 container flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6'>
                    <p className='text-gray-200 text-center text-sm'>
                        © 2025 All Rights Reserved
                    </p>
                    <ul className='flex gap-6'>
                        <a
                            href="https://github.com/wheresmessi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-gray-200 hover:text-emerald-400 transition duration-300'
                        >
                            <AiFillGithub size={30} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nandakumaran-sathyan-500052241/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-gray-200 hover:text-emerald-400 transition duration-300'
                        >
                            <AiFillLinkedin size={30} />
                        </a>
                        <a
                            href="https://www.instagram.com/nandakumaransathyan/profilecard/?igsh=NTdsejAwbW9td29m"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-gray-200 hover:text-emerald-400 transition duration-300'
                        >
                            <AiFillInstagram size={30} />
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
