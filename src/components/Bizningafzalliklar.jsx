import React from 'react'
import { title } from '../data/Title'

const Bizningafzalliklar = () => {
    return (
        <div className='w-[85%] mx-auto mt-20'>
            <div className='w-[100%] flex justify-center mb-10'>
                <h2 className='text-[30px] text-black font-semibold'>Bizning <span>Afzalliklarimiz</span></h2>
            </div>
            <div className='grid grid-cols-3 gap-8'>
                {title.map((item, index) => (
                    <div key={index} className='[transition:0.4s] custom-shadow custom-shadow-hover w-full h-[180px] bg-white rounded-[30px] flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:translate-y-[-8px] hover:shadow-lg'>
                        <div className='w-[70%] p-4 flex items-center justify-center '>
                            <div className='w-[90%] h-[85%] flex items-start  flex-col justify-between'>
                                <h2 className='font-semibold'>{item.number}</h2>
                                <p className='text-black'>{item.name}</p>
                            </div>
                        </div>
                        <div className='w-[30%] flex items-center justify-center'>
                            <img className='w-[85%] h-[85%] object-cover rounded-[20px]' src={item.img} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bizningafzalliklar
