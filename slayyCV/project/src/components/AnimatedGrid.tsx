import React from 'react';

const AnimatedGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-black">
        {/* Retro-Futuristic 3D Grid */}
        <div className="grid-container">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Neon grid gradient */}
              <linearGradient id="neonGrid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#00ffff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.5" />
              </linearGradient>
              
              {/* Horizon glow */}
              <linearGradient id="horizonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#00ffff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.4" />
              </linearGradient>
              
              {/* Glow filter */}
              <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              {/* Strong glow for horizon */}
              <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Perspective grid lines - horizontal */}
            {Array.from({ length: 25 }, (_, i) => {
              const y = 400 + i * 15; // Start from center and go down
              const perspective = 1 + i * 0.15;
              const width = 1200 / perspective;
              const xOffset = (1200 - width) / 2;
              
              return (
                <line
                  key={`h-${i}`}
                  x1={xOffset}
                  y1={y}
                  x2={xOffset + width}
                  y2={y}
                  stroke="url(#neonGrid)"
                  strokeWidth={2 / perspective}
                  opacity={0.8 / Math.sqrt(perspective)}
                  filter="url(#neonGlow)"
                  className="animate-pulse-retro"
                  style={{
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: '3s'
                  }}
                />
              );
            })}
            
            {/* Perspective grid lines - vertical */}
            {Array.from({ length: 40 }, (_, i) => {
              const baseX = 50 + i * 28;
              const vanishingPointY = 350;
              const bottomY = 800;
              
              // Calculate perspective convergence
              const convergenceX = 600; // Center vanishing point
              const topX = baseX + (convergenceX - baseX) * 0.3;
              
              return (
                <line
                  key={`v-${i}`}
                  x1={topX}
                  y1={vanishingPointY}
                  x2={baseX}
                  y2={bottomY}
                  stroke="url(#neonGrid)"
                  strokeWidth="1.5"
                  opacity="0.7"
                  filter="url(#neonGlow)"
                  className="animate-pulse-retro"
                  style={{
                    animationDelay: `${i * 0.03}s`,
                    animationDuration: '4s'
                  }}
                />
              );
            })}
            
            {/* Horizon line with strong glow */}
            <line
              x1="0"
              y1="350"
              x2="1200"
              y2="350"
              stroke="url(#horizonGlow)"
              strokeWidth="3"
              opacity="1"
              filter="url(#strongGlow)"
              className="animate-horizon-glow"
            />
            
            {/* Floating neon particles */}
            {Array.from({ length: 20 }, (_, i) => (
              <circle
                key={`particle-${i}`}
                cx={Math.random() * 1200}
                cy={200 + Math.random() * 400}
                r="1.5"
                fill="#00ffff"
                opacity="0.8"
                filter="url(#neonGlow)"
                className="animate-float-neon"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '6s'
                }}
              />
            ))}
            
            {/* Additional glow effects */}
            {Array.from({ length: 8 }, (_, i) => (
              <ellipse
                key={`glow-${i}`}
                cx={150 + i * 140}
                cy={350}
                rx="30"
                ry="5"
                fill="url(#horizonGlow)"
                opacity="0.3"
                filter="url(#strongGlow)"
                className="animate-pulse-retro"
                style={{
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: '5s'
                }}
              />
            ))}
          </svg>
        </div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/40"></div>
      </div>
    </div>
  );
};

export default AnimatedGrid;