import { Button } from "@/components/ui/button";
import professionalHeadshot from "@/assets/profil-cv1.png";
import cv from "@/assets/cv.pdf";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-semibold text-foreground leading-tight">
                Akram
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                Développeur Software & IA
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Spécialisé dans la création de solutions logicielles innovantes et l'implémentation d'algorithmes d'intelligence artificielle.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="default" size="lg" className="text-sm px-8 py-6 font-medium" onClick={() => window.location.href = "#projects"}>
                Voir mes projets
              </Button>
              <Button variant="outline" size="lg" className="text-sm px-8 py-6 font-medium border-border" onClick={() => window.open(cv, '_blank')}>
                Télécharger CV
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img 
                src={professionalHeadshot} 
                alt="Photo professionnelle d'Akram" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;