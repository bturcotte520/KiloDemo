import React from 'react';
import Link from 'next/link';
import { GameStatus, CompletionData } from './types';
import ThemeSelector from '../ThemeSelector';

interface UIOverlayProps {
  gameState: GameStatus;
  jumpModifier: number;
  setJumpModifier: (val: number) => void;
  onRestart: () => void;
  completionData: CompletionData | null;
}

const UIOverlay: React.FC<UIOverlayProps> = ({
  gameState,
  jumpModifier,
  setJumpModifier,
  onRestart,
  completionData,
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6">
      {/* Top Bar: Controls */}
      <div className="flex justify-between items-start pointer-events-auto gap-4">
        <div className="bg-theme-panel border border-theme-border p-4 rounded text-theme-text font-mono">
          <h1 className="text-xl font-bold mb-2">KILO MAN</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="jump-slider" className="text-sm">
              Jump Power: {(jumpModifier * 100).toFixed(0)}%
            </label>
            <input
              id="jump-slider"
              type="range"
              min="0.5"
              max="2.0"
              step="0.1"
              value={jumpModifier}
              onChange={(e) => setJumpModifier(parseFloat(e.target.value))}
              className="accent-theme-accent"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <ThemeSelector />
          <div className="bg-theme-panel border border-theme-border p-4 rounded text-theme-text font-mono text-sm">
            <p>ARROWS: Move</p>
            <p>SPACE: Jump</p>
          </div>
          <Link
            href="/credits"
            className="bg-theme-button border border-theme-border px-4 py-2 rounded text-theme-button-text font-mono text-xs font-bold text-center hover:bg-theme-button-hover transition-colors"
          >
            CREDITS
          </Link>
        </div>
      </div>

      {/* Center: Game Over / Win Screens */}
      {gameState !== 'playing' && gameState !== 'start' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 pointer-events-auto">
          <div className="bg-theme-bg border-2 border-theme-border p-8 rounded-lg text-center max-w-md">
            <h2 className={`text-4xl font-bold mb-4 ${gameState === 'won' ? 'text-theme-accent' : 'text-red-500'}`}>
              {gameState === 'won' ? 'MISSION COMPLETE' : 'GAME OVER'}
            </h2>
            
            {gameState === 'won' && completionData && (
              <div className="mb-6 space-y-3">
                <div className="bg-theme-button border border-theme-border p-4 rounded">
                  <div className="text-theme-accent text-5xl font-bold mb-2">
                    {completionData.points.toLocaleString()}
                  </div>
                  <div className="text-theme-text text-sm font-mono">POINTS EARNED</div>
                </div>
                <div className="text-white font-mono text-lg">
                  Time: {completionData.completionTime.toFixed(2)}s
                </div>
              </div>
            )}
            
            <p className="text-white mb-8 font-mono">
              {gameState === 'won'
                ? "Excellent work, Kilo Man. The objective has been secured."
                : "Kilo Man has fallen. The mission is compromised."}
            </p>
            <button
              onClick={onRestart}
              className="bg-theme-accent hover:opacity-90 text-theme-accent-text font-bold py-3 px-8 rounded font-mono transition-opacity"
            >
              RETRY MISSION
            </button>
          </div>
        </div>
      )}
      
      {/* Start Screen Overlay */}
      {gameState === 'start' && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto animate-fade-in scanline-overlay"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.92) 70%, rgba(0,0,0,0.98) 100%)',
          }}
        >
          <div className="text-center max-w-lg w-full mx-4 px-8 py-10 rounded-2xl border border-theme-border/30 relative"
            style={{
              background: 'linear-gradient(180deg, color-mix(in srgb, var(--theme-panel) 80%, transparent) 0%, var(--theme-panel) 100%)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 40px color-mix(in srgb, var(--theme-accent) 8%, transparent)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Decorative top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-b-full animate-slide-up"
              style={{ background: 'linear-gradient(90deg, transparent, var(--theme-accent), transparent)' }}
            />

            {/* Title */}
            <h1 className="text-6xl sm:text-7xl font-bold text-theme-accent mb-2 tracking-tighter animate-slide-up animate-title-glow"
              style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}
            >
              KILO MAN
            </h1>

            {/* Subtitle */}
            <p className="text-theme-text/60 text-sm font-mono mb-6 animate-slide-up-delay-1 tracking-widest uppercase">
              Prepare for the mission
            </p>

            {/* Divider */}
            <div className="start-divider w-full mb-6 animate-slide-up-delay-1" />

            {/* Controls */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up-delay-2">
              <div className="flex items-center gap-2">
                <span className="key-badge">←</span>
                <span className="key-badge">→</span>
                <span className="text-theme-text/70 text-xs font-mono ml-1">Move</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="key-badge">SPACE</span>
                <span className="text-theme-text/70 text-xs font-mono ml-1">Jump</span>
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={onRestart}
              className="start-btn bg-theme-accent text-theme-accent-text font-bold py-4 px-12 rounded-xl text-lg font-mono animate-slide-up-delay-3 animate-pulse-subtle"
            >
              START GAME
            </button>

            {/* Bottom decorative dots */}
            <div className="flex justify-center gap-1.5 mt-6 animate-slide-up-delay-3">
              <span className="w-1.5 h-1.5 rounded-full bg-theme-accent/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-theme-accent/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" />
              <span className="w-1.5 h-1.5 rounded-full bg-theme-accent/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-theme-accent/40" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UIOverlay;