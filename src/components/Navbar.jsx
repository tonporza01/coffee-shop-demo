import { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'หน้าแรก' },
    { id: 'about', label: 'เกี่ยวกับเรา' },
    { id: 'services', label: 'เมนูและบริการ' },
    { id: 'reviews', label: 'รีวิว' },
    { id: 'contact', label: 'ติดต่อเรา' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-350 ${
      isScrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleLinkClick('home')}>
            <div className="bg-gradient-to-br from-accent-gold to-coffee-600 p-2 rounded-xl mr-3 shadow-md border border-accent-gold/20">
              <Coffee className="h-6 w-6 text-accent-darkBg" />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-wider text-white">
              AROMA <span className="text-accent-gold bg-gradient-to-r from-accent-gold to-coffee-400 bg-clip-text text-transparent">OASIS</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-heading text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent-gold relative py-1 ${
                  activeSection === link.id ? 'text-accent-gold' : 'text-coffee-200'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold rounded-full transform scale-x-100 transition-transform duration-300"></span>
                )}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('services')}
              className="bg-accent-gold hover:bg-coffee-500 text-accent-darkBg hover:text-white font-heading font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 hover:shadow-accent-gold/20"
            >
              สั่งเดลิเวอรี่
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-coffee-100 hover:text-accent-gold focus:outline-none p-2 rounded-xl transition-all border border-transparent hover:border-accent-gold/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-x-0 bg-accent-darkBg/95 backdrop-blur-xl border-b border-accent-gold/10 transition-all duration-300 ease-in-out z-40 ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`} style={{ top: '76px', height: 'calc(100vh - 76px)' }}>
        <div className="px-6 pt-8 pb-12 flex flex-col justify-between h-full bg-gradient-to-b from-transparent to-accent-darkBg">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full text-left font-heading text-lg font-medium py-3.5 px-5 rounded-2xl transition-all duration-200 ${
                  activeSection === link.id 
                    ? 'text-accent-darkBg bg-accent-gold font-bold shadow-lg shadow-accent-gold/20' 
                    : 'text-coffee-200 hover:text-accent-gold hover:bg-accent-cardBg border border-transparent hover:border-accent-gold/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="px-2">
            <button
              onClick={() => handleLinkClick('services')}
              className="w-full bg-accent-gold text-accent-darkBg font-heading font-extrabold text-center py-4 rounded-full hover:bg-coffee-500 hover:text-white transition-all duration-300 shadow-xl shadow-accent-gold/10"
            >
              สั่งเดลิเวอรี่เลยตอนนี้
            </button>
            <p className="text-center text-xs text-coffee-400 mt-4">
              เปิดให้บริการทุกวัน 07:00 น. - 18:00 น.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
