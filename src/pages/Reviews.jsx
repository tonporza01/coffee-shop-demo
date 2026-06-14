import { useState } from 'react';
import { Star, MessageSquare, Quote, Sparkles } from 'lucide-react';

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "ธนพล พิริยศิริ",
      rating: 5,
      date: "2 วันที่แล้ว",
      comment: "เดอร์ตี้คอฟฟี่คือที่สุด นมสดเย็นเจี๊ยบสูตรเฉพาะผสมเอสเพรสโซช็อตพรีเมียม หวานมันกลมกล่อมมาก ครัวซองต์อัลมอนด์อบมาร้อนๆ แป้งกรอบนอกนุ่มใน ลงตัวมากครับ แนะนำร้านนี้เลย!"
    },
    {
      id: 2,
      name: "ณิชชา เกียรติวรวงศ์",
      rating: 5,
      date: "1 สัปดาห์ที่แล้ว",
      comment: "กาแฟดริปดีมากค่ะ เมล็ดกาแฟมีให้เลือกเยอะ บาริสต้าแนะนำเก่งมาก มีเมล็ดสเปเชียลตี้คัพปิ้งสกอร์สูงๆ ร้านสวยเงียบสงบ เหมาะกับการมานั่งทำงานหรืออ่านหนังสือเสาร์อาทิตย์มากค่ะ"
    },
    {
      id: 3,
      name: "วรุตม์ เจริญพร",
      rating: 5,
      date: "2 สัปดาห์ที่แล้ว",
      comment: "สั่งเดลิเวอรี่มากินบ่อยมาก การแพ็กของเขาคือที่สุด ซีลแก้วดีไม่มีหก มีแยกน้ำแข็งให้ด้วย เมนูชาพีชอู่หลงคือหอมสดชื่น ดับร้อนได้ดีมากๆ ครับ ไว้จะหาโอกาสไปลองชิมหน้าร้านสักครั้ง"
    },
    {
      id: 4,
      name: "พัชราภา เลิศวิจิตร",
      rating: 4,
      date: "3 สัปดาห์ที่แล้ว",
      comment: "ร้านตกแต่งสวยงาม มีสไตล์ ถ่ายรูปมุมไหนก็ปัง เครื่องดื่มชาเขียวมัทฉะอุจิเข้มข้นมากก ไม่หวานเกินไป แต่อาจจะต้องเผื่อเวลานิดนึงเพราะคนค่อนข้างเยอะช่วงวันหยุดค่ะ"
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleRatingClick = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    const newReviewItem = {
      id: Date.now(),
      name: formData.name,
      rating: formData.rating,
      date: "เมื่อสักครู่",
      comment: formData.comment
    };

    setReviews([newReviewItem, ...reviews]);
    setFormData({ name: '', rating: 5, comment: '' });
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 4000);
  };

  return (
    <div className="py-28 animate-fade-in font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent-gold font-heading text-sm font-semibold uppercase tracking-widest border-b border-accent-gold pb-1">Testimonials</span>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white mt-4">
            เสียงตอบรับจาก <span className="text-accent-gold text-glow">ลูกค้าคนสำคัญ</span>
          </h1>
          <div className="h-1 w-20 bg-accent-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* Overview Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
          {/* Stats Box */}
          <div className="lg:col-span-4 bg-[#110e0a] border border-accent-gold/15 rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-2xl"></div>
            
            <span className="text-white/60 text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider mb-2">คะแนนรีวิวเฉลี่ย</span>
            <span className="text-5xl sm:text-6xl font-heading font-extrabold text-white text-glow mb-4">4.9</span>
            <div className="flex gap-1.5 mb-4 text-accent-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <p className="text-coffee-300 font-sans text-sm">
              จากรีวิวทั้งหมดกว่า <span className="text-white font-semibold">500+ ช่องทาง</span> <br />
              (Google Map, LINE MAN, Wongnai)
            </p>
          </div>

          {/* Interactive review form */}
          <div className="lg:col-span-8 bg-accent-cardBg border border-white/5 rounded-3xl p-8 relative">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-accent-gold" />
              แบ่งปันความประทับใจของคุณ
            </h2>
            
            {submitSuccess && (
              <div className="absolute inset-0 bg-accent-cardBg/95 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center text-center p-6 z-10 transition-all duration-300">
                <div className="bg-accent-gold/10 p-4 rounded-full border border-accent-gold/30 mb-4 animate-bounce">
                  <Sparkles className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">บันทึกรีวิวของคุณเรียบร้อยแล้ว!</h3>
                <p className="text-coffee-300 font-sans text-sm max-w-xs">
                  ขอบพระคุณสำหรับข้อเสนอแนะและเสียงสะท้อนเพื่อร้านค้าของเรา
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-heading font-semibold text-coffee-300 uppercase mb-2">ชื่อของคุณ</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="เช่น คุณสมชาย รักกาแฟ"
                    className="w-full bg-accent-darkBg border border-white/10 hover:border-accent-gold/30 focus:border-accent-gold rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-colors font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-coffee-300 uppercase mb-2">ให้คะแนนความพึงพอใจ</label>
                  <div className="flex gap-2 py-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className="focus:outline-none transition-transform hover:scale-120"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= formData.rating
                              ? 'text-accent-gold fill-current'
                              : 'text-coffee-800'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-heading font-semibold text-coffee-300 uppercase mb-2">ความเห็นของคุณ</label>
                <textarea
                  required
                  rows="3"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  placeholder="เขียนรีวิว เช่น บริการดี กาแฟหอมเบเกอรี่อร่อยมาก..."
                  className="w-full bg-accent-darkBg border border-white/10 hover:border-accent-gold/30 focus:border-accent-gold rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-colors font-sans resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-accent-gold hover:bg-coffee-500 text-accent-darkBg hover:text-white font-heading font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:scale-105"
                >
                  ส่งความเห็นรีวิว
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 relative flex flex-col justify-between group">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-accent-gold/5 group-hover:text-accent-gold/10 transition-colors pointer-events-none" />
              
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent-gold/15 text-accent-gold font-heading font-bold rounded-xl flex items-center justify-center border border-accent-gold/10">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-heading font-bold text-white">{review.name}</h3>
                      <span className="text-coffee-400 text-[10px] sm:text-xs font-sans">{review.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-accent-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 fill-current ${
                          i < review.rating ? 'text-accent-gold' : 'text-coffee-800'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Comment text */}
                <p className="text-coffee-200 text-xs sm:text-sm font-sans font-light leading-relaxed">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
