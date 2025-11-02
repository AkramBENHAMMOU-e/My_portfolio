import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Développement Full-Stack",
      description: "Expérience avec les technologies web modernes, frameworks et bonnes pratiques"
    },
    {
      icon: Brain,
      title: "IA & Machine Learning",
      description: "Passionné par l'exploration des applications IA et des algorithmes d'apprentissage automatique"
    },
    {
      icon: Users,
      title: "Travail en Équipe",
      description: "Solides compétences en communication et expérience dans des environnements agiles"
    },
    {
      icon: Target,
      title: "Résolution de Problèmes",
      description: "Esprit analytique axé sur la création de solutions efficaces et évolutives"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold mb-6 text-foreground">À Propos de Moi</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Étudiant en Master en Génie Logiciel et Intelligence Artificielle à l’ENSET Mohammedia, je suis passionné par le développement de solutions intelligentes et performantes alliant code et IA. Je recherche un stage de fin d’études (PFE) en IA, génie logiciel ou automatisation intelligente, pour apprendre vite, contribuer activement et créer des technologies à impact réel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <item.icon className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-base text-muted-foreground">
            Prêt à contribuer à des projets significatifs et à grandir aux côtés d'équipes talentueuses
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;