import React, { useState } from 'react';

/**
 * Custom animated pixel art scene for Dharm Chaniyara's portfolio.
 * 
 * Distinct from reference:
 * - Twilight Cyber-Sakura tree with lush pixel blossom canopy & falling glowing petals
 * - Friendly AI Robot companion ("Byte") with blinking cyan visor and pulsing antenna
 * - Mini open pixel terminal with flickering code lines
 * - Futuristic cyber-hummingbird / origami glider hovering with flapping wings
 * - Crescent moon, twinkling constellation stars, and interactive hover emote
 * - Zero lag, crisp pixel rendering, respects prefers-reduced-motion
 */
export const TechGroveAnimation: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex items-end justify-center select-none group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Dharm's AI Dev Haven &bull; Click or hover to interact"
    >
      <svg
        viewBox="0 0 280 140"
        className="w-full max-w-[340px] sm:max-w-[380px] h-auto drop-shadow-xs"
        shapeRendering="crispEdges"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <style>{`
            @keyframes gliderFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
            @keyframes wingFlap {
              0%, 100% { transform: scaleY(1); }
              50% { transform: scaleY(0.4); }
            }
            @keyframes treeBreeze {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-2px); }
            }
            @keyframes petalFall1 {
              0% { transform: translate(0, 0); opacity: 0; }
              15% { opacity: 1; }
              85% { opacity: 0.9; }
              100% { transform: translate(-28px, 46px); opacity: 0; }
            }
            @keyframes petalFall2 {
              0% { transform: translate(0, 0); opacity: 0; }
              20% { opacity: 1; }
              80% { opacity: 0.8; }
              100% { transform: translate(-36px, 54px); opacity: 0; }
            }
            @keyframes visorBlink {
              0%, 93%, 97%, 100% { opacity: 1; }
              95% { opacity: 0.1; }
            }
            @keyframes antennaPulse {
              0%, 100% { fill: #F59E0B; }
              50% { fill: #38BDF8; }
            }
            @keyframes codeFlicker {
              0%, 100% { opacity: 0.95; }
              50% { opacity: 0.4; }
            }
            @keyframes starTwinkle {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 1; }
            }
            @keyframes cloudDrift {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(5px); }
            }
            .anim-glider-body {
              animation: gliderFloat 3.8s ease-in-out infinite;
            }
            .anim-wing {
              animation: wingFlap 0.7s ease-in-out infinite;
              transform-origin: 18px 8px;
            }
            .anim-canopy-sway {
              animation: treeBreeze 4.2s ease-in-out infinite;
            }
            .anim-petal-1 {
              animation: petalFall1 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
            .anim-petal-2 {
              animation: petalFall2 5.4s cubic-bezier(0.4, 0, 0.2, 1) 2s infinite;
            }
            .anim-visor {
              animation: visorBlink 3.8s infinite;
            }
            .anim-antenna {
              animation: antennaPulse 2.6s ease-in-out infinite;
            }
            .anim-code {
              animation: codeFlicker 1.8s steps(2, start) infinite;
            }
            .anim-star-1 {
              animation: starTwinkle 2.2s ease-in-out infinite;
            }
            .anim-star-2 {
              animation: starTwinkle 3.1s ease-in-out 1.2s infinite;
            }
            .anim-cloud {
              animation: cloudDrift 8s ease-in-out infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .anim-glider-body,
              .anim-wing,
              .anim-canopy-sway,
              .anim-petal-1,
              .anim-petal-2,
              .anim-visor,
              .anim-antenna,
              .anim-code,
              .anim-star-1,
              .anim-star-2,
              .anim-cloud {
                animation: none !important;
              }
            }
          `}</style>
        </defs>

        {/* ================= BACKGROUND: MOON, STARS, CLOUD ================= */}
        {/* Crescent Moon */}
        <g id="crescent-moon" transform="translate(246, 8)">
          <rect x="2" y="0" width="8" height="2" fill="#FEF08A" />
          <rect x="0" y="2" width="10" height="2" fill="#FEF08A" />
          <rect x="0" y="4" width="8" height="6" fill="#FDE047" />
          <rect x="2" y="10" width="8" height="2" fill="#FEF08A" />
          {/* Inner crescent cutout */}
          <rect x="4" y="2" width="7" height="8" fill="#F7F6F2" />
          <rect x="6" y="0" width="5" height="2" fill="#F7F6F2" />
          <rect x="6" y="10" width="5" height="2" fill="#F7F6F2" />
        </g>

        {/* Twinkling Pixel Stars */}
        <g className="anim-star-1">
          <rect x="18" y="18" width="2" height="2" fill="#CBD5E1" />
          <rect x="17" y="19" width="4" height="1" fill="#94A3B8" />
        </g>
        <g className="anim-star-2">
          <rect x="76" y="22" width="2" height="2" fill="#FDE68A" />
          <rect x="75" y="23" width="4" height="1" fill="#F59E0B" />
        </g>
        <g className="anim-star-1">
          <rect x="138" y="16" width="2" height="2" fill="#BAE6FD" />
        </g>
        <g className="anim-star-2">
          <rect x="186" y="26" width="2" height="2" fill="#FBCFE8" />
        </g>

        {/* Drifting Soft Pixel Cloud */}
        <g transform="translate(104, 18)">
          <g className="anim-cloud">
            <rect x="6" y="0" width="18" height="3" fill="#E2E8F0" opacity="0.6" />
            <rect x="2" y="3" width="26" height="4" fill="#CBD5E1" opacity="0.5" />
            <rect x="0" y="7" width="30" height="3" fill="#E2E8F0" opacity="0.6" />
          </g>
        </g>

        {/* ================= TERRAIN & GROUND ================= */}
        <g id="terrain">
          {/* Base earthen foundation line */}
          <rect x="10" y="132" width="260" height="3" fill="#E8E5DD" />
          <rect x="20" y="130" width="242" height="2" fill="#DDD8CE" />
          <rect x="35" y="128" width="220" height="2" fill="#D2CCC0" />

          {/* Grassy mound under robot */}
          <rect x="44" y="124" width="68" height="4" fill="#E2E0D8" />
          <rect x="52" y="121" width="52" height="3" fill="#86EFAC" opacity="0.65" />
          <rect x="62" y="119" width="34" height="2" fill="#4ADE80" opacity="0.6" />

          {/* Grassy mound under tree */}
          <rect x="176" y="124" width="80" height="4" fill="#E2E0D8" />
          <rect x="188" y="121" width="60" height="3" fill="#86EFAC" opacity="0.65" />
          <rect x="200" y="118" width="40" height="3" fill="#4ADE80" opacity="0.6" />

          {/* Pixel grass tufts */}
          <rect x="50" y="120" width="2" height="4" fill="#22C55E" />
          <rect x="53" y="122" width="2" height="2" fill="#16A34A" />
          <rect x="94" y="120" width="2" height="4" fill="#22C55E" />
          <rect x="140" y="127" width="2" height="3" fill="#22C55E" />
          <rect x="174" y="123" width="2" height="4" fill="#22C55E" />
          <rect x="238" y="120" width="2" height="4" fill="#22C55E" />
          <rect x="241" y="122" width="2" height="2" fill="#16A34A" />
        </g>

        {/* ================= THE CYBER-SAKURA TREE ================= */}
        <g id="cyber-tree" transform="translate(186, 16)">
          {/* Tree Trunk & Roots */}
          <g id="tree-trunk">
            {/* Roots */}
            <rect x="26" y="102" width="16" height="3" fill="#E8E5DD" />
            <rect x="28" y="100" width="12" height="2" fill="#DCD8CE" />
            <rect x="32" y="66" width="6" height="36" fill="#795548" />
            <rect x="34" y="66" width="3" height="35" fill="#5D4037" />
            <rect x="28" y="86" width="5" height="15" fill="#5D4037" />
            <rect x="37" y="80" width="6" height="21" fill="#4E342E" />

            {/* Branches reaching into canopy */}
            <rect x="24" y="58" width="10" height="8" fill="#5D4037" />
            <rect x="36" y="56" width="10" height="8" fill="#5D4037" />
          </g>

          {/* Canopy (swaying gently) */}
          <g className="anim-canopy-sway">
            {/* Deep shadow cherry blossom */}
            <rect x="14" y="24" width="42" height="44" fill="#9D174D" />
            <rect x="8" y="32" width="54" height="30" fill="#9D174D" />

            {/* Midtone vibrant magenta / sakura */}
            <rect x="12" y="20" width="46" height="38" fill="#DB2777" />
            <rect x="18" y="12" width="34" height="22" fill="#EC4899" />
            <rect x="6" y="28" width="58" height="22" fill="#EC4899" />

            {/* Highlight petal clusters: soft rose and glowing cyan nodes */}
            <rect x="22" y="6" width="26" height="14" fill="#F472B6" />
            <rect x="14" y="16" width="18" height="20" fill="#F472B6" />
            <rect x="36" y="18" width="22" height="20" fill="#F472B6" />
            <rect x="24" y="26" width="24" height="16" fill="#FBCFE8" />

            {/* Glowing tech blossom nodes */}
            <rect x="18" y="22" width="3" height="3" fill="#38BDF8" />
            <rect x="42" y="16" width="3" height="3" fill="#38BDF8" />
            <rect x="32" y="34" width="3" height="3" fill="#67E8F9" />
            <rect x="48" y="28" width="3" height="3" fill="#38BDF8" />
            <rect x="22" y="38" width="3" height="3" fill="#C084FC" />
            <rect x="44" y="40" width="3" height="3" fill="#C084FC" />
          </g>

          {/* Falling Petals / Data Sparks */}
          <g className="anim-petal-1" transform="translate(24, 46)">
            <rect x="0" y="0" width="3" height="3" fill="#F472B6" />
            <rect x="1" y="1" width="1" height="1" fill="#FDF2F8" />
          </g>
          <g className="anim-petal-2" transform="translate(44, 52)">
            <rect x="0" y="0" width="3" height="2" fill="#38BDF8" />
          </g>
        </g>

        {/* ================= THE AI ROBOT COMPANION ("Byte") ================= */}
        <g id="robot-companion" transform="translate(68, 88)">
          {/* Antenna */}
          <rect x="13" y="1" width="2" height="6" fill="#64748B" />
          <rect x="12" y="0" width="4" height="2" className="anim-antenna" fill="#F59E0B" />

          {/* Robot Head */}
          <rect x="6" y="7" width="16" height="12" rx="1" fill="#E2E8F0" />
          <rect x="7" y="8" width="14" height="10" fill="#F1F5F9" />
          <rect x="5" y="11" width="2" height="4" fill="#94A3B8" /> {/* Left ear */}
          <rect x="21" y="11" width="2" height="4" fill="#94A3B8" /> {/* Right ear */}

          {/* Visor Screen with blinking gaze */}
          <rect x="8" y="10" width="12" height="5" fill="#0F172A" />
          <g className="anim-visor">
            <rect x="9" y="11" width="4" height="3" fill="#06B6D4" />
            <rect x="15" y="11" width="4" height="3" fill="#06B6D4" />
            <rect x="10" y="12" width="1" height="1" fill="#E0F2FE" />
            <rect x="16" y="12" width="1" height="1" fill="#E0F2FE" />
          </g>

          {/* Neck */}
          <rect x="12" y="19" width="4" height="2" fill="#64748B" />

          {/* Body Chassis */}
          <rect x="5" y="21" width="18" height="13" rx="1" fill="#CBD5E1" />
          <rect x="7" y="22" width="14" height="11" fill="#E2E8F0" />
          <rect x="9" y="24" width="3" height="2" fill="#3B82F6" />
          <rect x="13" y="24" width="3" height="2" fill="#10B981" />
          <rect x="17" y="24" width="2" height="2" fill="#F59E0B" />
          <rect x="9" y="28" width="10" height="3" fill="#475569" />

          {/* Arms */}
          <rect x="2" y="23" width="3" height="9" fill="#94A3B8" />
          <rect x="2" y="31" width="4" height="3" fill="#64748B" />
          <rect x="23" y="23" width="3" height="7" fill="#94A3B8" />
          <rect x="24" y="29" width="6" height="3" fill="#64748B" />

          {/* Legs */}
          <rect x="6" y="34" width="7" height="4" fill="#64748B" />
          <rect x="15" y="34" width="7" height="4" fill="#64748B" />
          <rect x="4" y="36" width="6" height="3" fill="#475569" />
          <rect x="18" y="36" width="6" height="3" fill="#475569" />

          {/* ================= MINI PIXEL LAPTOP ================= */}
          <g id="mini-laptop" transform="translate(24, 25)">
            <rect x="2" y="0" width="10" height="9" fill="#334155" />
            <rect x="3" y="1" width="8" height="7" fill="#0F172A" />
            <g className="anim-code">
              <rect x="4" y="2" width="4" height="1" fill="#38BDF8" />
              <rect x="4" y="4" width="6" height="1" fill="#4ADE80" />
              <rect x="5" y="6" width="4" height="1" fill="#FBBF24" />
            </g>
            <rect x="1" y="9" width="12" height="3" fill="#64748B" />
            <rect x="3" y="9" width="8" height="1" fill="#94A3B8" />
            <rect x="1" y="12" width="12" height="1" fill="#475569" />
          </g>

          {/* Interactive Speech Emote Bubble (appears on hover) */}
          <g 
            id="robot-emote" 
            transform="translate(14, -18)"
            style={{ 
              opacity: isHovered ? 1 : 0, 
              transition: 'opacity 0.25s ease, transform 0.25s ease',
              transform: isHovered ? 'translate(14px, -20px)' : 'translate(14px, -14px)'
            }}
          >
            <rect x="0" y="0" width="22" height="12" rx="2" fill="#0F172A" />
            <polygon points="4,12 8,12 4,15" fill="#0F172A" />
            {/* Pixel heart icon */}
            <rect x="5" y="3" width="4" height="3" fill="#F43F5E" />
            <rect x="11" y="3" width="4" height="3" fill="#F43F5E" />
            <rect x="4" y="4" width="12" height="3" fill="#F43F5E" />
            <rect x="6" y="7" width="8" height="2" fill="#F43F5E" />
            <rect x="8" y="9" width="4" height="1" fill="#F43F5E" />
          </g>
        </g>

        {/* ================= THE AUTONOMOUS CYBER-GLIDER ================= */}
        <g transform="translate(32, 36)">
          <g className="anim-glider-body">
            {/* Main Glider Body */}
            <rect x="8" y="8" width="14" height="5" fill="#0284C7" />
            <rect x="10" y="7" width="10" height="6" fill="#38BDF8" />
            <rect x="20" y="9" width="5" height="2" fill="#0369A1" /> {/* Tail */}
            <rect x="4" y="9" width="5" height="2" fill="#E0F2FE" /> {/* Sensor beak */}
            <rect x="8" y="8" width="2" height="2" fill="#0F172A" />
            <rect x="8" y="8" width="1" height="1" fill="#38BDF8" />

            {/* Flapping Wings */}
            <g className="anim-wing">
              <rect x="10" y="1" width="9" height="4" fill="#0284C7" />
              <rect x="12" y="3" width="8" height="4" fill="#38BDF8" />
              <rect x="14" y="0" width="4" height="3" fill="#7DD3FC" />
              <rect x="13" y="0" width="2" height="1" fill="#F0F9FF" />
            </g>

            {/* Underwing thruster glow */}
            <rect x="12" y="13" width="6" height="2" fill="#0284C7" opacity="0.8" />
            <rect x="14" y="14" width="2" height="2" fill="#38BDF8" />

            {/* Particle Trail */}
            <rect x="26" y="9" width="3" height="1" fill="#38BDF8" opacity="0.8" />
            <rect x="31" y="8" width="2" height="1" fill="#7DD3FC" opacity="0.5" />
            <rect x="35" y="10" width="1" height="1" fill="#BAE6FD" opacity="0.3" />
          </g>
        </g>

      </svg>
    </div>
  );
};
