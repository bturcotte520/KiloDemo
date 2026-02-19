'use client';

import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';

export default function OpusCreditsPage() {
  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center px-4"
      style={{ background: 'var(--theme-bg)', overflow: 'auto' }}
    >
      {/* Logo */}
      <div className="mb-6 animate-fade-in">
        <Image
          src="/KiloLogo.png"
          alt="Kilo Logo"
          width={80}
          height={80}
          priority
        />
      </div>

      {/* Title */}
      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10 animate-slide-up"
        style={{ color: 'var(--theme-accent)' }}
      >
        Scan for $20 of Opus Credits
      </h1>

      {/* QR Code Card */}
      <div
        className="rounded-2xl p-8 animate-slide-up-delay-1 flex flex-col items-center"
        style={{
          background: 'var(--theme-panel)',
          border: '2px solid var(--theme-border)',
          boxShadow: '0 0 30px color-mix(in srgb, var(--theme-accent) 20%, transparent)',
        }}
      >
        <div
          className="rounded-xl p-4"
          style={{ background: '#ffffff' }}
        >
          <QRCodeSVG
            value="https://kilo.ai"
            size={280}
            level="H"
            includeMargin={false}
            fgColor="#000000"
            bgColor="#ffffff"
          />
        </div>
        <p
          className="mt-6 text-sm font-mono tracking-wide opacity-70"
          style={{ color: 'var(--theme-text)' }}
        >
          kilo.ai
        </p>
      </div>

      {/* Subtle footer text */}
      <p
        className="mt-10 text-xs opacity-50 animate-slide-up-delay-2"
        style={{ color: 'var(--theme-text)' }}
      >
        Point your camera at the QR code to claim your credits
      </p>
    </main>
  );
}
