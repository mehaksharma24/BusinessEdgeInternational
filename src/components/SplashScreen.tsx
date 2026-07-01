import { useEffect, useState } from 'react';
import splashBanner from '../assets/Home_Banner.png';

// Logo removed completely

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase('hold'), 800);
    const exitTimer = setTimeout(() => setPhase('exit'), 2400);
    const doneTimer = setTimeout(() => onComplete(), 3400);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        phase === 'exit' ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ pointerEvents: phase === 'exit' ? 'none' : 'all' }}
    >
      {/* Banner background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${splashBanner})`,
          transform: phase === 'enter' ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d3d73]/70" />

      {/* Radial glow */}
      <div
        className="absolute w-[420px] h-[420px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(26,95,168,0.55) 0%, transparent 70%)',
          opacity: phase === 'enter' ? 0 : 1,
          transition: 'opacity 0.8s ease',
        }}
      />

      {/* Empty center container (logo removed) */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{
          opacity: phase === 'enter' ? 0 : 1,
          transform: phase === 'enter' ? 'scale(0.6) translateY(30px)' : 'scale(1) translateY(0)',
          transition:
            'opacity 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transitionDelay: phase === 'enter' ? '0.15s' : '0s',
        }}
      >
        {/* Logo removed */}
        {/* Tagline removed */}
      </div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 h-[3px] bg-orange-500/40 w-full">
        <div
          className="h-full bg-orange-500 origin-left"
          style={{
            transform:
              phase === 'enter'
                ? 'scaleX(0)'
                : phase === 'hold'
                ? 'scaleX(0.65)'
                : 'scaleX(1)',
            transition:
              phase === 'enter'
                ? 'transform 0.8s ease'
                : phase === 'hold'
                ? 'transform 1.4s ease'
                : 'transform 0.6s ease',
          }}
        />
      </div>
    </div>
  );
}
