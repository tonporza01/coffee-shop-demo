import { ArrowRight, Tag, Truck, Gift, Clock, Sparkles } from 'lucide-react';
import cafeInterior from '../assets/cafe_interior.png';

export default function Home({ onNavigate }) {
  const promotions = [
    {
      id: 1,
      icon: <Gift className="w-8 h-8 text-accent-gold" />,
      title: "Early Bird Combo",
      subtitle: "คุ้มค่ายามเช้า 07:00 - 09:00 น.",
      description: "จับคู่ Hot Drip Coffee (เมล็ด Single Origin) + ครัวซองต์เนยสดฝรั่งเศส เพียง 150 บาท (จากปกติ 210 บาท)",
      tag: "ยอดนิยม"
    },
    {
      id: 2,
      icon: <Truck className="w-8 h-8 text-accent-gold" />,
      title: "Free Delivery",
      subtitle: "ส่งฟรีเมื่อสั่งผ่านเดลิเวอรี่ครบ 350.-",
      description: "สั่งผ่าน LINE MAN หรือ GrabFood ใส่รหัส AROMAFREE รับสิทธิ์ส่งฟรีในระยะ 5 กิโลเมตรแรกทันที",
      tag: "เดลิเวอรี่"
    },
    {
      id: 3,
      icon: <Tag className="w-8 h-8 text-accent-gold" />,
      title: "Line Add Friend",
      subtitle: "แอดไลน์ลดทันที 10%",
      description: "แอดไลน์ Line ID: 11aprily รับคูปองส่วนลด 10% สำหรับใช้เป็นส่วนลดในการซื้อเครื่องดื่มแก้วแรกที่หน้าร้าน (ข้อมูลสาธิต)",
      tag: "เพื่อนใหม่"
    }
  ];

  const specials = [
    {
      name: "Signature Dirty Coffee",
      thaiName: "เดอร์ตี้ คอฟฟี่ สูตรพิเศษ",
      price: "120.-",
      desc: "นมสดเย็นจัดสูตรลับเฉพาะของร้าน ท็อปด้านบนด้วยเอสเพรสโซช็อตเข้มข้นแบบ Ristretto ให้รสสัมผัสหอมมันสลับเข้มในทุกคำที่ดื่ม"
    },
    {
      name: "Drip Coffee (Chiang Mai Single Origin)",
      thaiName: "กาแฟดริป เมล็ดเอธิโอเปีย-เชียงใหม่",
      price: "140.-",
      desc: "กาแฟดริปสกัดอย่างพิถีพิถัน ให้โทนรสชาติฟรุตตี้หอมหวานสดชื่น ดื่มง่าย รสสัมผัสละมุนละไมยาวนาน"
    },
    {
      name: "Premium Almond Croissant",
      thaiName: "ครัวซองต์อัลมอนด์พรีเมียม",
      price: "95.-",
      desc: "ครัวซองต์เนยแท้นำเข้าจากฝรั่งเศส อบสดใหม่ทุกเช้า แป้งกรอบนอกนุ่มใน สอดไส้ครีมอัลมอนด์รสหวานกำลังดี"
    }
  ];

  return (
    <div className="animate-fade-in font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={cafeInterior} 
            alt="Cafe Interior" 
            loading="eager"
            fetchpriority="high"
            className="w-full h-full object-cover scale-105 filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent-darkBg via-accent-darkBg/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
          <div className="inline-flex items-center space-x-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full px-4 py-1.5 mb-6 animate-pulse-slow">
            <Sparkles className="w-4 h-4 text-accent-gold" />
            <span className="text-accent-goldLight text-xs sm:text-sm font-heading font-medium tracking-wide">
              ยินดีต้อนรับสู่โอเอซิสของคนรักกาแฟ
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl text-white leading-tight mb-6 tracking-wide drop-shadow-lg">
            สัมผัสสุนทรียภาพแห่ง <br />
            <span className="text-accent-gold bg-gradient-to-r from-accent-gold via-coffee-300 to-accent-goldLight bg-clip-text text-transparent text-glow">
              กาแฟดริปพิเศษ
            </span>
          </h1>

          <p className="text-coffee-200 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-light">
            ร้านกาแฟสดและเบเกอรี่โฮมเมด สไตล์โมเดิร์นคลาสสิกใจกลางนิมมาน <br className="hidden sm:inline" />
            รังสรรค์ทุกเมนูด้วยความประณีตจากเมล็ดกาแฟไทยชั้นเลิศและวัตถุดิบระดับพรีเมียม
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto bg-accent-gold hover:bg-coffee-500 text-accent-darkBg hover:text-white font-heading font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-accent-gold/25 hover:scale-105 flex items-center justify-center gap-2"
            >
              สั่งกาแฟและดูเมนู
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-accent-gold px-8 py-4 rounded-full font-heading font-bold transition-all duration-300 hover:scale-105"
            >
              ดูแผนที่หน้าร้าน
            </button>
          </div>

          {/* Quick Info bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-16 max-w-3xl mx-auto text-left border-t border-white/10 mt-16 font-sans">
            <div>
              <p className="text-accent-gold font-heading font-bold text-xl sm:text-2xl">07:00 - 18:00</p>
              <p className="text-coffee-300 text-xs sm:text-sm">เปิดให้บริการทุกวัน</p>
            </div>
            <div>
              <p className="text-accent-gold font-heading font-bold text-xl sm:text-2xl">เชียงใหม่</p>
              <p className="text-coffee-300 text-xs sm:text-sm">พิกัด นิมมาน ซอย 9</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-accent-gold font-heading font-bold text-xl sm:text-2xl">100% Organic</p>
              <p className="text-coffee-300 text-xs sm:text-sm">เมล็ดออร์แกนิกคัดสรรพิเศษ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-24 bg-accent-darkBg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white mb-4">
              โปรโมชันพิเศษวันนี้ <span className="text-accent-gold">Promotions</span>
            </h2>
            <div className="h-1 w-20 bg-accent-gold mx-auto rounded-full"></div>
            <p className="text-coffee-300 font-sans mt-4 max-w-xl mx-auto text-sm sm:text-base">
              เลือกรับข้อเสนอสุดคุ้มเพื่อความฟินในแก้วพิเศษของคุณ ทั้งสำหรับทานที่ร้านและจัดส่งถึงมือ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promotions.map((promo) => (
              <div key={promo.id} className="glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
                <span className="absolute top-4 right-4 bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs font-heading px-3 py-1 rounded-full">
                  {promo.tag}
                </span>
                <div>
                  <div className="mb-6 p-4 bg-accent-gold/5 rounded-2xl inline-block border border-accent-gold/10">
                    {promo.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">{promo.title}</h3>
                  <h4 className="text-sm font-heading text-accent-gold/80 mb-4 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {promo.subtitle}
                  </h4>
                  <p className="text-coffee-300 text-sm leading-relaxed font-sans font-light">
                    {promo.description}
                  </p>
                </div>
                <div className="pt-8">
                  <button
                    onClick={() => {
                      if (promo.id === 2) {
                        onNavigate('services');
                      } else {
                        onNavigate('contact');
                      }
                    }}
                    className="w-full bg-accent-cardBg border border-accent-gold/20 hover:border-accent-gold text-white hover:text-accent-darkBg hover:bg-accent-gold text-sm font-heading font-semibold py-3 rounded-xl transition-all duration-300"
                  >
                    {promo.id === 2 ? "สั่งผ่าน LINE MAN" : "รับสิทธิ์เลย"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Specials */}
      <section className="py-24 bg-[#110e0a] border-y border-accent-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Side */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-accent-gold font-heading text-sm font-semibold uppercase tracking-widest border-b border-accent-gold pb-1">Menu Highlights</span>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
                เมนูแนะนําวันนี้ <br />
                <span className="text-accent-gold text-glow">ที่ต้องลิ้มลอง</span>
              </h2>
              <p className="text-coffee-300 font-sans leading-relaxed text-sm sm:text-base">
                บาริสต้าของเราขอแนะนำเมนูไฮไลต์ที่ผสมผสานระหว่างความคิดสร้างสรรค์และคุณภาพของวัตถุดิบ มอบมิติรสชาติกาแฟที่พิเศษสุด
              </p>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="bg-accent-gold hover:bg-coffee-500 text-accent-darkBg hover:text-white font-heading font-bold px-6 py-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-105 flex items-center gap-2"
                >
                  เปิดดูเมนูทั้งหมด
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* List Side */}
            <div className="lg:col-span-7 space-y-8">
              {specials.map((item, idx) => (
                <div key={idx} className="flex gap-6 p-6 bg-accent-darkBg/60 rounded-3xl border border-white/5 hover:border-accent-gold/10 hover:bg-accent-cardBg/90 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-accent-gold/10 group-hover:bg-accent-gold text-accent-gold group-hover:text-accent-darkBg font-heading font-bold text-lg rounded-full flex items-center justify-center shrink-0 transition-colors duration-300">
                    0{idx + 1}
                  </div>
                  <div className="space-y-2 flex-grow">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-heading font-bold text-white text-lg group-hover:text-accent-gold transition-colors duration-300">
                        {item.thaiName}
                      </h3>
                      <span className="text-accent-gold font-heading font-semibold ml-4 shrink-0">{item.price}</span>
                    </div>
                    <p className="text-coffee-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
