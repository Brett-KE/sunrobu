import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar panel installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Power and Water Innovation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
            Sunrobu Africa
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            A Green Energy Driven Nation
          </p>
          <p className="text-base md:text-lg text-white/75 mb-10 max-w-2xl">
            Leading provider of industrial electrical solutions, solar energy systems, 
            and water treatment engineering across Kenya and East Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-light text-lg px-8"
            >
              Our Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <a
              href="https://wa.me/254719714182"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8"
              >
                Request a Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
