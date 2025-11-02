import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import EmploiAutomation from "@/assets/emploi1.png";
import ecommerceImg from "@/assets/kafina.png";
import recrutime from "@/assets/recrutime.png";
import ebankingImg from "@/assets/ebanking.png";
import ragchat from "@/assets/rag.png";
import recipeAppImg from "@/assets/emploi1.png";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const projects = [
    {
      "title": "SYSTEME E-COMMERCE AVANCÉ",
      "description": "Architecture microservices (Spring Boot + Angular), moteur de recommandation, génération de descriptions produits via LLM, chat assistant RAG, analyse des sentiments des commentaires et automatisation avec n8n.",
      "technologies": ["Spring Boot", "Angular","machine learning", "LLM", "RAG", "n8n"],
      "liveUrl": "https://youtu.be/_EpB_Xin-EA",
      "githubUrl": "https://github.com/AkramBENHAMMOU-e/ecomm-intelligent",
      "featured": false,
      "image": ecommerceImg
    },
    {
      "title": "GENERATION AUTOMATIQUE DES EMPLOIS DU TEMPS",
      "description": "Conception d'une application Full-Stack (Spring Boot + Angular). Implémentation d'un algorithme génétique d'optimisation des emplois du temps. Gestion MySQL, export PDF, modélisation UML, méthode Agile (Scrum).",
      "technologies": ["Spring Boot","Algorithmes Génétiques", "Angular", "MySQL", "UML", "Agile (Scrum)"],
      "liveUrl": "https://drive.google.com/file/d/1d1YT5VkcZ_CO_HOxVNi8A-Anm35ZcAIn/view?usp=sharing",
      "githubUrl": "https://github.com/AkramBENHAMMOU-e/pfe1",
      "featured": false,
      "image": EmploiAutomation
    },
    {
      "title": "RECRUTIME – SYSTEME D'ENTRETIEN AVANCÉ",
      "description": "Système d'entretien automatisé avec CrewAI & Gemini LLM, génération de questions techniques via RAG, interface Angular/FastAPI.",
      "technologies": ["CrewAI", "Gemini LLM", "RAG", "Angular", "FastAPI"],
      "liveUrl": "https://youtu.be/SYe6b5NQmDI",
      "githubUrl": "https://github.com/AkramBENHAMMOU-e/EntretienAI",
      "featured": false,
      "image": recrutime
    },
    {
      "title": "DIGITAL BANKING - PLATEFORME DE BANQUE NUMERIQUE",
      "description": "Conception et développement d'une application web complète avec un backend en Spring Boot et une interface utilisateur dynamique et réactive construite avec Angular. Sécurisation de l'application avec Spring Security et JWT.",
      "technologies": ["Spring Boot", "Angular", "Spring Security", "JWT"],
      "liveUrl": "https://drive.google.com/file/d/1vqfz11MLyD8-qhFFQMylNt9MTrwOiD13/view?usp=sharing",
      "githubUrl": "https://github.com/AkramBENHAMMOU-e/Spring-Angular-JWT---Digital-Banking-backend",
      "featured": false,
      "image": ebankingImg
    },
    {
      "title": "ENSET GUIDE - RAG CHAT",
      "description": "Développement d'un assistant IA intelligent multimodal pour étudiants, utilisant la technologie RAG pour fournir des réponses contextuelles basées sur des documents, avec une interface JavaFX et une base de données PostgreSQL.",
      "technologies": ["RAG", "JavaFX", "PostgreSQL"],
      "liveUrl": "https://drive.google.com/file/d/1vqfz11MLyD8-qhFFQMylNt9MTrwOiD13/view?usp=sharing",
      "githubUrl": "https://github.com/AkramBENHAMMOU-e/Rag-chat",
      "featured": false,
      "image": ragchat
    }
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold mb-6 text-foreground">Projets Réalisés</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une vitrine de mon travail en développement logiciel et en intelligence artificielle
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border"
            >
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover" 
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="default" className="text-xs font-normal">
                      Mis en avant
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-muted-foreground text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs font-medium border-border"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Démo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs font-medium border-border"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-3 w-3 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            variant="default" 
            size="lg" 
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="text-sm font-medium"
          >
            {showAllProjects ? 'Voir les projets mis en avant' : 'Voir tous les projets'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;