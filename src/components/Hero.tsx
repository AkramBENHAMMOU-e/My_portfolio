import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import professionalHeadshot from "@/assets/professional-headshot.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-secondary">
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                Software & AI Developer
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Passionate computer science student seeking internship opportunities to contribute to innovative projects and grow expertise in software development and artificial intelligence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-in">
            <div className="relative overflow-hidden rounded-2xl shadow-glow-secondary w-80 h-80 mx-auto">
              <img 
                src={professionalHeadshot} 
                alt="Professional headshot of software developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 animate-fade-in">
          <ChevronDown className="h-8 w-8 mx-auto text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;