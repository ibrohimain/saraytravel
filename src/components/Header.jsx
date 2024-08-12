import React, { useEffect, useState } from 'react';
import { BiPhone } from 'react-icons/bi';
import { BsInstagram, BsTelegram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';  // Correct import for ScrollLink

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
                document.documentElement.style.setProperty('--header-bg-color', 'rgba(5, 5, 5, 0.7)');
                document.documentElement.style.setProperty('--button-border-color', 'gold');
                document.documentElement.style.setProperty('--button-text-color', 'gold');
            } else {
                setScrolled(false);
                document.documentElement.style.setProperty('--header-bg-color', 'rgba(5, 5, 5, 0.3)');
                document.documentElement.style.setProperty('--button-border-color', 'gray');
                document.documentElement.style.setProperty('--button-text-color', 'white');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-[1510px] h-[100px] mx-auto fixed header z-50 ${scrolled ? 'scrolled' : ''}`} style={{ backgroundColor: 'var(--header-bg-color)' }}>
            <div className='w-[85%] mx-auto h-auto'>
                <div className='w-[100%] h-[80px] flex justify-between items-center'>
                    <div>
                        <ul className='flex items-center gap-8 font-medium text-[#c0bfbf] list'>
                            <li>
                                <ScrollLink to='aboutUs' smooth={true} duration={500} className='flex items-center gap-1 cursor-pointer'>
                                    Biz haqimizda
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to='offer' smooth={true} duration={500} className='flex items-center gap-1 cursor-pointer'>
                                    Tariflar
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to='document' smooth={true} duration={500} className='flex items-center gap-1 cursor-pointer'>
                                    Hujjatlar
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to='quesion' smooth={true} duration={500} className='flex items-center gap-1 cursor-pointer'>
                                    Savollar
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to='footer' smooth={true} duration={500} className='flex items-center gap-1 cursor-pointer'>
                                    Aloqa
                                </ScrollLink>
                            </li>

                        </ul>
                    </div>
                    <div className='flex items-center justify-center text-[40px] font-semibold'>Saray travel</div>
                    <div className='flex items-center gap-8'>
                        <button className='flex items-center px-5 py-2 rounded-[20px] border border-[var(--button-border-color)] border-opacity-20 transition duration-500 text-[var(--button-text-color)] hover:border-[var(--button-border-color)] hover:text-[var(--button-text-color)] bg-opacity-20 bg-gray-500'>
                            <BiPhone />
                            +998(88)025-68-69
                        </button>
                        <ul className='flex items-center gap-2 text-white text-[20px]'>
                            <li className='cursor-pointer py-3 px-3 rounded-full bg-[#458fea]'><BsTelegram /></li>
                            <li className='cursor-pointer py-3 px-3 rounded-full bg-red-600'><BsInstagram /></li>
                            <li className='cursor-pointer py-3 px-3 rounded-full bg-[#3046b3]'><FaFacebook /></li>
                        </ul>
                        <div className='flex items-center px-5 py-2 rounded-[20px] border border-[var(--button-border-color)] border-opacity-20 transition duration-500 text-[var(--button-text-color)] hover:border-[var(--button-border-color)] hover:text-[var(--button-text-color)] bg-opacity-20 bg-gray-500'>UZ</div>
                    </div>
                </div>
                <div className='w-full h-[20px]'></div>
            </div>
        </div>
    );
};

export default Header;
