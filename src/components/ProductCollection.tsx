
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const ProductCollection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('products');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      name: "Tāmra Essential",
      description: "Minimalist elegance meets Ayurvedic healing",
      price: "$89",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Lotus Hammered Flask",
      description: "Hand-hammered texture with spiritual symbolism",
      price: "$125",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Ritual Pitcher",
      description: "Perfect for morning water ceremonies",
      price: "$159",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-copper-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-copper-800 mb-6">
            Our Collection
          </h2>
          <p className="text-xl text-copper-600 max-w-2xl mx-auto">
            Each piece in our collection is thoughtfully crafted to bring ancient wellness 
            wisdom into your daily ritual.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-copper-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-copper-600 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-copper-700">
                    {product.price}
                  </span>
                  <Button 
                    className="bg-copper-500 hover:bg-copper-600 text-white"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCollection;
