
import { useState, useEffect } from "react";
import { Shield, Heart, Leaf } from "lucide-react";

const WhyCopper = () => {
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

    const section = document.getElementById('why-copper');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: "Antimicrobial Properties",
      description: "Naturally purifies water by eliminating harmful bacteria and microorganisms."
    },
    {
      icon: Heart,
      title: "Boosts Immunity", 
      description: "Rich in essential minerals that support your body's natural defense system."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly & Reusable",
      description: "Sustainable choice that reduces plastic waste while lasting generations."
    }
  ];

  return (
    <section id="why-copper" className="py-20 bg-gradient-to-b from-copper-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-copper-800 mb-6">
            Why Copper?
          </h2>
          <p className="text-xl text-copper-600 max-w-2xl mx-auto">
            Discover the ancient wisdom behind copper's healing properties, 
            validated by modern science.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className={`interactive-card text-center p-8 bg-white rounded-2xl shadow-lg copper-shimmer ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-copper-100 rounded-full">
                    <IconComponent size={48} className="text-copper-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-copper-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-copper-600 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="card-shimmer absolute inset-0 rounded-2xl opacity-0"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyCopper;
