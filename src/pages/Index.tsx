const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-background">
      <div className="container mx-auto px-6 py-24 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-3xl">
          <div className="inline-block mb-8 px-6 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm">
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              Ready to Build
            </p>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            Your Blank Canvas
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            A clean, modern foundation for your next great idea.
            <br />
            Start creating something amazing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              Get Started
            </div>
            <div className="px-8 py-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm text-foreground font-semibold hover:bg-accent transition-all duration-300 cursor-pointer">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
