import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 text-blue-300 opacity-20">
          <Heart className="w-16 h-16 animate-pulse" />
        </div>
        <div className="absolute bottom-10 left-10 text-purple-300 opacity-15">
          <Mail className="w-12 h-12 animate-bounce-slow" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-5">
          <div className="w-64 h-64 rounded-full border-2 border-current animate-spin-slow"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <div className="text-center md:text-right animate-fadeInScale">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300 glowing-text">مسابقه المولد النبوي الشريف</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
              نسعى لتشجيع الطلاب على حفظ وتلاوة القرآن الكريم وتعلم تعاليم الدين الإسلامي
            </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-pink-300">
                <Heart className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-semibold">صنع بحب لطلاب القرآن الكريم</span>
              </div>
            </div>
          </div>

          <div className="text-center animate-fadeInScale" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-6 text-green-300 glowing-text">تواصل معنا</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <a href="mailto:tarekaboya2019@gmail.com" className="text-blue-100 hover:text-white transition-colors font-medium">
                  tarekaboya2019@gmail.com
                </a>
              </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                    <div className="bg-green-500 p-2 rounded-full">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <a href="tel:+01559181558" className="text-blue-100 hover:text-white transition-colors font-medium">
                    +0155 918 1558
                  </a>
                  </div>
                  <div className="flex items-center justify-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                    <div className="bg-green-500 p-2 rounded-full">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <a href="tel:+201205362040" className="text-blue-100 hover:text-white transition-colors font-medium">
                    +2012 053 6204
                  </a>
                  </div>
                  <div className="flex items-center justify-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                    <div className="bg-green-500 p-2 rounded-full">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <a href="tel:+201276099675" className="text-blue-100 hover:text-white transition-colors font-medium">
                    +2012 7609 9675
                  </a>
                </div>
              </div>
                <div className="flex items-center justify-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                  <div className="bg-red-500 p-2 rounded-full">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/BA3xbuvekc8kgKaMA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors font-medium"
                  >
                    الجامع الشرقي، دمليج، منوف، المنوفية
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left animate-fadeInScale" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-6 text-purple-300 glowing-text">روابط مهمة</h4>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                  <a href="#" className="text-blue-100 hover:text-white transition-colors font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    قوانين المسابقة
                  </a>
                </div>
                <div className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                  <a href="#" className="text-blue-100 hover:text-white transition-colors font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    الأسئلة الشائعة
                  </a>
                </div>
                <div className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                  <a href="#" className="text-blue-100 hover:text-white transition-colors font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    اتصل بنا
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center relative z-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <p className="text-blue-200 text-lg font-semibold mb-2">
              &copy; 2025 مسابقه المولد النبوي الشريف بالجامع الشرقي. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center justify-center gap-2 text-purple-300">
              <Heart className="w-4 h-4 animate-pulse" />
              <span className="text-sm">تم التطوير بحب وإخلاص لخدمة كتاب الله</span>
              <Heart className="w-4 h-4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};