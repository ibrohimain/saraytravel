import React from 'react'
import { travel } from '../data/travel'
import maslahat from '../assets/maslahat.png'

const Document = () => {
    return (
        <div className='w-[100%] h-[1100px] mx-auto document flex items-center justify-center'>
            <div className='w-[85%] h-[80%] bg-white shadow-2xl rounded-[30px] flex items-center justify-center'>
                <div className='w-[85%] h-[85%]  flex'>
                    <div className='w-[60%] h-[100%]'>
                        <div className='w-[100%] h-[20%] leading-10'>
                            <h2 className='text-[40px] text-[black] font-semibold'>Umra safari uchun</h2>
                            <span className='text-[40px] text-[#00805a] font-semibold'>kerakli hujjatlar</span>
                        </div>
                        <div className='w-[100%] h-[80%] grid grid-cols-2 gap-8'>
                            {travel.map((item, index) => (
                                <div key={index} className=' w-[100%] h-[270px]'>
                                    <div>
                                        <img src={item.img} alt="img" className='w-[140px] rounded-[30px]' />
                                    </div>
                                    <div>
                                        <h2 className='text-black text-[24px] mt-5'>{item.common_name}</h2>
                                        <p className='text-[#adadad] mt-6 w-[90%]'>{item.text_name}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className='w-[40%] h-[100%] flex items-center justify-end'>
                        <div className='w-[350px] h-[90%] '>
                            <div className='w-[100%] h-[70%]'>
                                <img src={maslahat} alt="img" className='w-[100%] h-[100%] shadow-2xl rounded-[30px]' />
                            </div>
                            <div className='w-[100%] h-[30%]'>
                                <button className='w-[100%] h-[60px] bg-[#008075] text-white text-[18px] font-medium rounded-[15px] mt-10'>Bepul Maslahat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Document
