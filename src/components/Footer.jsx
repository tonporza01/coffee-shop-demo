import { Coffee, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0906] border-t border-accent-gold/10 pt-16 pb-8 text-coffee-200 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-coffee-900/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-coffee-950/20 rounded-full blur-3xl -ml-40 -mb-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="bg-gradient-to-br from-accent-gold to-coffee-600 p-2 rounded-xl mr-3 border border-accent-gold/20">
                <Coffee className="h-6 w-6 text-accent-darkBg" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-wider text-white">
                AROMA <span className="text-accent-gold">OASIS</span>
              </span>
            </div>
            <p className="text-sm text-coffee-300 leading-relaxed font-sans">
              คัดสรรเมล็ดกาแฟสายพันธุ์ดีจากแหล่งปลูกยั่งยืนทางภาคเหนือของไทย รังสรรค์อย่างพิถีพิถันเพื่อมอบรสชาติและกลิ่นหอมที่ดีที่สุดในทุกแก้วของคุณ
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent-cardBg border border-accent-gold/15 rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-accent-darkBg transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent-cardBg border border-accent-gold/15 rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-accent-darkBg transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://line.me/ti/p/~11aprily" target="_blank" rel="noopener noreferrer" aria-label="LINE" className="w-10 h-10 bg-accent-cardBg border border-accent-gold/15 rounded-full flex items-center justify-center hover:bg-accent-lineGreen hover:text-white transition-all duration-300">
                {/* LINE SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M24 10.3c0-5.7-5.4-10.3-12-10.3S0 4.6 0 10.3c0 5.1 4.3 9.3 10.1 10.1.4.1.9.3.9.7v2c0 .4.2.6.5.6.3 0 .5-.1.7-.3l2.8-2.8c3.9-1.2 9-5.1 9-10.3zm-14.7 3H8v-5.2c0-.4-.3-.7-.7-.7s-.7.3-.7.7v5.9c0 .4.3.7.7.7h2c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zm3.4-5.9c0-.4-.3-.7-.7-.7s-.7.3-.7.7v5.9c0 .4.3.7.7.7s.7-.3.7-.7V7.4zm5.5 0h-2.2v3.7h-.3V7.4h-2.2v5.9h4.7v-.7h-4V10.4h4V7.4zm4.4 0h-3.4v5.9h3.4v-.7h-2.7V10.4h2.4v-.7h-2.4V8.1h2.7v-.7z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6 border-l-2 border-accent-gold pl-3">ลิงก์แนะนำ</h4>
            <ul className="space-y-3 font-heading text-sm">
              {[
                { id: 'home', label: 'หน้าแรก' },
                { id: 'about', label: 'เกี่ยวกับเรา' },
                { id: 'services', label: 'เมนูและบริการ' },
                { id: 'reviews', label: 'รีวิวจากลูกค้า' },
                { id: 'contact', label: 'ติดต่อเรา' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-accent-gold transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours Column */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6 border-l-2 border-accent-gold pl-3">เวลาทำการ</h4>
            <ul className="space-y-3 font-sans text-sm text-coffee-300">
              <li className="flex justify-between py-1 border-b border-coffee-900/30">
                <span>วันจันทร์ - วันศุกร์</span>
                <span className="text-white font-medium">07:00 - 18:00 น.</span>
              </li>
              <li className="flex justify-between py-1 border-b border-coffee-900/30">
                <span>วันเสาร์ - วันอาทิตย์</span>
                <span className="text-accent-gold font-medium">08:00 - 19:00 น.</span>
              </li>
              <li className="flex justify-between py-1 text-xs text-coffee-400">
                <span>* วันหยุดนักขัตฤกษ์</span>
                <span>เปิดให้บริการปกติ</span>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6 border-l-2 border-accent-gold pl-3">ติดต่อเรา</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent-gold mr-3 shrink-0 mt-0.5" />
                <span className="text-coffee-300">
                  123 ถนนนิมมานเหมินท์ ซอย 9<br />
                  ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-accent-gold mr-3 shrink-0 mt-0.5" />
                <span className="text-coffee-300">ติดต่อเพื่อขอใบเสนอราคา (Contact for quotation)</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-accent-gold mr-3 shrink-0" />
                <a href="mailto:tonporza01@gmail.com" className="text-coffee-300 hover:text-accent-gold transition-colors">tonporza01@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-900/50 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-coffee-400 font-sans gap-4">
          <p>© {currentYear} Aroma Oasis Cafe. Portfolio Demo Project | Created by AP Web Development</p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-heading">
            <span className="text-accent-gold">Line ID: 11aprily</span>
            <a href="mailto:tonporza01@gmail.com" className="hover:text-accent-gold transition-colors">tonporza01@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
