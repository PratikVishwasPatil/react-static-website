import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const VedbizLanding = () => {
  const handleScroll = () => {
    const section = document.getElementById('our-products');
    section?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* First Section with Background Image */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Image Container - Fixed to only this section */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('bg.jpg')"
          }}
        />

        {/* Header */}
        <header className="relative z-10 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 sm:py-6 gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            <img
              src="vedbiz.png"
              alt="Vedbiz Logo"
              className="h-16 sm:h-20 w-auto"
            />
          </div>

          <button className="flex items-center gap-2 bg-[#0033cc] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#002db3] transition duration-300 shadow-md whitespace-nowrap">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            Let's Connect
          </button>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex items-center justify-center sm:justify-end min-h-[calc(100vh-140px)] px-4 sm:px-8 lg:pr-16">
          <div className="max-w-xl text-center sm:text-left w-full sm:mr-10">
            {/* Main Heading */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-4 sm:mb-6 leading-tight">
              Empowering Decisions. Elevating Minds.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Where knowledge meets innovation — media, technology, and strategy crafted to transform lives.
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Vedbiz Technologies is a KAAS (Knowledge As A Service) company blending
              media, research, and technology to positively influence individuals,
              organizations, and society.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              {/* Primary Button */}
              <button onClick={handleScroll} className="flex items-center gap-2 bg-[#0033cc] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#002db3] transition duration-300 shadow-md w-full sm:w-auto justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Explore Our Products
              </button>

              {/* Secondary Button */}
              
                <a href="https://www.youtube.com/@ThinkBankLive"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 bg-white text-[#0033cc] px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-50 transition duration-300 shadow-sm border border-gray-200 w-full sm:w-auto justify-center">
                  <span className="w-1.5 h-1.5 bg-[#0033cc] rounded-full"></span>
                  Watch Think Bank
                </button>
              </a>

            </div>
          </div>
        </main>
      </div>

      {/* Second Section - Blue Section */}
      <section className="relative bg-blue-700 text-white px-4 sm:px-6 py-16 sm:py-24 overflow-hidden">
        {/* Desktop Vertical Lines and Circles - Hidden on mobile */}
        <div className="hidden lg:block">
          <div className="absolute bottom-1/3 left-[295px] h-72 w-px bg-white bg-opacity-40 transform -translate-y-2/5"></div>
          <div className="absolute top-0 right-[276px] h-96 w-px bg-white bg-opacity-40 transform -translate-y-2/5"></div>
          <div className="absolute top-0 left-[295px] h-32 w-px bg-white bg-opacity-40 transform -translate-y-2/5"></div>

          {/* Who We Are */}
          <div className="absolute top-[60px] left-[200px] w-48 h-48 border border-blue-300 rounded-full"></div>
          <div className="absolute top-[130px] left-[290px] w-3 h-3 bg-orange-500 rounded-full z-10"></div>

          {/* Our Philosophy */}
          <div className="absolute top-[150px] right-[0px] w-[32rem] h-[32rem] border border-dashed border-blue-300 rounded-full"></div>
          <div className="absolute top-[380px] right-[270px] w-3 h-3 bg-orange-500 rounded-full z-10"></div>

          {/* What We Do */}
          <div className="absolute bottom-[280px] left-[290px] w-3 h-3 bg-orange-500 rounded-full z-10"></div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto space-y-16 sm:space-y-24 lg:space-y-32 sm:pl-0 lg:pl-16 relative z-10">
          {/* Who We Are */}
          <div className="mt-8 lg:mt-[55px]">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Who We Are</h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-full lg:max-w-[700px]">
              Vedbiz Technologies Private Limited is a pioneering KAAS company based in Pune, India. Since 2017, we've been building impactful platforms across Media, Consulting, Technology, and Education. Our mission is to empower decision-making, enrich public discourse, and scale businesses through meaningful knowledge.
            </p>
          </div>

          {/* Our Philosophy */}
          <div className="text-center sm:text-left lg:text-center max-w-full lg:max-w-xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 lg:text-right">Our Philosophy</h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              The name "VedBiz" comes from "Ved" (Sanskrit for Knowledge) and "Biz" (short for Business) — symbolizing our belief that sustainable impact lies at the intersection of knowledge and enterprise.
            </p>
          </div>

          {/* What We Do */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">What We Do</h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-full lg:max-w-[500px]">
              From strategic consulting to digital content platforms, from AI-powered research to leadership development programs — we drive change by blending data, storytelling, and technology. Our deep understanding of Maharashtra's socio-political and economic landscape gives us a unique edge.
            </p>
          </div>
        </div>
      </section>

      {/* Third Section - Products Section */}
      <div id="our-products" className="relative bg-white py-12 sm:py-16 px-4 overflow-hidden">
        {/* Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line - Hidden on mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-300 z-0 hidden sm:block"></div>

          {/* Large Circle - Hidden on mobile */}
          <div className="absolute left-[-60px] top-[-57px] w-48 h-48 border border-gray-300 rounded-full z-0 hidden sm:block"></div>

          {/* Heading */}
          <div className="mb-8 sm:mb-12 relative ml-0 sm:ml-[120px] text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-700">Our</h2>
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600">Products</h2>
          </div>

          {/* === Ptolemy === */}
          <div className="relative pl-0 sm:pl-24 mb-12 sm:mb-16">
            <div className="absolute left-7 top-2 w-3 h-3 bg-blue-600 rounded-full z-10 hidden sm:block"></div>
            <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2">Ptolemy</h3>
            <p className="text-gray-700 text-base mb-4">
              A cutting-edge data driven consultancy solution offering
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-1 mb-4">
              <div>
                <div className="w-10 h-[2px] bg-red-300 mb-2"></div>
                <p className="text-sm text-gray-600">Perception & Narrative Management</p>
              </div>
              <div>
                <div className="w-10 h-[2px] bg-red-300 mb-2"></div>
                <p className="text-sm text-gray-600">Research & Campaign Strategy</p>
              </div>
              <div>
                <div className="w-10 h-[2px] bg-red-300 mb-2"></div>
                <p className="text-sm text-gray-600">Communication Planning</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Powered by our proprietary AI tools and layered with in-depth on-ground research,
              news analysis, and leadership insights, Ptolemy has driven major influence campaigns —
              notably recognised during Maharashtra's General Elections in 2019 and 2024.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="px-3 sm:px-4 py-1 text-blue-700 text-xs sm:text-sm border border-gray-300 rounded-full">FMCG Brands</span>
              <span className="px-3 sm:px-4 py-1 text-blue-700 text-xs sm:text-sm border border-gray-300 rounded-full">Educational Institutes</span>
              <span className="px-3 sm:px-4 py-1 text-blue-700 text-xs sm:text-sm border border-gray-300 rounded-full">Retail Businesses</span>
              <span className="px-3 sm:px-4 py-1 text-blue-700 text-xs sm:text-sm border border-gray-300 rounded-full">Politicians</span>
            </div>
          </div>

          {/* === Think Bank === */}
          <div className="relative pl-0 sm:pl-24 mb-12 sm:mb-16">
            <div className="absolute left-7 top-2 w-3 h-3 bg-black rounded-full z-10 hidden sm:block"></div>
            <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-1">Think Bank</h3>
            <p className="text-gray-700 text-base mb-4">Maharashtra's Intellectual Digital Platform</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 mb-4">
              <div>
                <div className="w-10 h-[2px] bg-red-300 mb-2"></div>
                <p className="text-sm text-gray-600">6+ lakh YouTube subscribers</p>
              </div>
              <div>
                <div className="w-10 h-[2px] bg-red-300 mb-2"></div>
                <p className="text-sm text-gray-600">4+ lakh social media followers (Instagram & Facebook)</p>
              </div>
              <div>
                <div className="w-10 h-[2px] bg-red-300 mb-2"></div>
                <p className="text-sm text-gray-600">600+ interviews and podcasts over 6 years</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              It has hosted leading voices like <b>Devendra Fadnavis, Dr. Raghunath Mashelkar,
                And Dr. Anand Deshpande.</b> With over 25 lakh monthly viewers, Think Bank shapes public thought and policy discussions across Maharashtra.
            </p>
            <div className="flex flex-wrap gap-3 mb-3">
              <p className="text-sm text-gray-600">Featured in the Book Series</p>
              <span className="px-3 sm:px-4 py-1 text-blue-700 text-xs sm:text-sm border border-gray-300 rounded-full">Vital Sanvad</span>
              <span className="px-3 sm:px-4 py-1 text-blue-700 text-xs sm:text-sm border border-gray-300 rounded-full">Think Reads</span>
            </div>
            
            <a  href="https://www.youtube.com/@ThinkBankLive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 bg-[#0033cc] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#002db3] transition duration-300 shadow-md w-full sm:w-auto justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Watch Think Bank
              </button>
            </a>

          </div>

          {/* === Vyavastha === */}
          <div className="relative pl-0 sm:pl-24">
            <div className="absolute left-7 top-2 w-3 h-3 bg-black rounded-full z-10 hidden sm:block"></div>
            <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-1">Vyavastha</h3>
            <p className="text-gray-700 text-base mb-2">
              ERP Tailored for Indian MSMEs
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Vyavastha is an ERP and resource Management platform custom-built for Indian manufacturing and construction SMEs (100 Cr-500 Cr turnover).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 mb-4">
              <div>
                <div className="w-12 h-[2px] bg-red-300 mb-2"></div>
                <p className="text-sm text-gray-600">Localized UX for Maharashtra MIDCs</p>
              </div>
              <div>
                <div className="w-12 h-[2px] bg-red-300 mb-2"></div>
                <p className="text-sm text-gray-600">Seamless analytics with Power BI Dashboards</p>
              </div>
              <div>
                <div className="w-12 h-[2px] bg-red-300 mb-2"></div>
                <p className="text-sm text-gray-600">Smart tasking with AI agents</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Trusted across MIDC regions for its simplicity and power.
            </p>
            
             <a href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 bg-[#0033cc] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#002db3] transition duration-300 shadow-md w-full sm:w-auto justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                More about Vyavastha
              </button>
            </a>
          </div>
        </div>
      </div>

        {/* NEW: Think Club Section */}
        <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-amber-200 to-orange-200 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Join <span className="text-orange-600">Think Club</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Think Club is an intellectual Marathi club that offers access to exclusive publications, 
              meetups, events, and activities specially designed to enrich your intellectual journey. 
              This club brings together curious minds to learn, engage, and grow.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-200">
            {/* Image Container */}
            <div className="relative w-full h-64 sm:h-96 bg-gradient-to-br from-white-900 to-white-800">
              <img
                src="1920 ThinkClub.png"
                alt="Think Club"
                className="w-full h-full object-contain p-6"
              />
            </div>

            {/* Content Below Image */}
            <div className="p-6 sm:p-10 bg-gradient-to-br from-white to-orange-50">
              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Exclusive Publications</h4>
                    <p className="text-sm text-gray-600">Access curated intellectual content</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Meetups & Events</h4>
                    <p className="text-sm text-gray-600">Connect with like-minded thinkers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Special Activities</h4>
                    <p className="text-sm text-gray-600">Enriching intellectual experiences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Free Participation</h4>
                    <p className="text-sm text-gray-600">Join without any membership fee</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 sm:p-8 text-center text-white shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Ready to Join?</h3>
                <p className="text-sm sm:text-base mb-6 opacity-95">
                  To participate in Think Club, send <span className="font-bold">'Hi'</span> to
                </p>
                <div className="inline-flex items-center gap-3 bg-white text-orange-600 px-6 py-3 rounded-full font-bold text-lg sm:text-xl shadow-md mb-4">
                  <span>📱</span>
                  <span>9511293683</span>
                </div>
                <p className="text-xs sm:text-sm opacity-90 italic">
                  An initiative of Think Bank digital platform
                </p>
              </div>

              {/* Footer Attribution */}
              <div className="mt-8 pt-6 border-t border-orange-200 text-center">
                <p className="text-sm text-gray-600 font-medium">
                  Powered and All Rights Reserved to <span className="text-orange-600 font-bold">Think Club</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-16 overflow-hidden">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl text-center text-gray-800 mb-6 sm:mb-8">
          Our <span className="text-blue-700">Team</span>
        </h2>

        <div className="max-w-6xl mx-auto px-0 sm:px-4 py-8 sm:py-16">
          <div className="space-y-12 sm:space-y-16">
            {/* First Member - Image Left, Content Right */}
            <div className="border border-blue-700 p-4 sm:p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="user.png"
                    alt="Vinayak Pachalaig"
                    className="w-40 h-48 sm:w-48 sm:h-56 object-cover rounded-lg border border-gray-300"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                    Vinayak Pachalag Founder, Director & CEO
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-2">
                    M.Tech in AI | Electronics Engineer | Author | Media Strategist
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    With 150+ lectures and 2 books, Vinayak brings deep insights into media, technology, and public engagement. He has spearheaded award-winning campaigns like Amacha Tharalay, and is a recipient of the Maharshi Narad Puraskar. Advisor to educational institutions and national innovation councils.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Member - Image Right, Content Left */}
            <div className="border border-blue-700 p-4 sm:p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="user.png"
                    alt="Vasudeo Pachalaig"
                    className="w-40 h-48 sm:w-48 sm:h-56 object-cover rounded-lg border border-gray-300"
                  />
                </div>
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                    Vasudeo Pachalag, Director
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Mechanical Engineer with 35+ years in Quality Assurance. Formerly with Kirloskar Oil Engines, Vasudeo brings rigor and expertise in MSME operations and compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-0 sm:px-4 md:px-16 py-8 sm:py-12">
          <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-6 sm:mb-8">
            Key <span className="text-blue-700">Team Member</span>
          </h2>

          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="team-slider relative"
          >
            <SwiperSlide>
              <div className="bg-blue-700 text-white p-4 sm:p-6 h-72 sm:h-80 flex flex-col items-center justify-center text-center relative shadow-2xl mx-1">
                <div className="w-36 h-36 sm:w-48 sm:h-48 mb-3 sm:mb-4 relative">
                  <img
                    src="user.png"
                    alt="Prathamesh Joshi"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-blue-800 to-transparent opacity-90"></div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm mb-1">Prathamesh Joshi</h4>
                <p className="text-xs sm:text-sm mb-2">
                  Head of Business: Data-driven storyteller, political consultant, and marketing strategist
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-4 sm:p-6 h-72 sm:h-80 flex flex-col items-center justify-center text-center relative shadow-2xl mx-1 border border-blue-700">
                <div className="w-36 h-36 sm:w-48 sm:h-48 overflow-hidden mb-3 sm:mb-4 shadow-xl relative">
                  <img
                    src="user.png"
                    alt="Pratik Koske"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Pratik Koske</h4>
                <p className="text-xs sm:text-sm text-blue-600 mb-2">
                  Executive Editor, Think Bank: Marathi content expert and digital culture curator
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-4 sm:p-6 h-72 sm:h-80 flex flex-col items-center justify-center text-center relative shadow-2xl mx-1 border border-blue-700">
                <div className="w-36 h-36 sm:w-48 sm:h-48 overflow-hidden mb-3 sm:mb-4 shadow-xl relative">
                  <img
                    src="user.png"
                    alt="Nikhil Rakhonde"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Nikhil Rakhonde</h4>
                <p className="text-xs sm:text-sm text-blue-600 mb-2">Associate Editor, Think Bank</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-4 sm:p-6 h-72 sm:h-80 flex flex-col items-center justify-center text-center relative shadow-2xl mx-1 border border-blue-700">
                <div className="w-36 h-36 sm:w-48 sm:h-48 overflow-hidden mb-3 sm:mb-4 shadow-xl relative">
                  <img
                    src="user.png"
                    alt="Tejasvi Jadhav"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Tejasvi Jadhav</h4>
                <p className="text-xs sm:text-sm text-blue-600 mb-2">Software Developer, Vedbiz</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-4 sm:p-6 h-72 sm:h-80 flex flex-col items-center justify-center text-center relative shadow-2xl mx-1 border border-blue-700">
                <div className="w-36 h-36 sm:w-48 sm:h-48 overflow-hidden mb-3 sm:mb-4 shadow-xl relative">
                  <img
                    src="user.png"
                    alt="Pratik Patil"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Pratik Patil</h4>
                <p className="text-xs sm:text-sm text-blue-600 mb-2">Software Developer, Vedbiz</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-4 sm:p-6 h-72 sm:h-80 flex flex-col items-center justify-center text-center relative shadow-2xl mx-1 border border-blue-700">
                <div className="w-36 h-36 sm:w-48 sm:h-48 overflow-hidden mb-3 sm:mb-4 shadow-xl relative">
                  <img
                    src="user.png"
                    alt="Divya Bhandare"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Divya Bhandare</h4>
                <p className="text-xs sm:text-sm text-blue-600 mb-2">Associate Editor, The Live</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-4 sm:p-6 h-72 sm:h-80 flex flex-col items-center justify-center text-center relative shadow-2xl mx-1 border border-blue-700">
                <div className="w-36 h-36 sm:w-48 sm:h-48 overflow-hidden mb-3 sm:mb-4 shadow-xl relative">
                  <img
                    src="user.png"
                    alt="Prathmesh Halande"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Prathmesh Halande</h4>
                <p className="text-xs sm:text-sm text-blue-600 mb-2">Associate Editor, The Insight</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-4 sm:p-6 h-72 sm:h-80 flex flex-col items-center justify-center text-center relative shadow-2xl mx-1 border border-blue-700">
                <div className="w-36 h-36 sm:w-48 sm:h-48 overflow-hidden mb-3 sm:mb-4 shadow-xl relative">
                  <img
                    src="user.png"
                    alt="Sheetal Jagtap"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Sheetal Jagtap</h4>
                <p className="text-xs sm:text-sm text-blue-600 mb-2">Assistant Editor, The Live</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-4 sm:p-6 h-72 sm:h-80 flex flex-col items-center justify-center text-center relative shadow-2xl mx-1 border border-blue-700">
                <div className="w-36 h-36 sm:w-48 sm:h-48 overflow-hidden mb-3 sm:mb-4 shadow-xl relative">
                  <img
                    src="user.png"
                    alt="Suparn Marathe"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Suparn Marathe</h4>
                <p className="text-xs sm:text-sm text-blue-600 mb-2">Associate Media Consultant</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-4 sm:p-6 h-72 sm:h-80 flex flex-col items-center justify-center text-center relative shadow-2xl mx-1 border border-blue-700">
                <div className="w-36 h-36 sm:w-48 sm:h-48 overflow-hidden mb-3 sm:mb-4 shadow-xl relative">
                  <img
                    src="user.png"
                    alt="Lalit Patil"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Lalit Patil</h4>
                <p className="text-xs sm:text-sm text-blue-600 mb-2">Video Editor</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-4 sm:p-6 h-72 sm:h-80 flex flex-col items-center justify-center text-center relative shadow-2xl mx-1 border border-blue-700">
                <div className="w-36 h-36 sm:w-48 sm:h-48 overflow-hidden mb-3 sm:mb-4 shadow-xl relative">
                  <img
                    src="user.png"
                    alt="Akash"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Akash</h4>
                <p className="text-xs sm:text-sm text-blue-600 mb-2"></p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-4 sm:p-6 h-72 sm:h-80 flex flex-col items-center justify-center text-center relative shadow-2xl mx-1 border border-blue-700">
                <div className="w-36 h-36 sm:w-48 sm:h-48 overflow-hidden mb-3 sm:mb-4 shadow-xl relative">
                  <img
                    src="user.png"
                    alt="Tanwee Paranjape"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Tanwee Paranjape</h4>
                <p className="text-xs sm:text-sm text-blue-600 mb-2">Video Editor</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-4 sm:p-6 h-72 sm:h-80 flex flex-col items-center justify-center text-center relative shadow-2xl mx-1 border border-blue-700">
                <div className="w-36 h-36 sm:w-48 sm:h-48 overflow-hidden mb-3 sm:mb-4 shadow-xl relative">
                  <img
                    src="user.png"
                    alt="Kiran Naiknaware"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Kiran Naiknaware</h4>
                <p className="text-xs sm:text-sm text-blue-600 mb-2">Production Manager</p>
              </div>
            </SwiperSlide>

            <div className="swiper-button-prev !left-1 sm:!left-2 !top-1/2 !w-8 !h-8 sm:!w-10 sm:!h-10 !bg-orange-500 !rounded-full after:!text-white after:!text-xs sm:after:!text-sm after:!font-bold !shadow-lg"></div>
            <div className="swiper-button-next !right-1 sm:!right-2 !top-1/2 !w-8 !h-8 sm:!w-10 sm:!h-10 !bg-orange-500 !rounded-full after:!text-white after:!text-xs sm:after:!text-sm after:!font-bold !shadow-lg"></div>
          </Swiper>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="bg-gradient-to-br from-white-50 to-indigo-100 py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-10 transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200 rounded-full opacity-10 transform -translate-x-24 translate-y-24"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-8">
              Our <span className="text-blue-700">Client Partners</span>
            </h3>

            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 40 },
                768: { slidesPerView: 4, spaceBetween: 50 },
                1024: { slidesPerView: 5, spaceBetween: 60 },
              }}
              className="client-slider"
            >
              {[
                "logos/EY.png", "logos/Chitale_Bandhu.png", "logos/pudhari.jpg", "logos/dpu.png", "logos/Storytel_logo.jpg", "logos/setu.png",
                "logos/surya.png", "logos/ideal.png", "logos/dypiu.png", "logos/thinkbank.jpg", "logos/medianext.jpeg",
                "logos/jpmt.jpeg", "logos/deccan.png", "logos/marquis.png"
              ].map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex items-center justify-center h-32">
                    <div className="w-40 h-28 bg-white border border-gray-200 rounded-xl shadow-md flex items-center justify-center p-2">
                      <img
                        src={img}
                        alt={`Client ${idx + 1}`}
                        className="object-contain max-h-full max-w-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

    

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="vedbiz.png"
                  alt="Vedbiz Logo"
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-md">
                Vedbiz Technologies is a KAAS company blending media, research, and technology to positively influence individuals, organizations, and society.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">▶</span>
                </div>
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">@</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                Business Hours
              </h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Monday - Saturday</p>
                    <p className="text-xs text-gray-400">9:30 AM to 6:30 PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs">✕</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Sunday</p>
                    <p className="text-xs text-gray-400">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start">
                  <span className="mr-2 mt-0.5">📍</span>
                  <span className="leading-relaxed">Bidkar icon, near dakshinmukhi hanuman mandir, Paschimanagri, Kothrud, Pune, Maharashtra 411038</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📧</span>
                  <span>info@vedbiz.com</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📞</span>
                  <span>+91 XXX XXX XXXX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © 2025 Think Club & Vedbiz Technologies Private Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VedbizLanding;