import React from 'react'
import { BiUpArrow } from 'react-icons/bi'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { FaFacebook, FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { GiTopHat } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This will create a smooth scrolling effect
        });
    }


    return (
        <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] footer h-auto pb-4 pt-4'>
            <div className='2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[85%] sm:w-[85%] w-[85%] h-[100%] mx-auto flex flex-col items-end'>
                <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 justify-between w-[100%] h-auto pt-10 pb-10 '>
                    <ul className='2xl:block xl:block lg:block md:hidden sm:hidden hidden'>
                        <li className='text-[50px] text-[gold]'>LOGO</li>
                    </ul>
                    <ul>
                        <h2 className='text-[22px] font-semibold text-white'>Ссылки</h2>
                        <li className='2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] mt-4 hover:text-white cursor-pointer [transition:0.2s] '>Biz haqimizda</li>
                        <li className='2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] mt-4 hover:text-white cursor-pointer [transition:0.2s] '>Tariflar</li>
                        <li className='2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] mt-4 hover:text-white cursor-pointer [transition:0.2s] '>Hujjatlar</li>
                        <li className='2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] mt-4 hover:text-white cursor-pointer [transition:0.2s] '>Savollar</li>
                        <li className='2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] mt-4 hover:text-white cursor-pointer [transition:0.2s] '>Aloqa</li>
                    </ul>
                    <ul>
                        <li><h2 className='text-[22px] text-white font-semibold'>ALOQA</h2></li>
                        <li className='flex gap-2 items-center 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] hover:text-white cursor-pointer [transition:0.2s]  mt-4 '><FaPhoneAlt className='text-white' /> +998(91) 877-10-10</li>
                        <li className='flex gap-2 items-center 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] hover:text-white cursor-pointer [transition:0.2s]  mt-4 '><FaPhoneAlt className='text-white' /> +998(88) 814-10-10</li>
                        <li className='flex gap-2 items-center 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] hover:text-white cursor-pointer [transition:0.2s]  mt-4 '><MdEmail className='text-white' /> saraytravel</li>
                        <li className='flex gap-2 items-center 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] hover:text-white cursor-pointer [transition:0.2s]  mt-4 w-[200px] '><FaLocationDot className='text-white' />yakkasaroy tumani palonchi kocha</li>
                    </ul>
                    <div className='2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 mt-4 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]'>
                        <h2 className='text-white font-semibold text-[22px]'>Ijtimoiy tarmoqlar</h2>
                        <ul className='flex gap-3 mt-6'>
                            <li className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center rounded-[50%] bg-[#458fea]'><BsTelegram className='text-white' /></li>
                            <li className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center rounded-[50%] bg-[red]'><BsInstagram className='text-white' /></li>
                            <li className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center rounded-[50%] bg-[#3046b3]'><FaFacebook className='text-white' /></li>
                        </ul>
                        <ul className='grid grid-cols-3 gap-2 mt-8'>
                            <li className='w-[50px] h-[35px] rounded-[5px] bg-white flex items-center justify-center'><img className='object-cover w-[80%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png" alt="" /></li>
                            <li className='w-[50px] h-[35px] rounded-[5px] bg-white flex items-center justify-center'><img className='object-cover w-[80%]' src="https://w7.pngwing.com/pngs/962/794/png-transparent-mastercard-credit-card-mastercard-logo-mastercard-logo-love-text-heart-thumbnail.png" alt="" /></li>
                            <li className='w-[50px] h-[35px] rounded-[5px] bg-white flex items-center justify-center'><img className='object-cover w-[80%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORHy0ONrTWdaly5oh65rM8KcbLAiU9F5PpQ&s" alt="" /></li>
                            <li className='w-[50px] h-[35px] rounded-[5px] bg-white flex items-center justify-center'><img className='object-cover w-[80%]' src="https://api.logobank.uz/media/logos_png/Uzcard-01.png" alt="" /></li>
                            <li className='w-[50px] h-[35px] rounded-[5px] bg-white flex items-center justify-center'><img className='object-cover w-[80%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Paymeuz_logo.png/2560px-Paymeuz_logo.png" alt="" /></li>
                            <li className='w-[50px] h-[35px] rounded-[5px] bg-white flex items-center justify-center'><img className='object-cover w-[80%]' src="https://click.uz/click/images/click-white.jpg" alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className='w-[100%] h-[100px] border-t border-[rgb(99,99,99,0.4)] flex justify-between items-center'>
                    <p className='text-white 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px]'>© 2022-2023 ООО «IQRO TRAVEL»</p>
                    <ul className='flex gap-4 items-center'>
                        <li className='text-white font-semibol 2xl:block xl:block lg:block md:block sm:hidden hidden'>Yaratuvchi</li>
                        <li className='text-white font-semibol cursor-pointer'>IT park</li>
                        <li className='w-[35px] cursor-pointer h-[35px] bg-[gray] bg-opacity-25 rounded-[50%] flex items-center justify-center text-white' onClick={scrollToTop}><BiUpArrow /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
