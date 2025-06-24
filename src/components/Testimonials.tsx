
import { useState, useEffect } from "react";

const Testimonials = () => {
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

    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "I start every day with Tāmra. It's more than a bottle—it's a ritual.",
      author: "Meera",
      role: "Yoga Teacher",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b494?auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "The craftsmanship is extraordinary. You can feel the intention in every detail.",
      author: "David",
      role: "Wellness Coach",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "My morning water tastes different now. Pure, clean, and somehow more alive.",
      author: "Priya",
      role: "Nutritionist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-copper-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Community Says
          </h2>
          <p className="text-xl text-copper-200 max-w-2xl mx-auto">
            Join thousands who have transformed their daily hydration into a mindful practice.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-copper-300"
                />
                <blockquote className="text-lg text-white mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-copper-200 text-lg">
                    — {testimonial.author}
                  </div>
                  <div className="text-copper-300 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
