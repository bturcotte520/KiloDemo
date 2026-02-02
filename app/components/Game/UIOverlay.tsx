import React from 'react';
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
        <div className="absolute inset-0 flex items-center justify-center bg-black/90 pointer-events-auto">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-theme-accent mb-4 tracking-tighter">KILO MAN</h1>
            <p className="text-white font-mono mb-8">Use Arrow Keys to Move • Space to Jump</p>
            <button
              onClick={onRestart}
              className="bg-theme-accent hover:opacity-90 text-theme-accent-text font-bold py-4 px-10 rounded text-xl font-mono transition-opacity"
            >
              START GAME
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UIOverlay;