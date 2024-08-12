import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const HomeText = () => {
    return (
        <div className='w-[100%] hometext'>
            <div className='w-[85%] mx-auto pt-[100px] flex items-center justify-center'>
                <div className='w-[70%] h-[700px] border-white flex flex-col items-center justify-center'>
                    <p className='text-white'>Rasululloh ﷺ (sollallohu alayhi va sallam) hayotlari davomida to'rtta Umra va bitta Haj qilganlar.</p>
                    <h2 className='text-[70px] font-semibold text-center text-white'>Allohning mehmoni bo'ling <br /> UMRA 2023 - 2024</h2>
                    <button className='px-10 py-4 rounded-[10px] text0white bg-[gray] bg-opacity-40'>
                        <ScrollLink to='offer' smooth={true} duration={500} className='flex items-center gap-1 cursor-pointer'>
                            Ariza berish
                        </ScrollLink>
                    </button>
                    <p className='mt-4 underline cursor-pointer'>Malahat olish</p>
                </div>
            </div>
        </div>
    )
}

export default HomeText
