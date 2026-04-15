import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="glass p-16 rounded-[4rem] border-white/5 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-12 text-glow">
                Ready to <br />
                <span className="text-primary">Connect?</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-muted-foreground">Email Us</p>
                    <p className="text-xl font-bold">contact@dlrlogs.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-muted-foreground">Location</p>
                    <p className="text-xl font-bold">Global Operations</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-6">
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="NAME" 
                  className="w-full glass px-8 py-6 rounded-2xl border-white/5 focus:border-primary/50 outline-none font-bold uppercase text-[12px] tracking-[2px] transition-all"
                />
                <input 
                  type="email" 
                  placeholder="EMAIL" 
                  className="w-full glass px-8 py-6 rounded-2xl border-white/5 focus:border-primary/50 outline-none font-bold uppercase text-[12px] tracking-[2px] transition-all"
                />
              </div>
              <textarea 
                placeholder="MESSAGE" 
                rows={4}
                className="w-full glass px-8 py-6 rounded-2xl border-white/5 focus:border-primary/50 outline-none font-bold uppercase text-[12px] tracking-[2px] transition-all resize-none"
              />
              <button className="w-full bg-primary hover:bg-primary/80 text-white py-6 rounded-2xl font-black uppercase text-[14px] tracking-[4px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(46,91,255,0.3)]">
                Send Message
              </button>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white font-black text-[10px]">D</div>
              <span className="font-black uppercase tracking-tighter">DLR.LOGS</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[2px] text-muted-foreground">
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
