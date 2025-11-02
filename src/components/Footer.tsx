const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex justify-center">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 <a 
                href="https://github.com/AkramBENHAMMOU-e" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary font-medium"
              >
                Akram
              </a>. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;