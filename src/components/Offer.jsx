import React from 'react'
import { offer } from '../data/offer'
import { Link as ScrollLink } from 'react-scroll'

const Offer = () => {
    return (
        <div className='w-[100%] h-[1000px] offer'>
            <div className='w-[85%] mx-auto pt-20'>
                <div className='w-[100%] flex flex-col justify-center items-center'>
                    <h2 className='text-black font-semibold text-[30px]'>Maxsus takliflar va yo’nalishlar</h2>
                    <p className='text-black text-[20px] mt-4'>Umra va Haj safari tariflar</p>
                </div>
                <div className='w-[100%] grid grid-cols-3 gap-8 mt-10'>
                    {offer.map((item, index) => (
                        <div key={index} className='[transition:0.4s] custom-shadow custom-shadow-hover w-[100%] h-[650px] bg-white rounded-[30px] cursor-pointer transform transition-transform duration-300 hover:translate-y-[-8px] hover:shadow-lg'>
                            <div className='w-[100%] h-[50%] flex items-center justify-center'>
                                <img src={item.img} alt="" className='w-[90%] h-[85%] rounded-[5px]' />
                            </div>
                            <div className='w-[100%] h-[50%]'>
                                <div className='w-[90%] mx-auto flex flex-col items-center justify-center'>
                                    <h2 className='text-black'>{item.name}</h2>
                                    <div className='w-[50px] h-0 border-[1px] border-[gold] mt-4 mb-4'></div>
                                    <p className='text-[#008051]'>{item.data}</p>
                                    <div className='w-[100%] h-0 border-[1px] border-[black] mt-6 mb-6'></div>
                                    <h2 className='text-black mb-4'>{item.price}</h2>
                                    <h2 className='text-black font-bold text-[30px]'>{item.relly_price} <span className='text-[18px] font-normal'>USD</span></h2>
                                    <button className='px-8 py-2 rounded-[6px] bg-[#008066] text-white mt-6'>
                                        <ScrollLink to='register' smooth={true} duration={500} className='flex items-center gap-1 cursor-pointer'>
                                            Buyurtma berish
                                        </ScrollLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}

export default Offer
