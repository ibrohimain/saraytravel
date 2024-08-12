import React, { useEffect, useState } from 'react';
import { BiPhone } from 'react-icons/bi';
import { BsInstagram, BsTelegram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

        const handleResize = () => {
            // Check if the window width is greater than 640px (the `sm` breakpoint in Tailwind CSS)
            if (window.innerWidth >= 640 && menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [menuOpen]);

    // Toggle menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div
            className={`2xl:w-[1510px] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] h-[90px] mx-auto fixed header z-50 ${scrolled ? 'scrolled' : ''}`}
            style={{ backgroundColor: 'var(--header-bg-color)' }}
        >
            <div className='2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[85%] sm:w-[85%] w-[85%] mx-auto h-[100%]'>
                <div className='w-[100%] h-[100%] flex justify-between items-center'>
                    <div>
                        <div className='2xl:hidden xl:hidden lg:hidden md:hidden sm:block block'>
                            <GiHamburgerMenu className='text-[28px]' onClick={toggleMenu} />
                        </div>
                        <ul className='2xl:flex xl:flex lg:flex md:flex sm:hidden hidden items-center 2xl:gap-8 xl:gap-7 lg:gap-6 md:gap-5 sm:gap-4 gap-3 font-medium text-[#c0bfbf] list'>
                            <li className='2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px]'>
                                <ScrollLink
                                    to='aboutUs'
                                    smooth={true}
                                    duration={500}
                                    className='flex items-center gap-1 cursor-pointer'
                                >
                                    Biz haqimizda
                                </ScrollLink>
                            </li>
                            <li className='2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px]'>
                                <ScrollLink
                                    to='offer'
                                    smooth={true}
                                    duration={500}
                                    className='flex items-center gap-1 cursor-pointer'
                                >
                                    Tariflar
                                </ScrollLink>
                            </li>
                            <li className='2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px]'>
                                <ScrollLink
                                    to='document'
                                    smooth={true}
                                    duration={500}
                                    className='flex items-center gap-1 cursor-pointer'
                                >
                                    Hujjatlar
                                </ScrollLink>
                            </li>
                            <li className='2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px]'>
                                <ScrollLink
                                    to='quesion'
                                    smooth={true}
                                    duration={500}
                                    className='flex items-center gap-1 cursor-pointer'
                                >
                                    Savollar
                                </ScrollLink>
                            </li>
                            <li className='2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px]'>
                                <ScrollLink
                                    to='footer'
                                    smooth={true}
                                    duration={500}
                                    className='flex items-center gap-1 cursor-pointer'
                                >
                                    Aloqa
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>
                    <div className='2zl:flex xl:flex lg:hidden md:hidden sm:hidden hidden items-center justify-center text-[40px] font-semibold'>
                        Saray travel
                    </div>
                    <div className='flex items-center gap-8'>
                        <button className='2xl:flex xl:flex lg:flex md:flex sm:hidden hidden items-center px-5 py-2 rounded-[20px] border border-[var(--button-border-color)] border-opacity-20 transition duration-500 text-[var(--button-text-color)] hover:border-[var(--button-border-color)] hover:text-[var(--button-text-color)] bg-opacity-20 bg-gray-500'>
                            <BiPhone />
                            +998(88)025-68-69
                        </button>
                        <ul className='flex items-center gap-2 text-white text-[20px]'>
                            <li className='cursor-pointer py-3 px-3 rounded-full bg-[#458fea]'>
                                <BsTelegram />
                            </li>
                            <li className='cursor-pointer py-3 px-3 rounded-full bg-red-600'>
                                <BsInstagram />
                            </li>
                            <li className='cursor-pointer py-3 px-3 rounded-full bg-[#3046b3]'>
                                <FaFacebook />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className='fixed top-[90px] left-0 w-[350px] h-[450px] bg-white z-40 shadow-lg'>
                    <ul className='flex flex-col items-start p-4'>
                        <li className='py-2'>
                            <ScrollLink to='aboutUs' smooth={true} duration={500} className='cursor-pointer'>
                                Biz haqimizda
                            </ScrollLink>
                        </li>
                        <li className='py-2'>
                            <ScrollLink to='offer' smooth={true} duration={500} className='cursor-pointer'>
                                Tariflar
                            </ScrollLink>
                        </li>
                        <li className='py-2'>
                            <ScrollLink to='document' smooth={true} duration={500} className='cursor-pointer'>
                                Hujjatlar
                            </ScrollLink>
                        </li>
                        <li className='py-2'>
                            <ScrollLink to='quesion' smooth={true} duration={500} className='cursor-pointer'>
                                Savollar
                            </ScrollLink>
                        </li>
                        <li className='py-2'>
                            <ScrollLink to='footer' smooth={true} duration={500} className='cursor-pointer'>
                                Aloqa
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
