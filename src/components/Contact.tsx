import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@developer.com",
      href: "mailto:hello@developer.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, NY",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/developer"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/developer"
    }
  ];

  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss internship opportunities and how I can contribute to your team
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <Card key={index} className="bg-card/50 hover:bg-card transition-all duration-300">
                      <CardContent className="p-4">
                        <a 
                          href={item.href}
                          className="flex items-center space-x-4 text-card-foreground hover:text-primary transition-colors"
                        >
                          <item.icon className="h-5 w-5" />
                          <div>
                            <p className="text-sm text-muted-foreground">{item.label}</p>
                            <p className="font-medium">{item.value}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-card/30 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold">Quick Message</h3>
              <p className="text-muted-foreground">
                Interested in discussing opportunities? Feel free to reach out directly via email or phone, 
                or connect with me on LinkedIn to stay updated on my latest projects and achievements.
              </p>
              <Button variant="hero" size="lg" className="w-full">
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;