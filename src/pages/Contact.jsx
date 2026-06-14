import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "กรุณากรอกชื่อ-นามสกุล";
    
    // Thai phone validation (starts with 0 and must have 9-10 digits)
    const phoneRegex = /^0[0-9]{8,9}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = "กรุณากรอกเบอร์โทรศัพท์";
    } else if (!phoneRegex.test(formData.phone.replace(/[-\s]/g, ""))) {
      tempErrors.phone = "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง (เช่น 0891234567)";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
      }
    }

    if (!formData.subject.trim()) tempErrors.subject = "กรุณาเลือกหรือระบุหัวข้อติดต่อ";
    if (!formData.message.trim()) tempErrors.message = "กรุณากรอกข้อความรายละเอียด";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      }, 1500);
    }
  };

  return (
    <div className="py-28 animate-fade-in font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent-gold font-heading text-sm font-semibold uppercase tracking-widest border-b border-accent-gold pb-1">Get in Touch</span>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white mt-4">
            ติดต่อสอบถาม <span className="text-accent-gold text-glow">Contact Us</span>
          </h1>
          <div className="h-1 w-20 bg-accent-gold mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Side: Contact Information & Stylized Map */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                แวะมาดื่มกาแฟกับเรา
              </h2>
              <p className="text-coffee-300 font-sans text-sm sm:text-base leading-relaxed">
                ร้านของเราตั้งอยู่บนย่านนิมมานเหมินท์ซอย 9 จังหวัดเชียงใหม่ ยินดีต้อนรับทุกท่านมาสัมผัสรสชาติกาแฟสดและขนมอบร้อนๆ ทุกวันครับ
              </p>

              {/* Icon Information Blocks */}
              <div className="space-y-4 text-sm font-sans">
                {/* Contact Person */}
                <div className="flex p-4 bg-accent-cardBg/40 border border-white/5 rounded-2xl">
                  <div className="w-5 h-5 text-accent-gold mr-4 shrink-0 mt-0.5 flex items-center justify-center font-bold text-sm">👤</div>
                  <div>
                    <h3 className="font-heading font-bold text-white mb-1">ผู้พัฒนาเว็บไซต์ (Contact Person)</h3>
                    <p className="text-accent-gold font-semibold">AP Web Development</p>
                  </div>
                </div>

                {/* Quotation Phone replacement */}
                <div className="flex p-4 bg-accent-cardBg/40 border border-white/5 rounded-2xl">
                  <Phone className="w-5 h-5 text-accent-gold mr-4 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-white mb-1">เบอร์โทรศัพท์</h3>
                    <p className="text-coffee-300">ติดต่อเพื่อขอใบเสนอราคา (Contact for quotation)</p>
                  </div>
                </div>

                {/* Line ID */}
                <div className="flex p-4 bg-accent-cardBg/40 border border-white/5 rounded-2xl">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-accent-gold mr-4 shrink-0 mt-0.5">
                    <path d="M24 10.3c0-5.7-5.4-10.3-12-10.3S0 4.6 0 10.3c0 5.1 4.3 9.3 10.1 10.1.4.1.9.3.9.7v2c0 .4.2.6.5.6.3 0 .5-.1.7-.3l2.8-2.8c3.9-1.2 9-5.1 9-10.3zm-14.7 3H8v-5.2c0-.4-.3-.7-.7-.7s-.7.3-.7.7v5.9c0 .4.3.7.7.7h2c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zm3.4-5.9c0-.4-.3-.7-.7-.7s-.7.3-.7.7v5.9c0 .4.3.7.7.7s.7-.3.7-.7V7.4zm5.5 0h-2.2v3.7h-.3V7.4h-2.2v5.9h4.7v-.7h-4V10.4h4V7.4zm4.4 0h-3.4v5.9h3.4v-.7h-2.7V10.4h2.4v-.7h-2.4V8.1h2.7v-.7z" />
                  </svg>
                  <div>
                    <h3 className="font-heading font-bold text-white mb-1">Line ID</h3>
                    <a href="https://line.me/ti/p/~11aprily" target="_blank" rel="noopener noreferrer" className="text-coffee-300 hover:text-accent-gold transition-colors font-semibold">11aprily</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex p-4 bg-accent-cardBg/40 border border-white/5 rounded-2xl">
                  <Mail className="w-5 h-5 text-accent-gold mr-4 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-white mb-1">อีเมล (Email)</h3>
                    <a href="mailto:tonporza01@gmail.com" className="text-coffee-300 hover:text-accent-gold transition-colors font-semibold">tonporza01@gmail.com</a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex p-4 bg-accent-cardBg/40 border border-white/5 rounded-2xl">
                  <MapPin className="w-5 h-5 text-accent-gold mr-4 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-white mb-1">ที่ตั้งร้านสาธิต</h3>
                    <p className="text-coffee-300">123 ถนนนิมมานเหมินท์ ซอย 9 ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Vector Map representation */}
            <div className="bg-[#110e0a] border border-accent-gold/15 rounded-3xl p-6 relative overflow-hidden h-60 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-2xl"></div>
              
              <div className="flex items-center justify-between z-10">
                <span className="text-xs font-heading font-bold text-accent-gold uppercase tracking-wider">Aroma Oasis Map Pin</span>
                <span className="text-[10px] bg-accent-gold/15 text-accent-gold border border-accent-gold/20 px-2.5 py-0.5 rounded-full">นิมมานฯ ซอย 9</span>
              </div>

              {/* Minimal SVG Graphic Map representing street crossing */}
              <div className="w-full h-28 relative my-2 border border-white/5 rounded-2xl bg-accent-darkBg overflow-hidden flex items-center justify-center">
                {/* Street Lines */}
                <div className="absolute h-full w-4 bg-coffee-950/40 left-1/4"></div>
                <div className="absolute h-4 w-full bg-coffee-950/40 top-1/2"></div>
                <div className="absolute h-full w-4 bg-coffee-950/40 left-3/4"></div>
                
                {/* Street Labels */}
                <span className="absolute text-[8px] text-coffee-500 top-2 left-2 font-mono">Nimman Rd.</span>
                <span className="absolute text-[8px] text-coffee-500 bottom-2 right-12 font-mono">Soi 9</span>

                {/* Cafe Pin Indicator */}
                <div className="absolute top-[42%] left-[68%] z-10 flex flex-col items-center">
                  <div className="relative">
                    <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-accent-gold/40 -left-1 -top-1"></span>
                    <div className="bg-accent-gold text-accent-darkBg p-1.5 rounded-full shadow-lg border border-white/25">
                      ☕
                    </div>
                  </div>
                  <span className="text-[9px] bg-accent-gold text-accent-darkBg font-heading font-extrabold px-1.5 py-0.5 rounded shadow mt-1">Aroma Oasis</span>
                </div>

                {/* Nearby landmark */}
                <div className="absolute top-[20%] left-[10%] text-coffee-600 text-[9px] font-heading font-medium">Nimman Gallery</div>
              </div>

              <a
                href="https://maps.google.com/?q=Nimman+Soi+9+Chiang+Mai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center font-heading text-xs font-bold text-accent-gold hover:text-white transition-colors py-2 border border-accent-gold/20 hover:border-accent-gold rounded-xl z-10"
              >
                เปิดนําทางด้วย Google Maps
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 bg-accent-cardBg border border-white/5 rounded-[2rem] p-8 relative">
            
            {isSubmitted && (
              <div className="absolute inset-0 bg-accent-cardBg/98 backdrop-blur-sm rounded-[2rem] flex flex-col items-center justify-center text-center p-6 z-10 transition-all duration-300">
                <div className="bg-accent-gold/15 p-5 rounded-full border border-accent-gold/30 mb-5 animate-pulse-slow">
                  <Sparkles className="w-10 h-10 text-accent-gold" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">ส่งข้อความสำเร็จ!</h3>
                <p className="text-coffee-300 font-sans text-sm max-w-sm leading-relaxed mb-6">
                  เจ้าหน้าที่หรือบาริสต้าของเราได้รับข้อความของท่านแล้ว เราจะติดต่อกลับโดยเร็วที่สุดผ่านช่องทางเบอร์โทรศัพท์หรืออีเมลที่ระบุไว้
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-accent-gold hover:bg-coffee-500 text-accent-darkBg hover:text-white font-heading font-bold px-6 py-2.5 rounded-full transition-all duration-300"
                >
                  ส่งข้อความใหม่
                </button>
              </div>
            )}

            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6">
              ส่งข้อความหาบาริสต้า
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-heading font-semibold text-coffee-300 uppercase mb-2">ชื่อ - นามสกุล <span className="text-accent-gold">*</span></label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-accent-darkBg border rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold transition-colors font-sans ${
                      errors.name ? 'border-red-500/50' : 'border-white/10 hover:border-accent-gold/30'
                    }`}
                    placeholder="กรอกชื่อและนามสกุล"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-heading font-semibold text-coffee-300 uppercase mb-2">เบอร์โทรศัพท์ <span className="text-accent-gold">*</span></label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-accent-darkBg border rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold transition-colors font-sans ${
                      errors.phone ? 'border-red-500/50' : 'border-white/10 hover:border-accent-gold/30'
                    }`}
                    placeholder="เช่น 0891234567"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div>
                  <label className="block text-xs font-heading font-semibold text-coffee-300 uppercase mb-2">อีเมล (ถ้ามี)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-accent-darkBg border rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold transition-colors font-sans ${
                      errors.email ? 'border-red-500/50' : 'border-white/10 hover:border-accent-gold/30'
                    }`}
                    placeholder="yourname@domain.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-xs font-heading font-semibold text-coffee-300 uppercase mb-2">หัวข้อเรื่องที่ติดต่อ <span className="text-accent-gold">*</span></label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full bg-accent-darkBg border rounded-xl py-3 px-4 text-sm text-coffee-300 focus:outline-none focus:border-accent-gold transition-colors font-heading ${
                      errors.subject ? 'border-red-500/50' : 'border-white/10 hover:border-accent-gold/30'
                    }`}
                  >
                    <option value="">เลือกหัวข้อติดต่อ</option>
                    <option value="จองโต๊ะหรือสถานที่">จองโต๊ะจัดกิจกรรม / สถานที่</option>
                    <option value="สั่งจัดชุดเบรคหรือจัดเลี้ยง">สั่งชุดจัดเบรค (Catering) / งานเลี้ยง</option>
                    <option value="ติชมบริการหรือเสนอแนะ">ติชมบริการ / เสนอแนะเมล็ดกาแฟ</option>
                    <option value="อื่นๆ">เรื่องอื่นๆ</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-heading font-semibold text-coffee-300 uppercase mb-2">รายละเอียดข้อความ <span className="text-accent-gold">*</span></label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-accent-darkBg border rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold transition-colors font-sans resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-white/10 hover:border-accent-gold/30'
                  }`}
                  placeholder="รายละเอียดความต้องการ เช่น จัดเบรควันที่เท่าไหร่ จำนวนกี่ชุด..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-sans">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-gold hover:bg-coffee-500 text-accent-darkBg hover:text-white font-heading font-extrabold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-xl shadow-accent-gold/10 hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-accent-darkBg border-t-transparent rounded-full animate-spin"></div>
                      กำลังส่งข้อความ...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      ส่งข้อความ
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
