"use client";

import React from 'react';
import Image from 'next/image';

const TabsSection = () => {
  const services = [
    {
      id: 'fuel',
      title: 'Fuel Delivery',
      description: 'Ran out of fuel on the roadside? We\'ll deliver 10 liters of Super 98 fuel directly to your location.',
      arrival: 'Arrives within 30 mins',
      price: '100 AED',
      additionalInfo: 'T&Cs apply.',
      image: '/images/gas-deliver.jpg',
    },
    {
      id: 'jump_start',
      title: 'Jump Start',
      description: 'Dead battery? Don\'t panic – we\'ll come and give you a boost.',
      arrival: 'Arrives within 30 mins',
      price: '150 AED',
      additionalInfo: 'Fees may still apply if jump-starting does not resolve the issue.',
      image: '/images/car-battery-3.jpg',
    },
    {
      id: 'tire_change',
      title: 'Tire Change',
      description: 'Flat tire? We\'ll come over and replace it for you quickly.',
      arrival: 'Arrives within 30 mins',
      price: '120 AED',
      additionalInfo: 'T&Cs apply.',
      image: '/images/tire.jpg',
    },
    {
      id: 'air_pressure',
      title: 'Air Pressure',
      description: 'Low tire pressure? We\'ll make sure your tires are properly inflated.',
      arrival: 'Arrives within 30 mins',
      price: '80 AED',
      additionalInfo: 'Includes a complete tire inspection.',
      image: '/images/tyre-pressures.jpg',
    },
    {
      id: 'towing',
      title: 'Towing',
      description: 'Stranded? Our towing service will help you move your vehicle safely.',
      arrival: 'Arrives within 30 mins',
      price: '200 AED',
      additionalInfo: 'Price includes up to 10 km of towing.',
      image: '/images/Towing_Payallup.jpg',
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Road Assistance Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-gradient-to-br from-[#ff8500] to-[#995000] rounded-2xl py-9 px-6 text-white transform transition-all space-y-6 duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
              <Image 
                src={service.image} 
                alt={service.title} 
                layout="fill" 
                objectFit="cover" 
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="mb-3 text-sm font-medium opacity-90">{service.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">Arrival Time:</span>
                <span className='bg-green-100 text-green-700 px-3 py-1 text-center rounded-lg text-[10px] font-medium'>{service.arrival}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Price:</span>
                <span>{service.price}</span>
              </div>
              <p className="text-xs italic mt-2 opacity-80">{service.additionalInfo}</p>
            </div>
            <button 
              className="w-full mt-4 flex items-center justify-center px-4 py-4 bg-green-500 text-white text-sm rounded-3xl shadow-lg font-semibold hover:bg-green-600 transition"
            >
              <i className="pi pi-whatsapp text-center font-bold mr-2"></i>
              Get ResQ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsSection;