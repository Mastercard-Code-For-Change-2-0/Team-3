import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

const GetStarted = () => {
     const navigate = useNavigate(); 
     
     const handleGetStarted = () => {
     navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-300 rounded-full animate-ping opacity-40"></div>
      <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-cyan-200 rounded-full animate-ping opacity-30"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left side - Content */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">ABC NGO</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Transform
              <br />
              <span className="text-white">Communities</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                with Purpose
              </span>
            </h1>

            <div className="mb-12">
              <p className="text-xl text-gray-400 mb-2">
                Empowered, Dynamic,
              </p>
              <p className="text-xl text-gray-400 mb-2">and</p>
              <p className="text-xl text-cyan-400 font-medium">
                Impactful Solutions
              </p>
            </div>

            <button 
              onClick={handleGetStarted}
              className="group relative bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-2xl"
            >
              <span>Get started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative">
            {/* Community illustration */}
            <div className="transform rotate-12 hover:rotate-6 transition-transform duration-700">
              <div className="w-36 h-36 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center relative">
                {/* Community circles representing people */}
                <div className="w-8 h-8 bg-cyan-400 rounded-full absolute top-6 left-8"></div>
                <div className="w-6 h-6 bg-blue-400 rounded-full absolute top-4 right-6"></div>
                <div className="w-7 h-7 bg-green-400 rounded-full absolute bottom-8 left-6"></div>
                <div className="w-5 h-5 bg-purple-400 rounded-full absolute bottom-6 right-8"></div>
                <div className="w-9 h-9 bg-yellow-400 rounded-full absolute top-12 right-12"></div>
                <div className="w-6 h-6 bg-pink-400 rounded-full absolute bottom-12 left-12"></div>
                
                {/* Center heart */}
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                
                {/* Connection lines */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 144 144">
                    <line x1="72" y1="72" x2="40" y2="30" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="2"/>
                    <line x1="72" y1="72" x2="110" y2="28" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="2"/>
                    <line x1="72" y1="72" x2="30" y2="104" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="2"/>
                    <line x1="72" y1="72" x2="116" y2="108" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-16 left-12 w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="absolute top-32 -left-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-12 right-8 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Bottom subtle branding */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-600 text-sm">
          Making a difference, one community at a time
        </div>
      </div>
    </div>
  );
};

export default GetStarted;