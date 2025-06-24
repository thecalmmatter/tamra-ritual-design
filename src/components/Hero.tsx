
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=2000&q=80')`
            }}
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      </div>

      {/* Floating Copper Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-copper-300/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-copper-400/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          Ancient Wellness.
          <br />
          <span className="text-copper-300 drop-shadow-lg">Modern Ritual.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Explore handcrafted copper bottles inspired by Ayurvedic purity and contemporary elegance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-copper-500 hover:bg-copper-600 text-white px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Shop Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white/80 text-white hover:bg-white hover:text-copper-800 px-8 py-4 text-lg font-medium transition-all duration-300 backdrop-blur-sm bg-white/10"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Enhanced Copper Droplet Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          {/* Copper droplet shape */}
          <div className="w-6 h-8 bg-gradient-to-b from-copper-300 to-copper-500 rounded-full relative">
            {/* Droplet tip */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-4 border-transparent border-t-copper-500"></div>
            {/* Inner shimmer */}
            <div className="absolute top-1 left-1 w-2 h-3 bg-white/30 rounded-full animate-pulse"></div>
          </div>
          {/* Ripple effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-copper-300/50 rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
