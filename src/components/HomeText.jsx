import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const HomeText = () => {
    return (
        <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] h-[100%] border border-red-500 hometext'>
            <div className='2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[85%] sm:w-[100%] w-[100%] mx-auto pt-[100px] flex items-center justify-center'>
                <div className='w-[70%] h-[700px] border-white flex flex-col items-center justify-center'>
                    <p className='text-white 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[12px]'>Rasululloh ﷺ (sollallohu alayhi va sallam) hayotlari davomida to'rtta Umra va bitta Haj qilganlar.</p>
                    <h2 className='2xl:text-[70px] xl:text-[66px] lg:text-[58px] md:text-[50px] sm:text-[44px] text-[24px] font-semibold text-center  text-white'>Allohning mehmoni bo'ling <br className='2xl:block xl:block lg:block md:block sm:hidden hidden' /> UMRA 2023 - 2024</h2>
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
