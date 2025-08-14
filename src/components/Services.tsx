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
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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
      className="bg-[#fffaf4] text-black rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      {/* Image at top - full width */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
        <Image
          src={service.image} // should be a path like "/icons/seo.webp"
          alt={service.title}
          width={300} // larger size for prominence
          height={300}
          className="object-contain"
        />
      </div>

      {/* Content below */}
      <div className="p-8">
        {/* Title */}
        <h4 className="text-xl font-bold text-gray-900 mb-4">
          {service.title}
        </h4>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  ))}
</div>        </div>
      </div>
    </div>
  );
};

export default Services;