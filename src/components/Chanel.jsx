import React from 'react'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Chanel = () => {
  return (
    <div className='w-[100%] chanel-bg pt-20'>
      <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] h-[650px] chanel flex items-center justify-center'>
        <div className='2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[85%] sm:w-[85%] w-[85%] h-[60%] 2xl:flex xl:flex lg:flex '>
          <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[50%] sm:h-[50%] h-[50%] border-red-500 flex flex-col items-center justify-center'>
            <p className='text-white text-center'>«Baqara» surasi, 196-oyat</p>
            <div className='w-[100px] h-0 border-[2px] border-[#00806b] mt-6 mb-4'></div>
            <h2 className='text-white 2xl:text-[40px] xl:text-[38px] lg:text-[38px] md:text-[34px] sm:text-[30px] text-[20px]  font-semibold text-center'>«Alloh uchun Haj va Umrani tugal ado eting»</h2>
          </div>
          <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[50%] sm:h-[50%] h-[40%] flex items-center justify-center'>
            <div className='2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[70%] w-[100%] h-[60%]'>
              <ul className='w-[100%] grid grid-cols-3 gap-4'>
                <Link to='https://t.me/AL_Saray_Travel'>
                  <li className='w-[100%] h-[100px] bg-[gray] bg-opacity-25 border-[3px] border-[#00806b] cursor-pointer hover:bg-[#00806b] [transition:0.3s] rounded-[5px] flex items-center justify-center'><BsTelegram className='text-white text-[30px]' /></li>
                </Link>
                <Link to='https://www.instagram.com/al_saray_travel/'>
                  <li className='w-[100%] h-[100px] bg-[gray] bg-opacity-25 border-[3px] border-[#00806b] cursor-pointer hover:bg-[#00806b] [transition:0.3s] rounded-[5px] flex items-center justify-center'><BsInstagram className='text-white text-[30px]' /></li>
                </Link>
                <li className='w-[100%] h-[100px] bg-[gray] bg-opacity-25 border-[3px] border-[#00806b] cursor-pointer hover:bg-[#00806b] [transition:0.3s] rounded-[5px] flex items-center justify-center'><FaFacebook className='text-white text-[30px]' /></li>
              </ul>
              <Link to='https://t.me/Muxtorov_Omonxuja'>
                <button className='w-[100%] h-[80px] bg-[#00806b] text-white 2xl:text-[20px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[16px] text-[16px] font-semibold mt-6 rounded-[8px]'>
                  Yangiliklardan habardor bo'ling
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chanel
