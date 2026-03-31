import { useState, useEffect, useRef } from "react";

const TOTAL_DURATION = 30000;

const SCENES = [
  { id: "intro", start: 0, end: 5000 },
  { id: "quiz", start: 5000, end: 12000 },
  { id: "geo", start: 12000, end: 19000 },
  { id: "famous", start: 19000, end: 25000 },
  { id: "outro", start: 25000, end: 30000 },
];

const COLORS = {
  red: "#EF3340",
  redDark: "#C4222E",
  blue: "#00A3E0",
  blueDark: "#007AB5",
  bg: "#F6F5F1",
  dark: "#1E293B",
  muted: "#64748B",
  white: "#FFFFFF",
  catHistory: "#D97706",
  catCulture: "#EC4899",
  catPeople: "#059669",
  catInstitutions: "#2563EB",
  catEconomy: "#0891B2",
  green: "#16A34A",
};

function ease(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a, b, t) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

function sceneProgress(time, scene) {
  if (time < scene.start) return 0;
  if (time > scene.end) return 1;
  return (time - scene.start) / (scene.end - scene.start);
}

function FlagStripe({ color, delay, progress }) {
  const p = ease(Math.max(0, Math.min(1, (progress - delay) / 0.15)));
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: color,
        transform: `scaleX(${p})`,
        transformOrigin: "left",
      }}
    />
  );
}

function FloatingEmoji({ emoji, x, y, delay, duration = 2, progress }) {
  const p = Math.max(0, Math.min(1, (progress - delay) / (duration * 0.033)));
  const ep = ease(p);
  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        fontSize: "2rem",
        opacity: p < 0.1 ? p * 10 : p > 0.8 ? (1 - p) * 5 : 1,
        transform: `translateY(${(1 - ep) * 40}px) scale(${0.5 + ep * 0.5}) rotate(${Math.sin(p * Math.PI * 3) * 15}deg)`,
        pointerEvents: "none",
        filter: `drop-shadow(0 2px 8px rgba(0,0,0,0.15))`,
      }}
    >
      {emoji}
    </div>
  );
}

function ProgressBar({ time }) {
  const pct = (time / TOTAL_DURATION) * 100;
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 4,
        background: "rgba(0,0,0,0.1)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          background: `linear-gradient(90deg, ${COLORS.red}, ${COLORS.blue})`,
          transition: "width 0.05s linear",
          borderRadius: "0 2px 2px 0",
        }}
      />
    </div>
  );
}

function SceneIntro({ progress }) {
  const titleIn = ease(Math.min(1, progress / 0.25));
  const subtitleIn = ease(Math.max(0, Math.min(1, (progress - 0.15) / 0.25)));
  const flagIn = Math.max(0, Math.min(1, (progress - 0.05) / 0.4));
  const tagIn = ease(Math.max(0, Math.min(1, (progress - 0.35) / 0.25)));
  const emojis = [
    { emoji: "🏰", x: 8, y: 18, delay: 0.2 },
    { emoji: "🇱🇺", x: 85, y: 12, delay: 0.3 },
    { emoji: "🎯", x: 12, y: 72, delay: 0.25 },
    { emoji: "🗺️", x: 88, y: 68, delay: 0.35 },
    { emoji: "⭐", x: 50, y: 8, delay: 0.4 },
    { emoji: "🎭", x: 20, y: 40, delay: 0.45 },
    { emoji: "📚", x: 80, y: 42, delay: 0.38 },
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: COLORS.bg,
        overflow: "hidden",
      }}
    >
      {/* Luxembourg flag stripes background */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "6px", display: "flex" }}>
        <div style={{ flex: 1, position: "relative" }}>
          <FlagStripe color={COLORS.red} delay={0.05} progress={flagIn} />
        </div>
        <div style={{ flex: 1, position: "relative" }}>
          <FlagStripe color={COLORS.white} delay={0.1} progress={flagIn} />
        </div>
        <div style={{ flex: 1, position: "relative" }}>
          <FlagStripe color={COLORS.blue} delay={0.15} progress={flagIn} />
        </div>
      </div>

      {emojis.map((e, i) => (
        <FloatingEmoji key={i} {...e} progress={progress} />
      ))}

      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          border: `2px solid ${COLORS.red}15`,
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${0.8 + titleIn * 0.3})`,
          opacity: 0.3 * titleIn,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 450,
          height: 450,
          borderRadius: "50%",
          border: `2px solid ${COLORS.blue}10`,
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${0.6 + subtitleIn * 0.5})`,
          opacity: 0.2 * subtitleIn,
        }}
      />

      <div
        style={{
          textAlign: "center",
          transform: `translateY(${(1 - titleIn) * 60}px)`,
          opacity: titleIn,
        }}
      >
        <div
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: COLORS.red,
            marginBottom: 12,
            opacity: subtitleIn,
            transform: `translateY(${(1 - subtitleIn) * 20}px)`,
          }}
        >
          Beautiful Luxembourg presents
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            fontWeight: 900,
            color: COLORS.dark,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          Lëtz{" "}
          <span
            style={{
              color: COLORS.red,
              fontStyle: "italic",
            }}
          >
            Play
          </span>
        </div>
      </div>

      <div
        style={{
          marginTop: 28,
          opacity: tagIn,
          transform: `translateY(${(1 - tagIn) * 30}px) scale(${0.9 + tagIn * 0.1})`,
        }}
      >
        <div
          style={{
            background: COLORS.white,
            border: `1px solid #E5E4DF`,
            borderRadius: 999,
            padding: "8px 24px",
            fontSize: "0.95rem",
            fontWeight: 600,
            color: COLORS.muted,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          Learn Luxembourg through play 🎮
        </div>
      </div>
    </div>
  );
}

