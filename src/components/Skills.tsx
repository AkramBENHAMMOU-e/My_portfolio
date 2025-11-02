import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Langages de Programmation",
      skills: ["Java","python", "JavaScript", "TypeScript", "C", "SQL"]
    },
    {
      category: "Technologies Web",
      skills: ["Angular", "Spring Boot", "HTML5", "CSS3", "REST APIs", "GraphQL"]
    },
    {
      category: "IA & Science des Données",
      skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn","LLM","RAG","n8n","CrewAI","NLP","Langchain"]
    },
    {
      category: "Outils & Plateformes",
      skills: ["Git", "Docker","MySQL", "PostgreSQL", "Linux"]
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold mb-6 text-foreground">Compétences Techniques</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une boîte à outils complète pour créer des applications modernes et des solutions IA
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-secondary text-secondary-foreground text-xs font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;