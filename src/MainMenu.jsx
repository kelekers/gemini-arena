import React, { useState } from 'react';

const MainMenu = ({ onStart }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    { label: 'MULAI', action: onStart },
    { label: 'PENGATURAN', action: () => {} },
    { label: 'KELUAR', action: () => {} },
  ];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#050505] font-serif text-white selection:bg-[#d4af37]/30">
      
      {/* 1. Background Layer dengan Overlay Gradien Kompleks */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-out scale-95"
        style={{ backgroundImage: `url('https://raw.githubusercontent.com/kelekers/gemini-arena/refs/heads/main/src/assets/main_menu_bg.png')` }}
      >
        {/* Layer Gelap untuk kontras teks */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
      </div>

      {/* 2. Main UI Container */}
      <div className="relative z-10 flex h-full flex-col justify-center px-20 lg:px-32">

        {/* MENU NAVIGATION */}
        <nav className="flex flex-col space-y-8 mt-20">
          {menuItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <button
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={item.action}
                className="group relative flex items-center w-fit outline-none"
              >
                {/* Gold Vertical Bar (Hover Effect ala Gambar) */}
                <div 
                  className={`absolute -left-6 h-8 w-[3px] bg-[#d4af37] transition-all duration-500 ease-out shadow-[0_0_15px_rgba(212,175,55,0.6)]
                    ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                />

                {/* Menu Text */}
                <span 
                  className={`font-['Cinzel'] text-3xl tracking-[0.3em] transition-all duration-700 ease-in-out
                    ${isHovered ? 'text-white translate-x-2' : 'text-[#4a4a4a]'}`}
                >
                  {item.label}
                </span>

                {/* Subtle Glow Text (Hanya saat hover) */}
                {isHovered && (
                  <span className="absolute left-2 font-['Cinzel'] text-3xl tracking-[0.3em] text-white blur-md opacity-30 animate-pulse">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* 3. Footer Branding */}
        <footer className="absolute bottom-12 left-20 lg:left-32">
          <div className="flex items-center space-x-4 opacity-30 transition-opacity hover:opacity-100 duration-1000">
            <div className="h-[1px] w-8 bg-white" />
            <p className="text-[9px] tracking-[0.4em] uppercase font-light">
              Built for the Brave • Indonesia 2026
            </p>
          </div>
        </footer>
      </div>

      {/* Vignette & Grain Effect (Kualitas AAA) */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]" />
    </div>
  );
};

export default MainMenu;