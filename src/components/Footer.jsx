import React from 'react'
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
        <div className='w-[100%] footer h-[450px]'>
            <div className='w-[85%] h-[100%] mx-auto flex flex-col items-end'>
                <div className='flex justify-between w-[100%] h-[350px] pt-10 '>
                    <ul>
                        <li className='text-[50px] text-[gold]'>LOGO</li>
                    </ul>
                    <ul>
                        <h2 className='text-[22px] font-semibold text-white'>Ссылки</h2>
                        <li className='text-[16px] mt-4 hover:text-white cursor-pointer [transition:0.2s] '>Biz haqimizda</li>
                        <li className='text-[16px] mt-4 hover:text-white cursor-pointer [transition:0.2s] '>Tariflar</li>
                        <li className='text-[16px] mt-4 hover:text-white cursor-pointer [transition:0.2s] '>Hujjatlar</li>
                        <li className='text-[16px] mt-4 hover:text-white cursor-pointer [transition:0.2s] '>Savollar</li>
                        <li className='text-[16px] mt-4 hover:text-white cursor-pointer [transition:0.2s] '>Aloqa</li>
                    </ul>
                    <ul>
                        <li><h2 className='text-[22px] text-white font-semibold'>ALOQA</h2></li>
                        <li className='flex gap-2 items-center text-[16px]  hover:text-white cursor-pointer [transition:0.2s]  mt-4 '><FaPhoneAlt className='text-white' /> +998(91) 877-10-10</li>
                        <li className='flex gap-2 items-center text-[16px]  hover:text-white cursor-pointer [transition:0.2s]  mt-4 '><FaPhoneAlt className='text-white' /> +998(88) 814-10-10</li>
                        <li className='flex gap-2 items-center text-[16px]  hover:text-white cursor-pointer [transition:0.2s]  mt-4 '><MdEmail className='text-white' /> saraytravel</li>
                        <li className='flex gap-2 items-center text-[16px]  hover:text-white cursor-pointer [transition:0.2s]  mt-4 w-[200px] '><FaLocationDot className='text-white' />yakkasaroy tumani palonchi kocha</li>
                    </ul>
                    <div>
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
                    <p className='text-white'>© 2022-2023 ООО «IQRO TRAVEL»</p>
                    <ul className='flex gap-4 items-center'>
                        <li className='text-white font-semibol'>Yaratuvchi</li>
                        <li className='text-white font-semibol cursor-pointer'>IT park</li>
                        <li className='w-[35px] cursor-pointer h-[35px] bg-[gray] bg-opacity-25 rounded-[50%] flex items-center justify-center text-white' onClick={scrollToTop}><GiTopHat /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
