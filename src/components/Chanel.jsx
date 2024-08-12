import React from 'react'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Chanel = () => {
  return (
    <div className='w-[100%] chanel-bg pt-20'>
      <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[600px] xl:h-[600px] lg:h-[600px] md:h-[650px] sm:h-[650px] h-[650px] chanel'>
        <div className='w-[85%] h-[100%] mx-auto 2xl:flex xl:flex lg:flex md:flex md:flex-col md:justify-center sm:block flex justify-between items-center'>
          <div className='border border-red-500 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[60%] xl:h-[60%] lg:h-[60%] md:h-[20%] sm:h-[50%] h-[45%]  flex flex-col justify-center items-center '>
            <p className='2xl:text-[20px] xl:text-[19px] md:text-[18px] sm:text-[18px] text-[17px] text-white mt-10'>«Baqara» surasi, 196-oyat</p>
            <div className='w-[50px] h-0 border-[2px] border-[#008073] mt-6 mb-4'></div>
            <h2 className='2xl:text-[48px] xl:text-[44px] lg:text-[42px] md:text-[40px] sm:text-[38px] text-[36px] text-white text-center'>«Alloh uchun haj va umrani tugal ado eting»</h2>
          </div>
          <div className='border border-red-500 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[60%] xl:h-[60%] lg:h-[60%] md:h-[50%] sm:h-[50%] h-[45%]  flex flex-col items-center justify-center'>
            <ul className='text-white 2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] w-[85%] grid grid-cols-3 gap-3 justify-between'>
              <li className='w-[100%] h-[100px] flex items-center justify-center  border-[3px] border-[#00806b] rounded-[10px] hover:bg-[#00806b] [transition:0.5s]'><BsTelegram className='text-[26px]' /></li>
              <li className='w-[100%] h-[100px] flex items-center justify-center  border-[3px] border-[#00806b] rounded-[10px] hover:bg-[#00806b] [transition:0.5s]'><BsInstagram className='text-[26px]' /></li>
              <li className='w-[100%] h-[100px] flex items-center justify-center  border-[3px] border-[#00806b] rounded-[10px] hover:bg-[#00806b] [transition:0.5s]'><FaFacebook className='text-[26px]' /></li>
            </ul>
            <button className='2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[380px] sm:w-[350px] w-[85%] h-[80px] bg-[#00806b] rounded-[10px] mt-8 text-white font-semibold 2xl:text-[20px] xl:text-[19px] md:text-[18px] sm:text-[18px] text-[17px]'>
              Yangiliklardan habardor bo'ling
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chanel
