'use client'

import React from 'react';
import { Globe, Share2, TrendingUp, Search } from 'lucide-react';
import Image from 'next/image';

const Services: React.FC = () => {
  const services = [
    {
      image: "/digital_marketing.webp",
      title: "360 Digital Marketing",
      description: "360 digital marketing service covers all aspects of your business' online marketing needs. This includes website development and design, SEO, Google and facebook ads, Social media marketing. This ensures your business stays ahead of the competition in the digital world.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      image: "/social_media_marketing.webp",
      title: "Social Media Marketing",
      description: "Social media marketing service to ensure that your social presence is solid and following the current trends with advanced content strategies.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      image: "/performance_marketing.webp",
      title: "Performance Marketing",
      description: "Full funnel optimization of your paid ads campaign across Google and Facebook so you can get that juicy ROI.",
      color: "bg-green-100 text-green-600"
    },
    {
      image: "/seo.webp",
      title: "SEO",
      description: "On-Page, Off-page and technical SEO so your website stays on top of the game. Decreasing your reliability on Paid ads.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "₹10Cr+", label: "Revenue Generated" },
    { number: "250%", label: "Average ROI Increase" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="bg-orange-gradient py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Who We Are Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            WHO WE ARE AND SERVICES WE OFFER
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-8">
            We are a team of experienced digital marketing professionals dedicated to helping businesses grow their online presence and achieve measurable results through data-driven strategies.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#fffaf4] text-black p-6 rounded-xl shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
            Services we offer:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
            >
              {/* Image at top - full width with gradient overlay */}
              <div className="relative w-full h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10"></div>
                <div className="relative w-full h-full cursor-pointer">
                  <Image
                    src={service.image} 
                    alt={service.title} 
                    height={200} 
                    width={200} 
                    className="w-full h-full object-contain sm:object-fill transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1" 
                    priority 
                  />
                </div>
                {/* Subtle corner accent */}
                {/* <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              </div>
            
              {/* Content below with enhanced spacing and typography */}
              <div className="p-8 bg-gradient-to-b from-white to-gray-50/30">
                {/* Title with enhanced typography */}
                <h4 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 group-hover:from-blue-900 group-hover:via-purple-800 group-hover:to-blue-900 transition-all duration-300">
                  {service.title}
                </h4>
            
                {/* Description with better readability */}
                <p className="text-gray-600 leading-relaxed text-base font-medium tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Subtle bottom accent line */}
                {/* <div className="mt-6 h-1 w-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500 ease-out"></div> */}
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;