import React from 'react'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Chanel = () => {
  return (
    <div className='w-[100%] chanel-bg pt-20'>
      <div className='w-[100%] h-[600px] chanel'>
        <div className='w-[85%] h-[100%] mx-auto flex justify-between items-center'>
          <div className='w-[50%] h-[100%] flex flex-col justify-center items-center '>
            <p className='text-[20px] text-white'>«Baqara» surasi, 196-oyat</p>
            <div className='w-[50px] h-0 border-[2px] border-[#008073] mt-6 mb-4'></div>
            <h2 className='text-[48px] text-white text-center'>«Alloh uchun haj va umrani tugal ado eting»</h2>
          </div>
          <div className='w-[50%] h-[100%] flex flex-col items-center justify-center'>
            <ul className='text-white w-[400px] flex justify-between'>
              <li className='w-[100px] h-[100px] flex items-center justify-center  border-[3px] border-[#00806b] rounded-[10px] hover:bg-[#00806b] [transition:0.5s]'><BsTelegram className='text-[26px]' /></li>
              <li className='w-[100px] h-[100px] flex items-center justify-center  border-[3px] border-[#00806b] rounded-[10px] hover:bg-[#00806b] [transition:0.5s]'><BsInstagram className='text-[26px]' /></li>
              <li className='w-[100px] h-[100px] flex items-center justify-center  border-[3px] border-[#00806b] rounded-[10px] hover:bg-[#00806b] [transition:0.5s]'><FaFacebook className='text-[26px]' /></li>
            </ul>
            <button className='w-[400px] h-[80px] bg-[#00806b] rounded-[10px] mt-8 text-white font-semibold text-[20px]'>
              Yangiliklardan habardor bo'ling
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chanel
