import React from 'react';
import { assets, plans } from '../assets/assets';

const BuyCredit = () => {
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">Our Plans</button>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold">Choose the plan that's right for you</h1>
      <div className="flex flex-wrap justify-center gap-6 text-left mt-10">
        {plans.map((item, index) => (
          <div key={index} className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 w-[320px] flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500">
            <img width={40} src={assets.logo_icon} alt="" />
            <p className="mt-3 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${item.price}</span>
              <span className="text-gray-500">/{item.credits} credits</span>
            </p>
            <button className="mt-8 w-full bg-gray-900 text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition">Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;