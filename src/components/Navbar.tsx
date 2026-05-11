import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const logo = '/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Works", href: "#about" },
    { name: "Model", href: "#model" },
    { name: "Market", href: "#market" },
    { name: "Products", href: "#products" },
    { name: "Investment", href: "#investment" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6 md:py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className={`glass rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "shadow-[0_0_30px_rgba(122,147,66,0.2)] border-primary/20" : ""
        }`}>
          <div className="flex items-center gap-3 group cursor-pointer">
            {/* ✅ Updated: Use img tag with imported logo */}
            <img 
              src={logo} 
              alt="DLR Logistics Logo" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg"
            />
            <span className="font-black text-lg md:text-xl tracking-tighter uppercase text-glow group-hover:tracking-widest transition-all duration-500">
              DLR.LOGS
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[11px] font-bold uppercase tracking-[2px]">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full font-bold uppercase text-[10px] tracking-[2px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(46,91,255,0.3)]">
              Contact
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 glass rounded-full flex items-center justify-center text-primary"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 px-4 md:hidden"
          >
            <div className="glass rounded-[2rem] p-8 border-white/10 shadow-2xl">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-black uppercase tracking-tighter text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <button className="w-full bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-[2px] mt-4">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}