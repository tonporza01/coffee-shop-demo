import { useState } from 'react';
import Navbar from './components/Navbar';
import LineButton from './components/LineButton';
import Footer from './components/Footer';
import SEO from './components/SEO';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const seoData = {
    home: {
      title: "หน้าแรก | ร้านกาแฟสด ดริปพรีเมียม และเบเกอรี่โฮมเมด",
      description: "อโรมา โอเอซิส คาเฟ่ (Aroma Oasis Cafe) คาเฟ่สุดอบอุ่นบริการกาแฟดริปพิเศษและเบเกอรี่อบสดใหม่ทุกวัน"
    },
    about: {
      title: "เกี่ยวกับเรา | คัดสรรเมล็ดกาแฟไทยคุณภาพระดับพรีเมียม",
      description: "ทำความรู้จักจุดเริ่มต้น ความหลงใหลในศิลปะของกาแฟดริป และความยั่งยืนของเมล็ดกาแฟไทยภาคเหนือ"
    },
    services: {
      title: "เมนูและบริการ | กาแฟดริป ชาเขียวมัทฉะ และบริการเดลิเวอรี่",
      description: "เลือกสั่งเครื่องดื่มแก้วโปรด ทั้งกาแฟสดสเปเชียลตี้ เบเกอรี่ พร้อมปุ่มสั่งผ่าน GrabFood, LINE MAN และ Foodpanda"
    },
    reviews: {
      title: "รีวิวจากลูกค้า | คะแนนความประทับใจเฉลี่ย 4.9 ดาว",
      description: "อ่านรีวิวความประทับใจจากลูกค้าจริง และเขียนแนะนำแบ่งปันประสบการณ์กาแฟของคุณ"
    },
    contact: {
      title: "ติดต่อเรา | พิกัดนิมมาน ซอย 9 เชียงใหม่ แผนที่และฟอร์มติดต่อ",
      description: "ข้อมูลเบอร์โทรศัพท์ เวลาทำการ แผนที่นำทาง และช่องทางส่งข้อความหาบาริสต้าของร้าน"
    }
  };

  const activeSeo = seoData[activeSection] || seoData.home;

  return (
    <div className="flex flex-col min-h-screen bg-accent-darkBg text-coffee-100 selection:bg-coffee-500 selection:text-white">
      {/* Dynamic SEO tags */}
      <SEO title={activeSeo.title} description={activeSeo.description} />

      {/* Shared Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Page Content */}
      <main className="flex-grow">
        {activeSection === 'home' && <Home onNavigate={handleNavigate} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'services' && <Services />}
        {activeSection === 'reviews' && <Reviews />}
        {activeSection === 'contact' && <Contact />}
      </main>

      {/* Floating LINE Contact Button */}
      <LineButton />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
