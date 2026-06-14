import { useState } from 'react';
import { ShoppingBag, Coffee, Cake, Flame, Star, Compass } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('coffee');

  const categories = [
    { id: 'coffee', label: 'กาแฟสด & ดริป', icon: <Coffee className="w-4 h-4" /> },
    { id: 'non-coffee', label: 'เครื่องดื่มอื่นๆ', icon: <Compass className="w-4 h-4" /> },
    { id: 'bakery', label: 'เบเกอรี่อบร้อน', icon: <Cake className="w-4 h-4" /> },
  ];

  const menuItems = {
    coffee: [
      {
        name: "Premium Hand Drip",
        thaiName: "กาแฟดริปพิเศษประจำวัน",
        price: "135.-",
        desc: "เมล็ดกาแฟสายพันธุ์ไทยและต่างประเทศ เปลี่ยนตามฤดูกาล สกัดด้วยมือแก้วต่อแก้ว",
        tags: ["บาริสต้าแนะนำ", "Single Origin"],
        isHot: true,
        isIce: false
      },
      {
        name: "Aroma Espresso",
        thaiName: "เอสเพรสโซร้อนช็อตเข้ม",
        price: "80.-",
        desc: "สกัดกาแฟเข้มข้นจากเมล็ด Signature Blend โทนนัทตี้ ช็อกโกแลต บอดี้แน่นหนา",
        tags: ["คลาสสิก"],
        isHot: true,
        isIce: false
      },
      {
        name: "Iced Latte Craft",
        thaiName: "ลาเต้เย็นคราฟท์",
        price: "105.-",
        desc: "นมสดพาสเจอร์ไรส์หอมมัน ผสมผสานอย่างลงตัวกับเอสเพรสโซช็อตพรีเมียม เสิร์ฟแยกชั้นสวยงาม",
        tags: ["ขายดีที่สุด"],
        isHot: false,
        isIce: true
      },
      {
        name: "Signature Orange Tonic",
        thaiName: "เอสเพรสโซ่น้ำส้มโทนิค",
        price: "125.-",
        desc: "ความสดชื่นจากน้ำส้มคั้นสดสายพันธุ์สายน้ำผึ้ง ผสมโทนิคซ่า และท็อปด้วยเอสเพรสโซเข้มข้น",
        tags: ["สดชื่น"],
        isHot: false,
        isIce: true
      }
    ],
    'non-coffee': [
      {
        name: "Uji Matcha Latte",
        thaiName: "อูจิ มัทฉะ ลาเต้",
        price: "120.-",
        desc: "ผงมัทฉะแท้เกรดพิธีการนำเข้าจากเมืองอูจิ ประเทศญี่ปุ่น ชงถ้วยต่อถ้วย ผสมนมสดรสละมุน",
        tags: ["มัทฉะแท้"],
        isHot: true,
        isIce: true
      },
      {
        name: "Royal Belgian Cocoa",
        thaiName: "โกโก้เบลเยียมเข้มข้น",
        price: "110.-",
        desc: "ดาร์กโกโก้นำเข้าจากเบลเยียม ชงแบบเข้มข้นพิเศษ มีความขมปนหวานลงตัวสะใจคนรักช็อกโกแลต",
        tags: ["เข้มข้นพิเศษ"],
        isHot: true,
        isIce: true
      },
      {
        name: "Iced Peach Oolong Tea",
        thaiName: "ชาอู่หลงพีชเย็นสดชื่น",
        price: "95.-",
        desc: "ใบชาอู่หลงพรีเมียมอบกลิ่นพีชธรรมชาติ ชงสดหวานบางเบา พร้อมเนื้อพีชเชื่อมชิ้นโตเต็มคำ",
        tags: ["หอมสดชื่น"],
        isHot: false,
        isIce: true
      }
    ],
    bakery: [
      {
        name: "French Butter Croissant",
        thaiName: "ครัวซองต์เนยสดฝรั่งเศส",
        price: "85.-",
        desc: "ครัวซองต์สไตล์ดั้งเดิม แป้งหลายเลเยอร์บางกรอบ เนื้อด้านในชุ่มฉ่ำหอมเนยแท้จากแคว้นนอร์มังดี",
        tags: ["อบใหม่ทุกเช้า"],
        isHot: true,
        isIce: false
      },
      {
        name: "Classic Chocolate Brownie",
        thaiName: "บราวนี่ดาร์กช็อกโกแลต",
        price: "75.-",
        desc: "บราวนี่เนื้อหนึบ (Fudgy) ทำจากเบลเยียมดาร์กช็อกโกแลต 70% รสชาติเข้มข้นไม่หวานเลี่ยน",
        tags: ["ขายดี"],
        isHot: false,
        isIce: false
      },
      {
        name: "Premium Blueberry Scone",
        thaiName: "สโคนบลูเบอร์รี่ เสิร์ฟพร้อมคล็อตเต็ดครีม",
        price: "90.-",
        desc: "สโคนอบร้อนกรอบนอกนุ่มใน หอมกลิ่นเนยสด แทรกด้วยบลูเบอร์รี่ลูกโต เสิร์ฟเคียงครีมสดโฮมเมด",
        tags: ["แนะนำทานคู่อุ่นๆ"],
        isHot: true,
        isIce: false
      }
    ]
  };

  return (
    <div className="py-28 animate-fade-in font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent-gold font-heading text-sm font-semibold uppercase tracking-widest border-b border-accent-gold pb-1">Our Services & Menu</span>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white mt-4">
            เมนูและบริการ <span className="text-accent-gold text-glow">Menu & Delivery</span>
          </h1>
          <div className="h-1 w-20 bg-accent-gold mx-auto rounded-full mt-4"></div>
          <p className="text-coffee-300 font-sans mt-4 max-w-xl mx-auto text-sm sm:text-base">
            สัมผัสรสชาติอันพิถีพิถันจากวัตถุดิบนำเข้าชั้นดีและฝีมือการรังสรรค์ของบาริสต้ามืออาชีพ
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-3 sm:gap-6 mb-16 overflow-x-auto pb-2 scrollbar-none font-heading">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 shrink-0 ${
                activeTab === tab.id
                  ? 'bg-accent-gold text-accent-darkBg font-bold shadow-lg shadow-accent-gold/25 scale-105'
                  : 'bg-accent-cardBg border border-accent-gold/10 hover:border-accent-gold/30 text-coffee-200 hover:text-white'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {menuItems[activeTab].map((item, idx) => (
            <div key={idx} className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between hover:scale-[1.01] transition-transform">
              <div className="space-y-4">
                {/* Badges & Price */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-coffee-900/30 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-accent-gold/15 text-accent-gold text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full border border-accent-gold/10 font-heading">
                        {tag}
                      </span>
                    ))}
                    {item.isHot && <span className="bg-orange-900/20 text-orange-400 text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full border border-orange-500/10 font-heading">Hot ☕</span>}
                    {item.isIce && <span className="bg-blue-900/20 text-blue-400 text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full border border-blue-500/10 font-heading">Iced 🧊</span>}
                  </div>
                  <span className="text-xl sm:text-2xl font-heading font-extrabold text-accent-gold shrink-0">{item.price}</span>
                </div>

                {/* Names */}
                <div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-1 group-hover:text-accent-gold transition-colors">
                    {item.thaiName}
                  </h3>
                  <p className="text-coffee-400 text-xs sm:text-sm italic font-sans">{item.name}</p>
                </div>

                {/* Description */}
                <p className="text-coffee-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Integration Section */}
        <section className="bg-[#110e0a] rounded-[2.5rem] border border-accent-gold/15 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Delivery Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-950/30 border border-emerald-500/30 text-emerald-400 rounded-full px-4.5 py-1.5 font-heading text-xs sm:text-sm font-medium">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                เปิดจัดส่งตามเวลาทำการปกติ
              </div>
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
                จัดส่งตรงถึงมือคุณ <br className="hidden sm:inline" />
                <span className="text-accent-gold text-glow">ส่งต่อความฟินเหมือนทานที่คาเฟ่</span>
              </h2>
              <p className="text-coffee-300 font-sans text-sm sm:text-base leading-relaxed">
                ไม่ว่าจะบ้าน ที่ทำงาน หรือคอนโด ก็ลิ้มลองกาแฟและเบเกอรี่แก้วโปรดได้ง่าย ๆ ผ่านแอปเดลิเวอรี่ พร้อมมาตรฐานการแพ็กเครื่องดื่มและซีลฝาป้องกันเครื่องดื่มหกอย่างดีที่สุด
              </p>
              <ul className="grid grid-cols-2 gap-4 text-xs sm:text-sm font-sans text-coffee-300">
                <li className="flex items-center gap-2">✓ ซีลแก้ว 2 ชั้นป้องกันการรั่วซึม</li>
                <li className="flex items-center gap-2">✓ บรรจุในถุงเก็บความเย็นพิเศษ</li>
                <li className="flex items-center gap-2">✓ เสิร์ฟน้ำแข็งแยกใส่แก้วสเปเชียล</li>
                <li className="flex items-center gap-2">✓ สดใหม่จัดส่งจากสาขานิมมานฯ</li>
              </ul>
            </div>

            {/* Delivery Action Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-4 font-heading">
              {/* LINE MAN Button */}
              <a
                href="https://lineman.onelink.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4.5 bg-[#06c755] hover:bg-[#05ab49] text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-emerald-500/10 group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-xl">
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white/80">สั่งเดลิเวอรี่ผ่าน</p>
                    <p className="text-base font-bold">LINE MAN</p>
                  </div>
                </div>
                <span className="text-xs bg-white/25 px-3 py-1 rounded-full group-hover:bg-white/35 transition-colors">สั่งเลย</span>
              </a>

              {/* GrabFood Button */}
              <a
                href="https://grab.onelink.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4.5 bg-[#00b14f] hover:bg-[#009642] text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-green-500/10 group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-xl">
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white/80">สั่งเดลิเวอรี่ผ่าน</p>
                    <p className="text-base font-bold">GrabFood</p>
                  </div>
                </div>
                <span className="text-xs bg-white/25 px-3 py-1 rounded-full group-hover:bg-white/35 transition-colors">สั่งเลย</span>
              </a>

              {/* Foodpanda Button */}
              <a
                href="https://foodpanda.onelink.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4.5 bg-[#e21b70] hover:bg-[#c61460] text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-pink-500/10 group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-xl">
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white/80">สั่งเดลิเวอรี่ผ่าน</p>
                    <p className="text-base font-bold">Foodpanda</p>
                  </div>
                </div>
                <span className="text-xs bg-white/25 px-3 py-1 rounded-full group-hover:bg-white/35 transition-colors">สั่งเลย</span>
              </a>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