function CategoryPill({ label, color, delay, progress }) {
  const p = ease(Math.max(0, Math.min(1, (progress - delay) / 0.12)));
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 14px",
        borderRadius: 999,
        fontSize: "0.8rem",
        fontWeight: 700,
        background: `${color}18`,
        color: color,
        transform: `scale(${p}) translateY(${(1 - p) * 20}px)`,
        opacity: p,
        letterSpacing: "0.02em",
      }}
    >
      {label}
    </div>
  );
}

function SceneQuiz({ progress }) {
  const headerIn = ease(Math.min(1, progress / 0.18));
  const cardIn = ease(Math.max(0, Math.min(1, (progress - 0.12) / 0.2)));
  const catsIn = Math.max(0, Math.min(1, (progress - 0.3) / 0.35));
  const answerReveal = ease(Math.max(0, Math.min(1, (progress - 0.55) / 0.15)));
  const correctPop = ease(Math.max(0, Math.min(1, (progress - 0.72) / 0.12)));

  const categories = [
    { label: "📚 History", color: COLORS.catHistory, delay: 0.32 },
    { label: "🎭 Culture", color: COLORS.catCulture, delay: 0.37 },
    { label: "👤 People", color: COLORS.catPeople, delay: 0.42 },
    { label: "🏛️ Institutions", color: COLORS.catInstitutions, delay: 0.47 },
    { label: "📊 Economy", color: COLORS.catEconomy, delay: 0.52 },
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, #EEF2FF 0%, ${COLORS.bg} 100%)`,
        overflow: "hidden",
        padding: "0 24px",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, ${COLORS.blue}08 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${COLORS.red}06 0%, transparent 50%)`,
        }}
      />

      {/* Scene label */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: "50%",
          transform: `translateX(-50%) translateY(${(1 - headerIn) * -30}px)`,
          opacity: headerIn,
          background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.blueDark})`,
          color: COLORS.white,
          padding: "6px 20px",
          borderRadius: 999,
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          boxShadow: `0 4px 16px ${COLORS.blue}40`,
        }}
      >
        Game 1: Lëtz Quiz
      </div>

      {/* Quiz card */}
      <div
        style={{
          background: COLORS.white,
          borderRadius: 20,
          padding: "28px 32px",
          maxWidth: 420,
          width: "100%",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
          border: "1px solid #E5E4DF",
          transform: `translateY(${(1 - cardIn) * 50}px) scale(${0.92 + cardIn * 0.08})`,
          opacity: cardIn,
          position: "relative",
        }}
      >
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: COLORS.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
          Daily Question
        </div>
        <div style={{ fontSize: "1.15rem", fontWeight: 700, color: COLORS.dark, lineHeight: 1.4, marginBottom: 20 }}>
          In which year was the Treaty of London signed, establishing Luxembourg as an independent state?
        </div>

        {/* Answer options */}
        {["1839", "1815", "1867", "1890"].map((ans, i) => {
          const isCorrect = i === 0;
          const showCorrect = isCorrect && correctPop > 0;
          const optionP = ease(Math.max(0, Math.min(1, (answerReveal - i * 0.04) / 0.12)));
          return (
            <div
              key={ans}
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                marginBottom: 8,
                fontSize: "0.95rem",
                fontWeight: 600,
                border: showCorrect ? `2px solid ${COLORS.green}` : "1.5px solid #E5E4DF",
                background: showCorrect ? `${COLORS.green}10` : COLORS.white,
                color: showCorrect ? COLORS.green : COLORS.dark,
                transform: `translateX(${(1 - optionP) * 40}px) scale(${showCorrect ? 0.97 + correctPop * 0.03 : 1})`,
                opacity: optionP,
                display: "flex",
                alignItems: "center",
                gap: 10,
                boxShadow: showCorrect ? `0 2px 12px ${COLORS.green}20` : "none",
                transition: "border 0.2s, background 0.2s",
              }}
            >
              <span style={{
                width: 26, height: 26, borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.75rem", fontWeight: 800,
                background: showCorrect ? COLORS.green : "#F1F5F9",
                color: showCorrect ? COLORS.white : COLORS.muted,
              }}>
                {showCorrect ? "✓" : String.fromCharCode(65 + i)}
              </span>
              {ans}
            </div>
          );
        })}

        {/* Points popup */}
        {correctPop > 0 && (
          <div
            style={{
              position: "absolute",
              top: -12,
              right: -12,
              background: COLORS.green,
              color: COLORS.white,
              borderRadius: 12,
              padding: "6px 14px",
              fontSize: "0.85rem",
              fontWeight: 800,
              boxShadow: `0 4px 16px ${COLORS.green}40`,
              transform: `scale(${correctPop})`,
            }}
          >
            +200 pts
          </div>
        )}
      </div>

      {/* Category pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
          marginTop: 20,
          maxWidth: 420,
        }}
      >
        {categories.map((cat) => (
          <CategoryPill key={cat.label} {...cat} progress={catsIn} />
        ))}
      </div>
    </div>
  );
}

function SceneGeo({ progress }) {
  const headerIn = ease(Math.min(1, progress / 0.18));
  const mapIn = ease(Math.max(0, Math.min(1, (progress - 0.1) / 0.25)));
  const pinDrop = ease(Math.max(0, Math.min(1, (progress - 0.4) / 0.15)));
  const scoreIn = ease(Math.max(0, Math.min(1, (progress - 0.6) / 0.15)));
  const clueIn = ease(Math.max(0, Math.min(1, (progress - 0.15) / 0.2)));

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, #ECFDF5 0%, ${COLORS.bg} 100%)`,
        overflow: "hidden",
        padding: "0 24px",
      }}
    >
      {/* Scene label */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: "50%",
          transform: `translateX(-50%) translateY(${(1 - headerIn) * -30}px)`,
          opacity: headerIn,
          background: `linear-gradient(135deg, #16A34A, #15803D)`,
          color: COLORS.white,
          padding: "6px 20px",
          borderRadius: 999,
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          boxShadow: `0 4px 16px rgba(22,163,74,0.35)`,
        }}
      >
        Game 2: Lëtz Géo
      </div>

      {/* Map mockup */}
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
          border: "1px solid #E5E4DF",
          transform: `translateY(${(1 - mapIn) * 50}px) scale(${0.92 + mapIn * 0.08})`,
          opacity: mapIn,
          position: "relative",
          background: COLORS.white,
        }}
      >
        {/* Clue card */}
        <div
          style={{
            padding: "16px 20px",
            background: COLORS.white,
            borderBottom: "1px solid #E5E4DF",
            opacity: clueIn,
            transform: `translateY(${(1 - clueIn) * -20}px)`,
          }}
        >
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: COLORS.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>
            Find this place
          </div>
          <div style={{ fontSize: "1rem", fontWeight: 700, color: COLORS.dark, lineHeight: 1.4 }}>
            This medieval castle ruin sits above the Eisch valley and is one of Luxembourg's largest...
          </div>
        </div>

        {/* Simplified map area */}
        <div
          style={{
            height: 220,
            background: `linear-gradient(180deg, #C8E6C9 0%, #A5D6A7 30%, #81C784 60%, #66BB6A 100%)`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Map grid lines */}
          {[...Array(8)].map((_, i) => (
            <div key={`h${i}`} style={{ position: "absolute", top: `${i * 14}%`, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.25)" }} />
          ))}
          {[...Array(8)].map((_, i) => (
            <div key={`v${i}`} style={{ position: "absolute", left: `${i * 14}%`, top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.25)" }} />
          ))}

          {/* "Rivers" */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 400 220">
            <path d="M 80 0 Q 120 60 100 110 T 130 220" stroke="rgba(100,180,255,0.5)" fill="none" strokeWidth="3" />
            <path d="M 250 0 Q 230 80 260 140 T 240 220" stroke="rgba(100,180,255,0.4)" fill="none" strokeWidth="2" />
          </svg>

          {/* Luxembourg outline hint */}
          <div style={{
            position: "absolute",
            top: "15%", left: "20%",
            width: "60%", height: "70%",
            border: "2px dashed rgba(255,255,255,0.35)",
            borderRadius: "40% 50% 45% 35%",
          }} />

          {/* Animated pin drop */}
          <div
            style={{
              position: "absolute",
              top: `${35 - pinDrop * 0}%`,
              left: "42%",
              transform: `translateX(-50%) translateY(${(1 - pinDrop) * -80}px) scale(${0.5 + pinDrop * 0.5})`,
              opacity: pinDrop,
              filter: `drop-shadow(0 4px 8px rgba(0,0,0,0.3))`,
              fontSize: "2.2rem",
              zIndex: 10,
            }}
          >
            📍
          </div>

          {/* Ripple effect from pin */}
          {pinDrop > 0.5 && (
            <div
              style={{
                position: "absolute",
                top: "42%",
                left: "42%",
                transform: "translate(-50%, -50%)",
                width: `${(pinDrop - 0.5) * 120}px`,
                height: `${(pinDrop - 0.5) * 120}px`,
                borderRadius: "50%",
                border: `2px solid ${COLORS.red}`,
                opacity: 1 - (pinDrop - 0.5) * 2,
              }}
            />
          )}
        </div>

        {/* Score bar */}
        {scoreIn > 0 && (
          <div
            style={{
              padding: "14px 20px",
              background: COLORS.white,
              borderTop: "1px solid #E5E4DF",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transform: `translateY(${(1 - scoreIn) * 20}px)`,
              opacity: scoreIn,
            }}
          >
            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: COLORS.muted }}>
              Distance: 2.3 km
            </div>
            <div
              style={{
                background: COLORS.green,
                color: COLORS.white,
                padding: "4px 14px",
                borderRadius: 999,
                fontSize: "0.9rem",
                fontWeight: 800,
                boxShadow: `0 2px 10px ${COLORS.green}30`,
              }}
            >
              +850 pts
            </div>
          </div>
        )}
      </div>

      {/* Feature tags */}
      <div style={{ display: "flex", gap: 8, marginTop: 16, opacity: scoreIn }}>
        {["🏰 Castles", "🌿 Nature Parks", "🏛️ EU Institutions"].map((t, i) => (
          <div key={t} style={{
            background: `${COLORS.green}12`,
            color: COLORS.green,
            padding: "5px 12px",
            borderRadius: 999,
            fontSize: "0.75rem",
            fontWeight: 700,
            transform: `translateY(${(1 - scoreIn) * 15}px)`,
          }}>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function SceneFamous({ progress }) {
  const headerIn = ease(Math.min(1, progress / 0.18));
  const cardIn = ease(Math.max(0, Math.min(1, (progress - 0.1) / 0.2)));
  const revealIn = ease(Math.max(0, Math.min(1, (progress - 0.45) / 0.18)));
  const levelsIn = ease(Math.max(0, Math.min(1, (progress - 0.65) / 0.2)));

  const levels = ["Tourist", "Wanderer", "Navigator", "Explorer", "Geographer"];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, #FFF7ED 0%, ${COLORS.bg} 100%)`,
        overflow: "hidden",
        padding: "0 24px",
      }}
    >
      {/* Scene label */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: "50%",
          transform: `translateX(-50%) translateY(${(1 - headerIn) * -30}px)`,
          opacity: headerIn,
          background: `linear-gradient(135deg, ${COLORS.catHistory}, #B45309)`,
          color: COLORS.white,
          padding: "6px 20px",
          borderRadius: 999,
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          boxShadow: `0 4px 16px rgba(217,119,6,0.35)`,
        }}
      >
        Game 3: Famous People
      </div>

      {/* Person card */}
      <div
        style={{
          maxWidth: 360,
          width: "100%",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
          border: "1px solid #E5E4DF",
          background: COLORS.white,
          transform: `translateY(${(1 - cardIn) * 50}px) scale(${0.92 + cardIn * 0.08})`,
          opacity: cardIn,
        }}
      >
        {/* Photo placeholder - silhouette */}
        <div
          style={{
            height: 180,
            background: `linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontSize: "5rem",
              opacity: 1 - revealIn * 0.3,
              filter: `blur(${(1 - revealIn) * 0}px)`,
              transform: `scale(${1 + revealIn * 0.1})`,
            }}
          >
            🤔
          </div>

          {/* Category badge */}
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              background: `${COLORS.catCulture}20`,
              color: COLORS.catCulture,
              padding: "4px 12px",
              borderRadius: 999,
              fontSize: "0.7rem",
              fontWeight: 700,
            }}
          >
            🎵 Music
          </div>
        </div>

        {/* Hint & reveal */}
        <div style={{ padding: "18px 22px" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: COLORS.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
            Who is this person?
          </div>
          <div style={{ fontSize: "0.9rem", color: COLORS.dark, lineHeight: 1.5, marginBottom: 14 }}>
            This artist represented Luxembourg at Eurovision and has become one of the country's most recognized musicians...
          </div>

          {/* Reveal animation */}
          <div
            style={{
              overflow: "hidden",
              maxHeight: revealIn > 0 ? 60 : 0,
              opacity: revealIn,
              transition: "max-height 0.3s",
            }}
          >
            <div
              style={{
                background: `${COLORS.green}10`,
                border: `1.5px solid ${COLORS.green}`,
                borderRadius: 12,
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                transform: `scale(${0.95 + revealIn * 0.05})`,
              }}
            >
              <span style={{ fontSize: "1.3rem" }}>🌟</span>
              <div>
                <div style={{ fontWeight: 800, color: COLORS.green, fontSize: "0.95rem" }}>Correct!</div>
                <div style={{ fontSize: "0.78rem", color: COLORS.muted }}>You identified the artist</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Level progression */}
      <div
        style={{
          display: "flex",
          gap: 6,
          marginTop: 20,
          opacity: levelsIn,
          transform: `translateY(${(1 - levelsIn) * 20}px)`,
        }}
      >
        {levels.map((lvl, i) => (
          <div
            key={lvl}
            style={{
              padding: "5px 12px",
              borderRadius: 999,
              fontSize: "0.7rem",
              fontWeight: 700,
              background: i < 3 ? `${COLORS.catHistory}18` : "#F1F5F9",
              color: i < 3 ? COLORS.catHistory : COLORS.muted,
              border: i === 2 ? `1.5px solid ${COLORS.catHistory}` : "1.5px solid transparent",
            }}
          >
            {i < 3 ? "★" : "☆"} {lvl}
          </div>
        ))}
      </div>
    </div>
  );
}

function SceneOutro({ progress }) {
  const bgIn = ease(Math.min(1, progress / 0.2));
  const titleIn = ease(Math.max(0, Math.min(1, (progress - 0.05) / 0.25)));
  const ctaIn = ease(Math.max(0, Math.min(1, (progress - 0.3) / 0.2)));
  const featuresIn = ease(Math.max(0, Math.min(1, (progress - 0.2) / 0.3)));
  const pulse = Math.sin(progress * Math.PI * 4) * 0.03 + 1;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${COLORS.red}08 0%, ${COLORS.bg} 40%, ${COLORS.blue}08 100%)`,
        overflow: "hidden",
      }}
    >
      {/* Confetti-like dots */}
      {[...Array(20)].map((_, i) => {
        const x = (i * 37 + 13) % 100;
        const y = (i * 53 + 7) % 100;
        const colors = [COLORS.red, COLORS.blue, COLORS.green, COLORS.catCulture, COLORS.catHistory];
        const color = colors[i % colors.length];
        const size = 4 + (i % 4) * 2;
        const delay = i * 0.02;
        const p = ease(Math.max(0, Math.min(1, (bgIn - delay) / 0.3)));
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              background: color,
              opacity: p * 0.35,
              transform: `scale(${p})`,
            }}
          />
        );
      })}

      <div style={{ textAlign: "center", zIndex: 1 }}>
        <div
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 7vw, 3.5rem)",
            fontWeight: 900,
            color: COLORS.dark,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            opacity: titleIn,
            transform: `translateY(${(1 - titleIn) * 40}px)`,
          }}
        >
          Start your
          <br />
          <span style={{ color: COLORS.red, fontStyle: "italic" }}>Luxembourg</span>
          <br />
          journey
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            marginTop: 20,
            maxWidth: 380,
            opacity: featuresIn,
            transform: `translateY(${(1 - featuresIn) * 20}px)`,
          }}
        >
          {["5 Languages", "25 Levels", "3 Games", "Free & Fun"].map((f) => (
            <div
              key={f}
              style={{
                background: COLORS.white,
                border: "1px solid #E5E4DF",
                borderRadius: 999,
                padding: "5px 14px",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: COLORS.muted,
              }}
            >
              {f}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 28,
            opacity: ctaIn,
            transform: `translateY(${(1 - ctaIn) * 30}px) scale(${pulse})`,
          }}
        >
          <div
            style={{
              background: `linear-gradient(135deg, ${COLORS.red}, ${COLORS.redDark})`,
              color: COLORS.white,
              padding: "14px 36px",
              borderRadius: 16,
              fontSize: "1.1rem",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              boxShadow: `0 6px 24px ${COLORS.red}40`,
              display: "inline-block",
            }}
          >
            Play now at letzplay.lu
          </div>
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: "0.75rem",
            color: COLORS.muted,
            fontWeight: 600,
            opacity: ctaIn * 0.7,
          }}
        >
          Part of the Biergerpakt programme 🇱🇺
        </div>
      </div>
    </div>
  );
}

