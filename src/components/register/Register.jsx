import React, { useState } from 'react';

const Register = () => {
    const [adults, setAdults] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const incrementAdults = () => setAdults(adults + 1);
    const decrementAdults = () => setAdults(adults > 0 ? adults - 1 : 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        // Bu yerda backend API'ga ariza yuborishni amalga oshirishingiz mumkin
    };

    return (
        <div className="w-full h-[1100px] register relative">
            <div className="w-full h-[500px] pt-[110px] reg-bg flex items-center justify-center">
                <div className="w-[90%] h-[60%] flex flex-col items-center justify-center mb-10">
                    <h2 className="text-white font-semibold text-5xl w-[60%] text-center mb-6 animate-fadeIn">ISHONCHLI VA HAVFSIZ UMRA ZIYORATLARI IQRO TRAVEL BILAN BIRGA</h2>
                    <div className="w-[80px] h-0 border border-[#00806b] animate-grow"></div>
                    <p className="text-[#00806b] mt-6">Hurmat bilan - IQRO TRAVEL jamoasi</p>
                </div>
            </div>
            <div className="w-[85%] mx-auto h-[600px] flex justify-between absolute left-[7.5%] top-[40%]">
                <div className="w-[48%] h-full shadow-2xl bg-white rounded-[30px] animate-slideInLeft">
                    <iframe src="https://yandex.uz/map-widget/v1/?ll=67.822268%2C40.132100&z=17.51&l=map&pt=67.822268,40.132100,pm2dgl" width="100%" height="100%" frameborder="1" allowfullscreen="true" className='rounded-[30px] shadow-2xl'></iframe>

                </div>
                <div className="w-[48%] h-full shadow-2xl bg-white rounded-[30px] flex items-center justify-center animate-slideInRight">
                    <div className="w-[85%] h-[85%]">
                        <div className="w-full h-auto flex items-center gap-4">
                            <h2 className="text-black text-3xl font-semibold w-[250px]">UMRA SAFARI UCHUN ARIZA</h2>
                            <span className="px-3 py-[0.7rem] bg-red-500 rounded text-white text-sm font-medium animate-pulse">Chegirma</span>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-10">
                            <input type="text" name="name" id="name" className="w-full h-[55px] border border-black rounded mb-4 pl-2 focus:border-green-500" placeholder="Ismingiz" required />
                            <input type="tel" name="phone" id="phone" className="w-full h-[55px] border border-black rounded mb-4 pl-2 focus:border-green-500" placeholder="Telefon raqamingiz" required />
                            <div className="flex items-center gap-4 mb-4">
                                <select name="month" id="month" className="w-[45%] h-[55px] border border-black rounded-lg text-black focus:border-green-500" required>
                                    <option value="">Safar oyi</option>
                                    <option value="2">Fevral</option>
                                    <option value="3">Mart</option>
                                </select>
                                <div className="flex items-center gap-4">
                                    <span className="text-black">Kattalar</span>
                                    <div className="flex gap-3 items-center">
                                        <button type="button" onClick={decrementAdults} className="w-[30px] h-[30px] bg-gray-200 rounded text-black font-semibold">-</button>
                                        <span className="text-black px-6 py-4 border rounded">{adults}</span>
                                        <button type="button" onClick={incrementAdults} className="w-[30px] h-[30px] bg-gray-200 rounded text-black font-semibold">+</button>
                                    </div>
                                </div>
                            </div>
                            <select name="tariff" id="tariff" className="w-full h-[55px] rounded-lg border border-black mb-4 text-black focus:border-green-500" required>
                                <option value="">Tarifni tanlang</option>
                                <option value="standard">Standart</option>
                                <option value="premium">Premium</option>
                            </select>
                            <button type="submit" className="w-full h-[55px] bg-[#00806b] rounded-lg text-white font-semibold text-lg hover:bg-[#006652] transition-colors">
                                Yuborish
                            </button>
                            <p className="text-[#008077] text-center mt-6 animate-fadeIn">Bizni tanlaganingiz uchun katta Rahmat!</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
