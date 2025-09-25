import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import taskManagerImg from "@/assets/project-task-manager.jpg";
import ecommerceImg from "@/assets/project-ecommerce-dashboard.jpg";
import sentimentImg from "@/assets/project-sentiment-analyzer.jpg";
import chatAppImg from "@/assets/project-chat-app.jpg";
import weatherAppImg from "@/assets/project-weather-app.jpg";
import recipeAppImg from "@/assets/project-recipe-app.jpg";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A smart task management application that uses natural language processing to categorize and prioritize tasks automatically.",
      technologies: ["React", "Python", "TensorFlow", "REST API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      image: taskManagerImg
    },
    {
      title: "E-Commerce Analytics Dashboard",
      description: "Real-time analytics dashboard for e-commerce platforms with predictive sales forecasting using machine learning.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      image: ecommerceImg
    },
    {
      title: "Social Media Sentiment Analyzer",
      description: "Tool that analyzes social media posts to determine sentiment trends using NLP and data visualization.",
      technologies: ["Python", "Pandas", "NLTK", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      image: sentimentImg
    },
    {
      title: "Real-Time Chat Application",
      description: "Secure messaging platform with real-time communication, file sharing, and group chat functionality using WebSocket technology.",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      image: chatAppImg
    },
    {
      title: "Weather Forecast App",
      description: "Location-based weather application with 7-day forecasts, interactive maps, and weather alerts using machine learning predictions.",
      technologies: ["React Native", "Python", "OpenWeatherAPI", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      image: weatherAppImg
    },
    {
      title: "AI Recipe Recommendation System",
      description: "Personalized recipe suggestions based on dietary preferences, available ingredients, and nutritional goals using AI algorithms.",
      technologies: ["Vue.js", "Python", "Scikit-learn", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      image: recipeAppImg
    }
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in software development and artificial intelligence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-glow-secondary transition-all duration-300 hover:scale-105 ${
                project.featured ? 'border-primary/50' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="portfolio" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="portfolio" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? 'Show Featured Projects' : 'View All Projects'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;