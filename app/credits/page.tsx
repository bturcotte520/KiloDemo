import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Credits | Kilo Man',
  description: 'Credits for Kilo Man',
};

export default function CreditsPage() {
  const qrUrl =
    'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://kilo.codes/devWeek&bgcolor=000000&color=eab308&margin=10';

  return (
    <main className="w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      <div
        className="text-center max-w-lg w-full mx-4 px-8 py-10 rounded-2xl border border-theme-border/30 relative"
        style={{
          background:
            'linear-gradient(180deg, color-mix(in srgb, var(--theme-panel) 80%, transparent) 0%, var(--theme-panel) 100%)',
          boxShadow:
            '0 25px 60px rgba(0,0,0,0.5), 0 0 40px color-mix(in srgb, var(--theme-accent) 8%, transparent)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Decorative top accent line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-b-full"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--theme-accent), transparent)',
          }}
        />

        {/* Title */}
        <h1
          className="text-5xl sm:text-6xl font-bold text-theme-accent mb-2 tracking-tighter animate-title-glow"
          style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}
        >
          CREDITS
        </h1>

        {/* Subtitle */}
        <p className="text-theme-text/60 text-sm font-mono mb-6 tracking-widest uppercase">
          Built with Kilo Code
        </p>

        {/* Divider */}
        <div className="start-divider w-full mb-8" />

        {/* QR Code */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div
            className="p-3 rounded-xl border border-theme-border/50"
            style={{
              background: 'color-mix(in srgb, var(--theme-accent) 5%, transparent)',
              boxShadow: '0 0 20px color-mix(in srgb, var(--theme-accent) 15%, transparent)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={qrUrl}
              alt="QR code linking to https://kilo.codes/devWeek"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
          <p className="text-theme-text/70 text-xs font-mono tracking-wider">
            SCAN TO VISIT
          </p>
          <a
            href="https://kilo.codes/devWeek"
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-accent font-mono text-sm hover:opacity-80 transition-opacity underline underline-offset-4"
          >
            kilo.codes/devWeek
          </a>
        </div>

        {/* Divider */}
        <div className="start-divider w-full mb-6" />

        {/* Back button */}
        <Link
          href="/"
          className="start-btn bg-theme-accent text-theme-accent-text font-bold py-3 px-10 rounded-xl text-base font-mono inline-block"
        >
          ← BACK TO GAME
        </Link>

        {/* Bottom decorative dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" />
          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent/40" />
        </div>
      </div>
    </main>
  );
}
