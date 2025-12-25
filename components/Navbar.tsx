
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'الرئيسية', href: '#' },
    { name: 'عن الأكاديمية', href: '#overview' },
    { name: 'المنهج الدراسي', href: '#modules' },
    { name: 'مختبراتنا', href: '#labs' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            {/* Master Key / Shield Logo */}
            <div className="relative group cursor-pointer">
               <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
               <div className="relative w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg border border-slate-700">
                 <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                 </svg>
               </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-slate-900 tracking-tight leading-none font-tajawal">Cyber Masters</span>
              <span className="text-[10px] text-blue-600 font-extrabold tracking-[0.2em] uppercase">أكاديمية الخبراء</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-reverse space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 hover:text-blue-600 transition-colors font-bold text-sm"
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 border border-blue-500">
                سجّل الآن
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-bold"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 shadow-lg">
                سجّل الآن
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
