import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "benhammou.akram4@gmail.com",
      href: "mailto:benhammou.akram4@gmail.com"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+212611767490",
      href: "tel:+212611767490"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Akram BENHAMMOU",
      href: "https://www.linkedin.com/in/akram-benhammou-a888a9221/"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold mb-6 text-foreground">Contactez-moi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Je suis actuellement à la recherche d'opportunités de stage PFE. Connectons-nous pour discuter de la façon dont je peux contribuer à votre équipe.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-card border border-border p-8 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-3">
                    <item.icon className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
                <h3 className="text-base font-semibold mb-3 text-foreground">{item.label}</h3>
                <a 
                  href={item.href} 
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              variant="default" 
              size="lg" 
              className="text-sm px-8 py-6 font-medium"
              asChild
            >
              <a href="mailto:benhammou.akram4@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                M'envoyer un message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;