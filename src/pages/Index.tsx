import { Github, Linkedin, Mail, ExternalLink, Download, ArrowUp, Code, Database, Server } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="fade-up">
            <h1 className="font-orbitron text-6xl md:text-8xl mb-6 gradient-text font-medium text-center">
              Vinoothna Ganga
            </h1>
            <div className="text-2xl md:text-3xl font-semibold neon-text mb-8">
              Java Developer
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              A passionate Java developer crafting backend logic and clean UI experiences.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center gap-6 mb-12">
              <a href="https://github.com/Gangavinoothna" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/vinoothna-reddy-ganga-860a64251/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={24} />
              </a>
              <a href="mailto:vinoothnareddyganga799@gmail.com" className="social-icon">
                <Mail size={24} />
              </a>
            </div>
            
            {/* Download Resume Button */}
            <a href="https://github.com/Gangavinoothna/vinoothna-portfolio/blob/main/VINOOTHNA%20GANGA%20resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-futuristic inline-flex items-center gap-3">
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-neon-cyan to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* About Me Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 neon-text-purple">
              About Me
            </h2>
            
            <div className="glass-card p-8 md:p-12 mb-12">
              <p className="text-lg md:text-xl leading-relaxed text-foreground mb-8">
                I'm a dedicated Java developer with a passion for building robust backend systems and creating 
                seamless user experiences. My expertise lies in crafting efficient, scalable solutions that bridge 
                the gap between complex backend logic and intuitive frontend interfaces. I thrive on solving 
                real-world problems through clean, maintainable code and innovative thinking.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                and continuously learning about the latest trends in software development. I believe in the power of 
                technology to transform ideas into reality.
              </p>
            </div>
            
            {/* Skills */}
            <div className="text-center">
              <h3 className="font-orbitron text-2xl md:text-3xl font-semibold mb-8 neon-text">
                Core Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JDBC</span>
                
                
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                
                <span className="skill-tag">MySQL</span>
                
                <span className="skill-tag">Git</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 neon-text-purple">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Project 1 */}
            <article className="glass-card p-8 group">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-neon-cyan" size={28} />
                <h3 className="font-orbitron text-xl font-semibold">To-do list </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">A simple and interactive To-Do list web application that allow users to add , edit delete, and mark tasks as completed.</p>
              <a href="https://github.com/Gangavinoothna/To-Do-list-" target="_blank" rel="noopener noreferrer" className="btn-futuristic inline-flex items-center gap-2 text-sm">
                <Github size={16} />
                View Code
              </a>
            </article>
            
            {/* Project 2 */}
            <article className="glass-card p-8 group">
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-neon-cyan" size={28} />
                <h3 className="font-orbitron text-xl font-semibold">Crafting a landing page</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">Designed and developed a responsive and visually appealing landing page aimed at engaging users and encouraging them to take action.</p>
              <a href="https://github.com/Gangavinoothna/Crafting-a-Landing-page" target="_blank" rel="noopener noreferrer" className="btn-futuristic inline-flex items-center gap-2 text-sm">
                <Github size={16} />
                View Code
              </a>
            </article>
            
            {/* Project 3 */}
            <article className="glass-card p-8 group">
              <div className="flex items-center gap-3 mb-6">
                <Server className="text-neon-cyan" size={28} />
                <h3 className="font-orbitron text-xl font-semibold">Weather Forecast App</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">A console based java application that allows users to enter a city name and get current weather details like Temperature, Humidity, and weather description.</p>
              <a href="https://github.com/Gangavinoothna/Weather-Forecast-App" target="_blank" rel="noopener noreferrer" className="btn-futuristic inline-flex items-center gap-2 text-sm">
                <Github size={16} />
                View Code
              </a>
            </article>
            
            {/* Project 4 */}
            <article className="glass-card p-8 group">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-neon-cyan" size={28} />
                <h3 className="font-orbitron text-xl font-semibold">Airline Reservation System</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">A comprehensive airline booking system built with Java, featuring flight search, seat reservation, passenger management, and booking confirmation with database integration using JDBC.</p>
              <a href="https://github.com/Gangavinoothna/Airline-Reservations-System" target="_blank" rel="noopener noreferrer" className="btn-futuristic inline-flex items-center gap-2 text-sm">
                <Github size={16} />
                View Code
              </a>
            </article>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 neon-text-purple">
            Get In Touch
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <form className="glass-card p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-3 text-foreground">
                    Name
                  </label>
                  <input type="text" id="name" name="name" className="form-input w-full" placeholder="Your full name" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-3 text-foreground">
                    Email
                  </label>
                  <input type="email" id="email" name="email" className="form-input w-full" placeholder="your.email@example.com" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-3 text-foreground">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={6} className="form-input w-full resize-none" placeholder="Tell me about your project or just say hello..." required></textarea>
                </div>
                
                <button type="submit" className="btn-futuristic w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Vinoothna Ganga. All rights reserved.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/Gangavinoothna" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vinoothna-reddy-ganga-860a64251/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="mailto:vinoothnareddyganga799@gmail.com" className="social-icon">
                <Mail size={20} />
              </a>
              
              {/* Back to Top */}
              <a href="#hero" className="social-icon ml-4">
                <ArrowUp size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;