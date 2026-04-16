import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = "", variant = 'dark' }: LogoProps) {
  // Using the updated side-by-side logo image.
  const logoUrl = "https://storage.googleapis.com/static-studio-prod/antigravity/antigravity-attachments/1744802728483_dlr_logistics_logo_updated.jpg";

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: '1.5/1' }}>
      <img
        src={logoUrl}
        alt="DLR Logistics Logo"
        className="absolute h-[140%] max-w-none top-1/2 -translate-y-1/2"
        style={{
          width: '200%',
          left: variant === 'light' ? '0' : '-100%',
          objectFit: 'contain',
        }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
