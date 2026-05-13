import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';
// Import the actual image file - fix the path and filename
import logo1 from '../../assets/logo1.JPG';  // Adjust path based on where logo1.JPG is located

export default function Contact() {
  return (
    <footer id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="glass p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border-white/5 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-10 md:mb-12 text-glow">
                Ready to <br />
                <span className="text-primary">Connect?</span>
              </h2>
              
              <div className="space-y-6 md:space-y-8 max-w-md mx-auto lg:mx-0">
                <a href="mailto:dlrlogisticsblr@gmail.com" className="flex items-center gap-4 md:gap-6 group justify-center lg:justify-start transition-all duration-300 hover:opacity-90">
                <div className="w-12 h-12 md:w-14 md:h-14 glass rounded-xl md:rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[2px] text-muted-foreground">Email Us</p>
                  <p className="text-lg md:text-xl font-bold">dlrlogisticsblr@gmail.com</p>
                </div>
              </a>

                <div className="flex items-center gap-4 md:gap-6 group cursor-pointer justify-center lg:justify-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 glass rounded-xl md:rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[2px] text-muted-foreground">Location</p>
                    <p className="text-lg md:text-xl font-bold">Global Operations</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 md:mt-16 flex justify-center lg:justify-start gap-4 md:gap-6">
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-10 h-10 md:w-12 md:h-12 glass rounded-lg md:rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <input 
                  type="text" 
                  placeholder="NAME" 
                  className="w-full glass px-6 md:px-8 py-4 md:py-6 rounded-xl md:rounded-2xl border-white/5 focus:border-primary/50 outline-none font-bold uppercase text-[11px] md:text-[12px] tracking-[2px] transition-all"
                />
                <input 
                  type="email" 
                  placeholder="EMAIL" 
                  className="w-full glass px-6 md:px-8 py-4 md:py-6 rounded-xl md:rounded-2xl border-white/5 focus:border-primary/50 outline-none font-bold uppercase text-[11px] md:text-[12px] tracking-[2px] transition-all"
                />
              </div>
              <textarea 
                placeholder="MESSAGE" 
                rows={4}
                className="w-full glass px-6 md:px-8 py-4 md:py-6 rounded-xl md:rounded-2xl border-white/5 focus:border-primary/50 outline-none font-bold uppercase text-[11px] md:text-[12px] tracking-[2px] transition-all resize-none"
              />
              <button className="w-full bg-primary hover:bg-primary/80 text-white py-4 md:py-6 rounded-xl md:rounded-2xl font-black uppercase text-[12px] md:text-[14px] tracking-[3px] md:tracking-[4px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(122,147,66,0.3)]">
                Send Message
              </button>
            </div>
          </div>

          <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              {/* Use img tag with the imported logo */}
              <img 
                src={logo1} 
                alt="DLR Logistics Logo" 
                className="w-12 h-auto rounded object-contain"
              />
              <span className="font-black uppercase tracking-tighter">DLR.LOGS</span>
            </div>
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[2px] text-muted-foreground text-center">
              © 2024 DLR Logistics. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
    </footer>
  );
}