
import { useState, useEffect } from "react";

const OurCraft = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('our-craft');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="our-craft" className="py-20 bg-copper-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Craft
            </h2>
            <p className="text-xl text-copper-100 mb-8 leading-relaxed">
              Each piece is hand-forged by artisans using techniques passed down for generations. 
              From the hammered textures to the polished finish, every detail reflects centuries 
              of metalworking mastery.
            </p>
            
            <blockquote className="border-l-4 border-copper-400 pl-6 mb-8">
              <p className="text-lg italic text-copper-200 mb-4">
                "Each piece is hand-forged by artisans using techniques passed down for generations."
              </p>
            </blockquote>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-copper-400 rounded-full"></div>
                <span className="text-copper-100">Traditional hammering techniques</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-copper-400 rounded-full"></div>
                <span className="text-copper-100">Hand-polished to perfection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-copper-400 rounded-full"></div>
                <span className="text-copper-100">Sustainable rural workshops</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80"
                alt="Artisan crafting copper vessels"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-copper-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCraft;
