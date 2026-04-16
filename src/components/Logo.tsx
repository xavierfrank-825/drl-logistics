import { motion } from 'motion/react';

export interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = "", variant = 'dark' }: LogoProps) {
  // ISSUE IN PREVIOUS CODE: 
  // 1. Hardcoded cropping (width: 200%) is fragile and breaks if the image proportions change.
  // 2. h-[140%] combined with translate-y can cause the logo to be cut off at the top or bottom.
  // 3. Aspect ratio was forced, which might squash the logo if the container doesn't match.

  // RECOMMENDATION: Upload a single, transparent PNG logo to /assets/sections/logo.png 
  // and use it directly without complex cropping.
  
  const logoUrl = "/assets/sections/logo.jpg";

  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      <div 
        className="relative w-full h-full"
        style={{ aspectRatio: '3/2' }}
      >
        <img
          src={logoUrl}
          alt="DLR Logistics Logo"
          className="absolute max-w-none h-full"
          style={{
            width: '200%',
            left: variant === 'light' ? '0' : '-100%',
            objectFit: 'contain',
          }}
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