export default function PromoVideo() {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const play = () => {
    setPlaying(true);
    startRef.current = performance.now() - time;
    const tick = (now) => {
      const elapsed = now - startRef.current;
      if (elapsed >= TOTAL_DURATION) {
        setTime(TOTAL_DURATION);
        setPlaying(false);
        return;
      }
      setTime(elapsed);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const pause = () => {
    setPlaying(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };

  const restart = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setTime(0);
    setPlaying(false);
    setTimeout(() => {
      startRef.current = performance.now();
      setPlaying(true);
      const tick = (now) => {
        const elapsed = now - startRef.current;
        if (elapsed >= TOTAL_DURATION) {
          setTime(TOTAL_DURATION);
          setPlaying(false);
          return;
        }
        setTime(elapsed);
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    }, 50);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Auto-play on mount
  useEffect(() => {
    const timer = setTimeout(() => play(), 600);
    return () => clearTimeout(timer);
  }, []);

  const currentScene = SCENES.find((s) => time >= s.start && time < s.end) || SCENES[SCENES.length - 1];

  const sceneRenderers = {
    intro: SceneIntro,
    quiz: SceneQuiz,
    geo: SceneGeo,
    famous: SceneFamous,
    outro: SceneOutro,
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 480,
        margin: "0 auto",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Import fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap"
        rel="stylesheet"
      />

      {/* Video viewport */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "9 / 16",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 12px 48px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08)",
          background: COLORS.bg,
          border: "1px solid #E5E4DF",
        }}
      >
        {/* Scene transitions */}
        {SCENES.map((scene) => {
          const sp = sceneProgress(time, scene);
          const isActive = time >= scene.start && time <= scene.end;
          const isPast = time > scene.end;
          const fadeOutStart = 0.85;
          const opacity = isPast
            ? 0
            : !isActive
              ? 0
              : sp > fadeOutStart
                ? 1 - (sp - fadeOutStart) / (1 - fadeOutStart)
                : sp < 0.05
                  ? sp / 0.05
                  : 1;

          const SceneComponent = sceneRenderers[scene.id];
          if (!isActive && !isPast) return null;
          if (isPast) return null;

          return (
            <div
              key={scene.id}
              style={{
                position: "absolute",
                inset: 0,
                opacity: Math.max(0, Math.min(1, opacity)),
                zIndex: isActive ? 10 : 1,
              }}
            >
              <SceneComponent progress={sp} />
            </div>
          );
        })}

        <ProgressBar time={time} />
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          marginTop: 16,
        }}
      >
        <button
          onClick={playing ? pause : play}
          style={{
            background: COLORS.dark,
            color: COLORS.white,
            border: "none",
            borderRadius: 12,
            padding: "10px 28px",
            fontSize: "0.9rem",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "inherit",
          }}
        >
          {playing ? "⏸ Pause" : time >= TOTAL_DURATION ? "▶ Play" : "▶ Play"}
        </button>
        <button
          onClick={restart}
          style={{
            background: "#F1F5F9",
            color: COLORS.muted,
            border: "1px solid #E5E4DF",
            borderRadius: 12,
            padding: "10px 20px",
            fontSize: "0.9rem",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          ↻ Restart
        </button>
        <div style={{ fontSize: "0.8rem", fontWeight: 600, color: COLORS.muted, marginLeft: 4 }}>
          {Math.ceil(time / 1000)}s / 30s
        </div>
      </div>
    </div>
  );
}