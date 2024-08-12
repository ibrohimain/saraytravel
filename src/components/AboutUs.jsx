import React from 'react'
import Bizningafzalliklar from './Bizningafzalliklar'

const AboutUs = () => {
    return (
        <div className='w-[100%] h-auto aboutus pb-20'>
            <div className='w-[85%] mx-auto pt-20'>
                <div>
                    <div className='w-[100%] flex justify-center'>
                        <h2 className='text-[40px] text-black font-semibold'>Biz <span className='text-[#41d0af]'>haqimizda</span></h2>
                    </div>
                    <div className='w-[100%] flex justify-between mt-10'>
                        <div className='w-[49%] h-[500px] bg-white rounded-[30px] shadow-2xl flex items-center justify-center'>
                            <div className='w-[90%] h-[80%]'>
                                <p className='text-black'>2023-yilda Allohning marhamati bilan Umra safariga ziyoratchilarni yuborish dasturi – IQRO TRAVEL dasturini yo‘lga qo‘ydik. Dasturni boshlaganimizdan asosiy maqsad musulmonlarga Umra ziyoratini ado etishda yordam ko'rsatib, Islomning beshinchi rukni bo'lmish amalni bajarishga ko'maklashishdir.</p>
                                <p className='text-black mt-[40px]'>Allohning marhamati bilan bizning jamoamiz juda ko'p tajriba va bilimlarni to'plab ulgurdi. Umra ziyoratini eng yaxshi sharoitlarda ado etishingiz uchun ushbu tajribalarni qo'llashga tayyormiz.</p>
                                <button className='mt-8 px-8 py-3 rounded-[10px] text0white bg-[#008066] text-white text-[16px]'>Ariza berish</button>
                            </div>
                        </div>
                        <div className='w-[49%] h-[500px] flex justify-between'>
                            <div className='w-[47%] h-[100%] bg-white rounded-[30px] about1'></div>
                            <div className='w-[47%] h-[100%] bg-white rounded-[30px] about2'></div>
                        </div>
                    </div>
                </div>
            </div>
            <Bizningafzalliklar />
        </div>
    )
}

export default AboutUs
