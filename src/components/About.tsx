import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Experience with modern web technologies, frameworks, and best practices"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Passionate about exploring AI applications and machine learning algorithms"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication skills and experience working in agile environments"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Analytical mindset with focus on creating efficient, scalable solutions"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated computer science student with a passion for creating innovative solutions through code. 
            Currently seeking internship opportunities to apply my skills and continue learning from experienced professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-glow-secondary group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <item.icon className="h-12 w-12 text-primary group-hover:animate-glow" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Ready to contribute to meaningful projects and grow alongside talented teams
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;