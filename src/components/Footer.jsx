import React from 'react'
import { BiUpArrow } from 'react-icons/bi'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { FaFacebook, FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'
import logo from '../assets/al_sarays-removebg-preview.png'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div className='w-full footer h-auto pb-4 pt-4'>
            <div className='w-11/12 mx-auto flex flex-col items-end'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between w-full h-auto pt-10 pb-10'>
                    <ul className='hidden md:block'>
                        <img src={logo} alt="Logo" className='w-52' />
                    </ul>
                    <ul className='mt-4 md:mt-0 flex flex-col'>
                        <h2 className='text-2xl font-semibold text-white'>Ссылки</h2>
                        <ScrollLink to='aboutUs' smooth={true} duration={500} className='mt-4 text-lg text-gray-300 hover:text-white cursor-pointer transition duration-200'>
                            Biz haqimizda
                        </ScrollLink>
                        <ScrollLink to='offer' smooth={true} duration={500} className='mt-4 text-lg text-gray-300 hover:text-white cursor-pointer transition duration-200'>
                            Tariflar
                        </ScrollLink>
                        <ScrollLink to='document' smooth={true} duration={500} className='mt-4 text-lg text-gray-300 hover:text-white cursor-pointer transition duration-200'>
                            Hujjatlar
                        </ScrollLink>
                        <ScrollLink to='quesion' smooth={true} duration={500} className='mt-4 text-lg text-gray-300 hover:text-white cursor-pointer transition duration-200'>
                            Savollar
                        </ScrollLink>
                        <ScrollLink to='footer' smooth={true} duration={500} className='mt-4 text-lg text-gray-300 hover:text-white cursor-pointer transition duration-200'>
                            Aloqa
                        </ScrollLink>
                    </ul>

                    <ul className='mt-8 md:mt-0'>
                        <h2 className='text-2xl font-semibold text-white'>ALOQA</h2>
                        <a href="tel:+998978000571" className='flex gap-2 items-center mt-4 text-lg text-gray-300 hover:text-white cursor-pointer transition duration-200'>
                            <FaPhoneAlt className='text-white' /> +998(97) 800-05-71
                        </a>
                        <a href="tel:+998985615545" className='flex gap-2 items-center mt-4 text-lg text-gray-300 hover:text-white cursor-pointer transition duration-200'>
                            <FaPhoneAlt className='text-white' /> +998(98) 561-55-45
                        </a>
                        <a href="mailto:umraziyorat777@gmail.com" className='flex gap-2 items-center mt-4 text-lg text-gray-300 hover:text-white cursor-pointer transition duration-200'>
                            <MdEmail className='text-white' /> saraytravel
                        </a>
                        <a href="" className='flex gap-2 items-center mt-4 text-lg text-gray-300 hover:text-white cursor-pointer transition duration-200 w-[100%]'>
                            <FaLocationDot className='text-white' /> Jizzax viloyati Sharof Rashidov ko'chasi, Toshkentlik
                        </a>
                    </ul>

                    <div className='mt-8 w-full'>
                        <h2 className='text-2xl font-semibold text-white'>Ijtimoiy tarmoqlar</h2>
                        <ul className='flex gap-3 mt-6'>
                            <a href='https://t.me/AL_Saray_Travel' target='_blank' rel='noopener noreferrer' className='text-white cursor-pointer py-3 px-3 rounded-full bg-[#458fea]'>
                                <BsTelegram />
                            </a>
                            <a href='https://www.instagram.com/al_saray_travel/' target='_blank' rel='noopener noreferrer' className='text-white cursor-pointer py-3 px-3 rounded-full bg-red-600'>
                                <BsInstagram />
                            </a>
                            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='text-white cursor-pointer py-3 px-3 rounded-full bg-[#3046b3]'>
                                <FaFacebook />
                            </a>
                        </ul>
                        <ul className='grid grid-cols-3 gap-2 mt-8 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[40%] w-[55%]'>
                            <li className='w-12 h-9 rounded bg-white flex items-center justify-center'>
                                <img className='object-cover w-4/5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png" alt="Visa Logo" />
                            </li>
                            <li className='w-12 h-9 rounded bg-white flex items-center justify-center'>
                                <img className='object-cover w-4/5' src="https://w7.pngwing.com/pngs/962/794/png-transparent-mastercard-credit-card-mastercard-logo-mastercard-logo-love-text-heart-thumbnail.png" alt="MasterCard Logo" />
                            </li>
                            <li className='w-12 h-9 rounded bg-white flex items-center justify-center'>
                                <img className='object-cover w-4/5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORHy0ONrTWdaly5oh65rM8KcbLAiU9F5PpQ&s" alt="American Express Logo" />
                            </li>
                            <li className='w-12 h-9 rounded bg-white flex items-center justify-center'>
                                <img className='object-cover w-4/5' src="https://api.logobank.uz/media/logos_png/Uzcard-01.png" alt="Uzcard Logo" />
                            </li>
                            <li className='w-12 h-9 rounded bg-white flex items-center justify-center'>
                                <img className='object-cover w-4/5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Paymeuz_logo.png/2560px-Paymeuz_logo.png" alt="Payme Logo" />
                            </li>
                            <li className='w-12 h-9 rounded bg-white flex items-center justify-center'>
                                <img className='object-cover w-4/5' src="https://click.uz/click/images/click-white.jpg" alt="Click Logo" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full h-24 border-t border-gray-600 flex justify-between items-center'>
                    <p className='text-white text-sm'>© 2022-2023 ООО «AL SARAY»</p>
                    <ul className='flex gap-4 items-center'>
                        <li className='text-white font-semibold hidden md:block'>Yaratuvchi</li>
                        <li className='text-white font-semibold hidden md:block'>IT park</li>
                        <li className='w-9 h-9 bg-gray-300 bg-opacity-25 rounded-full flex items-center justify-center text-white cursor-pointer' onClick={scrollToTop}>
                            <BiUpArrow />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
