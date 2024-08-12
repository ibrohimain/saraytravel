import React from 'react'
import { partner } from '../data/partner'

const Partner = () => {
    return (
        <div className='w-[100%] h-auto partner bg-[#00806f]'>
            <div className='w-[85%] mx-auto pb-10'>
                <div className='w-[100%] flex justify-center'>
                    <h2 className='text-[40px] text-white font-semibold pt-10 pb-10'>Hamkorlarimiz</h2>
                </div>
                <div className='grid grid-cols-4 gap-6'>
                    {partner.map((item, index) => (
                        <div key={index} className='[transition:0.4s] border-[4px] border-[gray] border-opacity-20 shadow-hover w-full h-[180px]  rounded-[30px] flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:translate-y-[-8px] hover:shadow-lg'>
                            <div className='w-[80%] h-[90%] flex items-center justify-center'>
                                <p className=' text-white'>{item.img}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partner
