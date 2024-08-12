import React from 'react'
import Bizningafzalliklar from './Bizningafzalliklar'

const AboutUs = () => {
    return (
        <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[800px] xl:h-[800px] lg:h-[750px] md:h-[700px] sm:h-[1200px] h-[1370px] aboutus pb-20'>
            <div className='2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[85%] sm:w-[85%] w-[85%] mx-auto pt-20'>
                <div>
                    <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] flex justify-center'>
                        <h2 className='text-[40px] text-black font-semibold'>Biz <span className='text-[#41d0af]'>haqimizda</span></h2>
                    </div>
                    <div className='w-[100%] 2xl:flex xl:flex lg:flex md:flex sm:block block justify-between mt-10'>
                        <div className='2xl:w-[49%] xl:w-[49%] lg:w-[48%] md:w-[60%] sm:w-[100%] w-[100%] 2xl:h-[500px] xl:h-[500px] lg:h-[500px] md:h-[450px] sm:h-[450px] h-[460px] bg-white rounded-[30px] shadow-2xl flex items-center justify-center'>
                            <div className='w-[90%] h-[80%]'>
                                <p className='2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-black'>2023-yilda Allohning marhamati bilan Umra safariga ziyoratchilarni yuborish dasturi – IQRO TRAVEL dasturini yo‘lga qo‘ydik. Dasturni boshlaganimizdan asosiy maqsad musulmonlarga Umra ziyoratini ado etishda yordam ko'rsatib, Islomning beshinchi rukni bo'lmish amalni bajarishga ko'maklashishdir.</p>
                                <p className='2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[12px] text-black 2xl:mt-[40px] xl:mt-[38px] lg:mt-[36px] md:mt-[10px] sm:mt-[10px] mt-[30px]'>Allohning marhamati bilan bizning jamoamiz juda ko'p tajriba va bilimlarni to'plab ulgurdi. Umra ziyoratini eng yaxshi sharoitlarda ado etishingiz uchun ushbu tajribalarni qo'llashga tayyormiz.</p>
                                <button className='mt-8 2xl:px-10 xl:px-10 lg:px-10 md:px-8 sm:px-8 px-6 2xl:py-4 xl:py-4 lg:py-4 md:py-3 sm:py-3 py-2 rounded-[10px] text-white bg-[#008066]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[15px] sm:text-[14px] text-[13px]'>Ariza berish</button>
                            </div>
                        </div>
                        <div className='2xl:w-[49%] xl:w-[49%] lg:w-[48%] md:w-[38%] sm:w-[100%] w-[100%] 2xl:h-[500px] xl:h-[500px] lg:h-[500px] md:h-[450px] sm:h-[450px] h-[400px] 2xl:flex xl:flex lg:flex md:block sm:flex block justify-between 2xl:mt-0 lg:mt-0 xl:mt-0 md:mt-0 sm:mt-8 mt-8'>
                            <div className='2xl:w-[47%] xl:w-[47%] lg:w-[47%] md:w-[100%] sm:w-[48%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[48%] sm:h-[100%] h-[70%] bg-white rounded-[30px] about1'></div>
                            <div className='2xl:w-[47%] xl:w-[47%] lg:w-[47%] md:w-[100%] sm:w-[48%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[48%] sm:h-[100%] h-[70%] bg-white rounded-[30px] about2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-3 sm:mt-0 mt-4'></div>
                        </div>
                    </div>
                </div>
            </div >
            {/* <Bizningafzalliklar /> */}
        </div >
    )
}

export default AboutUs
