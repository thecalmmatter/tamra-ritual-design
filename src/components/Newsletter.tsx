
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you! Your Ayurvedic Hydration Guide is on its way to your inbox.");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-copper-100 to-copper-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl p-12 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-copper-800 mb-6">
            Discover Ancient Water Wisdom
          </h2>
          <p className="text-xl text-copper-600 mb-8 max-w-2xl mx-auto">
            Discover the ancient science of copper-charged water. Get our exclusive 
            Ayurvedic Hydration Guide and start your wellness journey today.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 text-lg border-copper-300 focus:border-copper-500"
            />
            <Button 
              type="submit"
              className="bg-copper-500 hover:bg-copper-600 text-white px-8 py-4 text-lg font-medium"
            >
              Get Free Guide
            </Button>
          </form>
          
          <p className="text-sm text-copper-500 mt-4">
            No spam, just ancient wisdom and modern wellness tips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
