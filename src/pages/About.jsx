import { Award, ShieldCheck, Heart, Coffee } from 'lucide-react';
import dripCoffee from '../assets/drip_coffee.png';

export default function About() {
  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-accent-gold" />,
      title: "เมล็ดเกรดสเปเชียลตี้",
      description: "คัดเกรดเฉพาะเมล็ดกาแฟคะแนน Cupping Score 80+ ให้มิติรสชาติและกลิ่นเฉพาะตัวที่โดดเด่น"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent-gold" />,
      title: "สนับสนุนเกษตรกรไทย",
      description: "ร่วมงานโดยตรงกับเกษตรกรรายย่อยบนดอยปางขอน จ.เชียงราย เพื่อการค้ารับซื้อที่เป็นธรรมยั่งยืน"
    },
    {
      icon: <Heart className="w-6 h-6 text-accent-gold" />,
      title: "คั่วสดใหม่ทุกสัปดาห์",
      description: "คั่วกาแฟเองในปริมาณครั้งละไม่มาก (Micro-batch) เพื่อควบคุมความสดและรสชาติที่คงเส้นคงวา"
    }
  ];

  return (
    <div className="py-28 animate-fade-in font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-accent-gold font-heading text-sm font-semibold uppercase tracking-widest border-b border-accent-gold pb-1">Our Story</span>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white mt-4">
            เรื่องราวของ <span className="text-accent-gold text-glow">Aroma Oasis</span>
          </h1>
          <div className="h-1 w-20 bg-accent-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* Narrative Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              จุดเริ่มต้นจากความหลงใหลในความสมบูรณ์แบบของกาแฟดริป
            </h2>
            <div className="h-0.5 w-16 bg-accent-gold"></div>
            
            <p className="text-coffee-200 text-sm sm:text-base leading-relaxed font-sans font-light">
              ที่ <span className="text-white font-semibold">อโรมา โอเอซิส คาเฟ่</span> เราเชื่อว่ากาแฟหนึ่งแก้วคือผลงานศิลปะชิ้นเอก การเดินทางเริ่มต้นขึ้นจากการเดินทางขึ้นดอยภาคเหนือของไทยเพื่อตามหาเมล็ดกาแฟที่มีโปรไฟล์รสชาติดีที่สุด เราได้พบและคัดสรรเมล็ดพันธุ์อาราบิก้าแท้จากเกษตรกรไทยในแหล่งปลูกระดับความสูงกว่า 1,200 เมตรเหนือระดับน้ำทะเล
            </p>
            
            <p className="text-coffee-300 text-sm sm:text-base leading-relaxed font-sans font-light">
              ด้วยกรรมวิธีการคั่วแบบเฉพาะตัวที่ควบคุมสภาวะอย่างแม่นยำและการชงแบบดริปด้วยมือแบบดั้งเดิม (Pour Over) บาริสต้าของเราจะดึงเอาความหอมหวาน กลิ่นอายผลไม้ และรสสัมผัสที่เป็นเอกลักษณ์ของเมล็ดกาแฟแต่ละตัวออกมาอย่างละมุนละไม เพื่อปลุกประสาทสัมผัสของคุณให้สดชื่นในทุก ๆ เช้า
            </p>

            <blockquote className="border-l-4 border-accent-gold pl-4 py-2 my-6 bg-accent-cardBg/30 rounded-r-xl">
              <p className="text-accent-goldLight italic text-sm font-heading font-medium">
                "ไม่ใช่แค่กาแฟ แต่คือประสบการณ์และรอยยิ้มที่คุณจะได้รับกลับไปในทุกครั้งที่มาเยือนโอเอซิสแห่งนี้"
              </p>
            </blockquote>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            {/* Decorative frames */}
            <div className="absolute -inset-4 border border-accent-gold/20 rounded-3xl translate-x-2 translate-y-2 pointer-events-none"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-accent-gold/10">
              <img 
                src={dripCoffee} 
                alt="Craft Drip Coffee" 
                loading="lazy"
                width="500"
                height="600"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Float badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent-gold text-accent-darkBg p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="bg-accent-darkBg/10 p-2 rounded-xl">
                <Coffee className="w-6 h-6 text-accent-darkBg" />
              </div>
              <div>
                <p className="text-xs uppercase font-heading font-bold text-accent-darkBg/60">Crafted by</p>
                <p className="text-sm font-heading font-extrabold">Professional Barista</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="glass-card rounded-3xl p-8 border border-white/5 relative hover:border-accent-gold/20 hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-accent-gold/5 rounded-2xl flex items-center justify-center mb-6 border border-accent-gold/10">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">{item.title}</h3>
              <p className="text-coffee-300 text-sm leading-relaxed font-sans font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
