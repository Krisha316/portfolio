import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Trophy, 
  ArrowUpRight, 
  Terminal,
  Cpu,
  Globe,
  Phone,
  ExternalLink,
  Database
} from "lucide-react";
import Header from "@/components/Header";
import profileImage from "@assets/myphoto.png";
import resumePDF from "@assets/Krisha_Shah_1766132669268.pdf";
import cloudGuardPreview from "@assets/1760344517239.jpeg";
import aubergieneCerti from "@assets/aubergieneCertificatate.png";
import intellihackCerti from "@assets/intellihackCertificate.jpeg";
import noneImg from "@assets/images.png";
import project2Preview from "@assets/1744909539881.jpeg"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";


type Project = {
  title: string;
  description: string;
  tech: string[];
  img: string;
  github: string;
  video: string;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const allProjects = [
  { title: "Cloud Guard", description: "AI-assisted system for Anomalous Login Detection in Cloud Environments. Combines cybersecurity and AI to identify fraudulent login behavior in real time.", tech: ["HTML", "CSS", "Angular JS","Fingerprint JS", "Chart JS", "Django Rest Framework", "MySQL", "External APIs", "GeoIP2 Databse", "pandas", "numpy", "scikit-learn", "xgboost"], img: cloudGuardPreview, github: "https://github.com/example/cloud-guard", video: "https://www.youtube.com/embed/dQw4w9WgXcQ"},
  { title: "Financial Fraud Detection System", description: "AI-powered Financial Fraud Detection System built for the Aubergine Solutions track. Full stack solution for detecting and preventing fraud in transactions.", tech: ["HTML", "CSS", "Angular JS","Django Rest Framework","MySQL","numpy","pandas", "scikit-learn"], img: project2Preview, github: "https://github.com/example/fraud-detection", video: "https://www.youtube.com/embed/dQw4w9WgXcQ"},
  { title: "AI-assisted Shopping & Inventory Website", description: "Demo e-commerce platform with inventory management powered by AI insights and product recommendations.", tech: [ "React","Django Rest Framework", "MySQL"], img: noneImg, github: "https://github.com/example/fraud-detection", video: "https://www.youtube.com/embed/dQw4w9WgXcQ"}
];

const allAchievements = [
  { id: 1, title: "First Runners Up - IntelliHack'25", description: "Out of 200+ teams, We won a ₹16,000 cash prize for our innovative project, AI-driven Anomalous Login Detection in Cloud Environments, leveraging AI and cybersecurity to detect fraudulent logins in real-time.", icon: Trophy, color: "bg-yellow-500", img: intellihackCerti, linkD : "https://www.linkedin.com/posts/computer-science-and-engineering-department-34bb69255_nirmauniversity-computerscience-hackathon-activity-7384434709717671936-wJ67?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBMuWcBuR0OBu0dmeJytCMFCEO4i1cgkj4" },
  { id: 2, title: "Top 10 - Aubergine Solutions Track", description: "Achieved a Top 10 position among 50 teams in the Aubergine Solutions track by building an AI-powered real-time fraud detection system for banking transactions, demonstrating strong expertise in financial security and anomaly detection.", icon: Globe, color: "bg-blue-500", img: aubergieneCerti, linkD: "https://www.linkedin.com/posts/krina-shah-a4b386318_hacknuthon6-top10-9thplace-ugcPost-7318681105799290881-Sc37?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBMuWcBuR0OBu0dmeJytCMFCEO4i1cgkj4" },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Header />
      
      <div className="relative max-w-6xl mx-auto p-4 md:p-8 space-y-24">
        
        {/* HERO SECTION - HOME */}
        <motion.div 
          id="home"
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px]"
        >
          {/* 1. Profile Photo & Intro - Large Vertical Card */}
          <motion.div variants={item} className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-card/50 backdrop-blur-sm shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img 
              src={profileImage} 
              alt="Profile" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 space-y-2">
              <Badge variant="secondary" className="mb-2 bg-primary/20 text-primary border-primary/20 backdrop-blur-md">
                Open to Work
              </Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                Krisha Shah
              </h1>
              <p className="text-muted-foreground text-lg font-light max-w-md">
                Computer Science Undergraduate specialized in Full Stack Development & AI-driven Security.
              </p>
            </div>
          </motion.div>
          
          {/* Contact Info Box - Below Photo */}
          <motion.div variants={item} className="md:col-span-2 bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 rounded-3xl p-6 flex items-center gap-6 group hover:border-primary/50 transition-colors">
            <div className="flex gap-4 flex-1">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-light uppercase tracking-wide">Email</p>
                    <p className="text-sm font-mono text-foreground">krishabr2007@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-light uppercase tracking-wide">Phone</p>
                    <p className="text-sm font-mono text-foreground">+91-9727470882</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Role / Title Card */}
          <motion.div variants={item} className="md:col-span-2 bg-secondary/30 border border-white/5 backdrop-blur-md p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 size={120} />
            </div>
            <h2 className="text-2xl font-mono text-primary mb-2">CS Student @ University</h2>
            <p className="text-muted-foreground">
              Passionate about building scalable systems and intuitive user experiences.
            </p>
          </motion.div>

          {/* 3. Quick Navigation */}
          <motion.div variants={item} className="md:col-span-4 grid grid-cols-2 md:grid-cols-6 gap-3">
            <motion.a href="https://www.linkedin.com/in/krisha-shah-973214317" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} className="p-4 bg-[#0077b5] hover:bg-[#0077b5]/90 text-white rounded-2xl text-sm font-semibold flex flex-col items-center justify-center gap-2 transition-all">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a href="https://github.com/Krisha316" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} className="p-4 bg-[#24292e] hover:bg-[#24292e]/90 text-white rounded-2xl text-sm font-semibold flex flex-col items-center justify-center gap-2 transition-all">
              <Github size={24} />
              <span>GitHub</span>
            </motion.a>

            <motion.button onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })} whileHover={{ scale: 1.02 }} className="p-4 bg-white/5 hover:bg-white/10 text-foreground rounded-2xl text-sm font-semibold flex flex-col items-center justify-center gap-2 transition-all border border-white/10">
              <Terminal size={24} />
              <span>Skills</span>
            </motion.button>

            <motion.button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} whileHover={{ scale: 1.02 }} className="p-4 bg-primary/20 hover:bg-primary/30 text-primary rounded-2xl text-sm font-semibold flex flex-col items-center justify-center gap-2 transition-all border border-primary/30">
              <Cpu size={24} />
              <span>Projects</span>
            </motion.button>

            <motion.button onClick={() => document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" })} whileHover={{ scale: 1.02 }} className="p-4 bg-accent/20 hover:bg-accent/30 text-accent rounded-2xl text-sm font-semibold flex flex-col items-center justify-center gap-2 transition-all border border-accent/30">
              <Trophy size={24} />
              <span>Achievements</span>
            </motion.button>

            <motion.button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} whileHover={{ scale: 1.02 }} className="p-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-black rounded-2xl text-sm font-semibold flex flex-col items-center justify-center gap-2 transition-all">
              <Mail size={24} />
              <span>Contact</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* SKILLS & INTERESTS SECTION */}
        <section id="skills" className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-10 w-1 bg-white/50 rounded-full" />
            <h2 className="text-4xl font-heading font-bold">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skills Column */}
            <div className="space-y-4">
              {[
                { title: "Languages", skills: ["Python", "C", "C++", "JavaScript"], colorbadge: "bg-blue-400/20 text-blue-400 border border-blue-400/30" },
                { title: "Web Dev", skills: ["HTML", "CSS (Bootstrap)", "React", "Django REST", "MySQL"], colorbadge: "bg-purple-400/20 text-purple-400 border border-purple-400/30" },
                { title: "Data & ML", skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"], colorbadge: "bg-pink-400/20 text-pink-400 border border-pink-400/30" },
                { title: "iOS", skills: [ "Swift", "SwiftUI", "Realm"], colorbadge: "bg-cyan-400/20 text-cyan-400 border border-cyan-400/30" },
                { title: "Tools", skills: ["GitHub", "VS Code", "Jupyter", "Google Colab", "Postman"], colorbadge: "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30" },
              ].map((category, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h3 className={`text-sm font-semibold text`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <Badge 
                        key={skill} 
                        className={`text-xs px-3 py-1 ${category.colorbadge}`}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-10 w-1 bg-primary rounded-full" />
            <h2 className="text-3xl font-heading font-bold">All Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
            {allProjects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-colors h-full flex flex-col">
                  <div className="h-48 bg-muted relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                     <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-mono">
                       {/* <Cpu size={48} className="opacity-20" /> */}
                      <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                     </div>
                  </div>
                  <CardHeader className="flex-1">
                    <CardTitle className="flex justify-between items-center">
                      {project.title}
                      <button
                        onClick={() => setActiveProject(project)}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ArrowUpRight size={18} />
                      </button>

                    </CardTitle>
                    <CardDescription>Full Stack Web App</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {/* Push button to bottom */}
                  <div className="mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2 px-4 py-2 rounded-lg
                        bg-[#24292e] text-white text-xs font-semibold
                        hover:bg-[#24292e]/90 transition
                      "
                    >
                      <Github size={16} />
                      View on GitHub
                      <ExternalLink size={16} />
                    </a>
                  </div>    
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
            >
              {/* VIDEO ONLY */}
              <iframe
                src={activeProject.video}
                title="Project Demo"
                className="w-full h-full"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />

              {/* Close button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-10
                          bg-black/60 hover:bg-black/80
                          text-white rounded-full w-9 h-9
                          flex items-center justify-center"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}



        {/* ACHIEVEMENTS SECTION */}
        <section id="achievements" className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-10 w-1 bg-accent rounded-full" />
            <h2 className="text-3xl font-heading font-bold">Achievements & Awards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allAchievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-white/10 rounded-2xl bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all overflow-hidden group"
              >
                {/* Achievement Image */}
                <div className="w-full bg-transparent">
                  <img
                    src={achievement.img}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                {/* Content */}
                <div className="p-6 space-y-4 bg-background/80 backdrop-blur-sm rounded-b-2xl border-t border-white/10">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${achievement.color}/20 rounded-xl`}>
                      <achievement.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">

                    {achievement.description}
                  </p>

                  {/* LinkedIn Button */}
                  <a
                    href={achievement.linkD}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    inline-flex items-center gap-2 mt-4
                    px-5 py-2.5 rounded-xl
                    bg-[#0077b5]
                    text-white
                    font-semibold text-sm
                    hover:bg-[#005f91]
                    hover:shadow-[#0077b5]/60
                    transition-all
                  "
                  >
                    <Linkedin size={18} />
                    View on LinkedIn
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>

              );
            })}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="pb-24">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="h-10 w-1 bg-primary rounded-full" />
              <h2 className="text-4xl font-heading font-bold">Get in Touch</h2>
            </div>

            {/* Main Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email Card */}
              <motion.a 
                href="mailto:krishabr2007@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block group"
              >
                <div className="h-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-3xl p-8 hover:border-primary/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-primary/20 rounded-2xl group-hover:bg-primary/30 transition-colors">
                      <Mail size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground mb-3">Send me a message</p>
                      <p className="text-primary font-mono text-sm">krishabr2007@gmail.com</p>
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Phone Card */}
              <motion.a 
                href="tel:+919727470882"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="block group"
              >
                <div className="h-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-3xl p-8 hover:border-accent/70 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-accent/20 rounded-2xl group-hover:bg-accent/30 transition-colors">
                      <Phone size={32} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground mb-3">Call me anytime</p>
                      <p className="text-accent font-mono text-sm">+91-9727470882</p>
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Resume Card */}
              <motion.a 
                href={resumePDF}
                download="Krisha_Shah_Resume.pdf"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="block group"
              >
                <div className="h-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                      <ExternalLink size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Resume</h3>
                      <p className="text-sm text-muted-foreground mb-3">Download my CV</p>
                      <p className="text-white/80 font-mono text-sm">PDF File</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Social Links Section */}
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-2xl font-heading font-bold mb-6">Connect with me</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* LinkedIn */}
                <motion.a 
                  href="https://www.linkedin.com/in/krisha-shah-973214317"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="block group"
                >
                  <div className="bg-gradient-to-r from-[#0077b5]/20 to-transparent border border-[#0077b5]/30 rounded-2xl p-6 hover:border-[#0077b5]/60 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#0077b5]/20 rounded-xl group-hover:bg-[#0077b5]/30 transition-colors">
                        <Linkedin size={24} className="text-[#0077b5]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">LinkedIn</h4>
                        <p className="text-sm text-muted-foreground">Connect professionally</p>
                      </div>
                      <ExternalLink size={18} className="text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a 
                  href = "https://github.com/Krisha316"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="block group"
                >
                  <div className="bg-gradient-to-r from-[#24292e]/40 to-[#24292e]/10 border border-[#24292e]/60 rounded-2xl p-6 hover:border-white/80 transition-all hover:shadow-lg hover:shadow-white/20">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#24292e]/30 rounded-xl group-hover:bg-white/20 transition-colors">
                        <Github size={24} className="text-white group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">GitHub</h4>
                        <p className="text-sm text-white/70">Check my projects</p>
                      </div>
                      <ExternalLink size={18} className="text-white ml-auto opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* CTA Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-center space-y-4 border border-primary/20"
            >
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-black">Ready to collaborate?</h3>
              <p className="text-black/80 text-lg max-w-2xl mx-auto">
                I'm available for internships, freelance projects, and exciting opportunities. Let's build something amazing together!
              </p>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
