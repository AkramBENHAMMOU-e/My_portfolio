import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"]
    },
    {
      category: "Web Technologies",
      skills: ["React", "Node.js", "HTML5", "CSS3", "REST APIs", "GraphQL"]
    },
    {
      category: "AI & Data Science",
      skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "OpenAI API"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Linux"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and AI solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 hover:shadow-glow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-secondary/30 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
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