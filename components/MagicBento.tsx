"use client";

import {
  Children,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface MagicBentoProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  spotlightRadius?: number;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
}

export default function MagicBento({
  children,
  className = "",
  glowColor = "185, 121, 31",
  spotlightRadius = 350,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
}: MagicBentoProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();

      setMouse({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cards = Children.toArray(children);

  return (
    <div
      ref={containerRef}
      className={`magic-bento ${className}`}
      style={
        {
          "--magic-x": `${mouse.x}px`,
          "--magic-y": `${mouse.y}px`,
          "--glow-color": glowColor,
          "--spotlight-radius": `${spotlightRadius}px`,
        } as React.CSSProperties
      }
    >
      {/* GLOBAL SPOTLIGHT */}
      {enableSpotlight && (
        <div
          className="magic-bento-spotlight"
          style={{
            opacity: mouse.x === 0 && mouse.y === 0 ? 0 : 1,
          }}
        />
      )}

      <div className="magic-bento-grid">
        {cards.map((card, index) => (
          <BentoCard
            key={index}
            index={index}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            enableBorderGlow={enableBorderGlow}
            enableTilt={enableTilt}
            enableMagnetism={enableMagnetism}
            clickEffect={clickEffect}
            mouse={mouse}
          >
            {card}
          </BentoCard>
        ))}
      </div>

      <style jsx>{`
        .magic-bento {
          position: relative;
          width: 100%;
        }

        .magic-bento-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          grid-auto-rows: 250px;
          gap: 14px;
        }

        .magic-bento-spotlight {
          position: absolute;
          pointer-events: none;
          z-index: 10;

          left: var(--magic-x);
          top: var(--magic-y);

          width: var(--spotlight-radius);
          height: var(--spotlight-radius);

          transform: translate(-50%, -50%);

          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(var(--glow-color), 0.12) 0%,
            rgba(var(--glow-color), 0.05) 30%,
            transparent 70%
          );

          filter: blur(8px);

          transition: opacity 300ms ease;
        }

        @media (max-width: 900px) {
          .magic-bento-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-rows: 260px;
          }
        }

        @media (max-width: 640px) {
          .magic-bento-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 280px;
          }
        }
      `}</style>
    </div>
  );
}

interface BentoCardProps {
  children: ReactNode;
  index: number;
  activeCard: number | null;
  setActiveCard: (value: number | null) => void;
  enableBorderGlow: boolean;
  enableTilt: boolean;
  enableMagnetism: boolean;
  clickEffect: boolean;
  mouse: {
    x: number;
    y: number;
  };
}

function BentoCard({
  children,
  index,
  activeCard,
  setActiveCard,
  enableBorderGlow,
  enableTilt,
  enableMagnetism,
  clickEffect,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    if (enableTilt) {
      cardRef.current.style.setProperty(
        "--rotate-x",
        `${rotateX}deg`
      );

      cardRef.current.style.setProperty(
        "--rotate-y",
        `${rotateY}deg`
      );
    }

    if (enableMagnetism) {
      const moveX = ((x - centerX) / centerX) * 5;
      const moveY = ((y - centerY) / centerY) * 5;

      cardRef.current.style.setProperty(
        "--move-x",
        `${moveX}px`
      );

      cardRef.current.style.setProperty(
        "--move-y",
        `${moveY}px`
      );
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);

    if (!cardRef.current) return;

    cardRef.current.style.setProperty(
      "--rotate-x",
      "0deg"
    );

    cardRef.current.style.setProperty(
      "--rotate-y",
      "0deg"
    );

    cardRef.current.style.setProperty(
      "--move-x",
      "0px"
    );

    cardRef.current.style.setProperty(
      "--move-y",
      "0px"
    );
  };

  const handleClick = () => {
    if (!clickEffect) return;

    setActiveCard(index);

    setTimeout(() => {
      setActiveCard(null);
    }, 450);
  };

  return (
    <div
      ref={cardRef}
      className={`magic-card magic-card-${index} ${
        hovered ? "is-hovered" : ""
      } ${activeCard === index ? "is-clicked" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {enableBorderGlow && (
        <div className="magic-card-border" />
      )}

      <div className="magic-card-inner">
        {children}
      </div>

      <style jsx>{`
        .magic-card {
          position: relative;
          min-width: 0;
          height: 100%;

          transform:
            perspective(1000px)
            rotateX(var(--rotate-x, 0deg))
            rotateY(var(--rotate-y, 0deg))
            translate3d(
              var(--move-x, 0px),
              var(--move-y, 0px),
              0
            );

          transition:
            transform 500ms cubic-bezier(0.22, 1, 0.36, 1);

          cursor: default;

          isolation: isolate;
        }

        .magic-card-border {
          position: absolute;
          inset: 0;
          z-index: -1;

          border-radius: 24px;

          background:
            radial-gradient(
              160px circle at var(--card-x, 50%) var(--card-y, 50%),
              rgba(var(--glow-color), 0.75),
              transparent 70%
            );

          opacity: 0;

          transition:
            opacity 400ms ease;
        }

        .magic-card-inner {
          position: relative;
          width: 100%;
          height: 100%;

          overflow: hidden;

          border: 1px solid rgba(35, 54, 31, 0.12);
          border-radius: 22px;

          background: #f4f0e4;

          transition:
            border-color 400ms ease,
            box-shadow 400ms ease,
            transform 400ms ease;
        }

        .magic-card.is-hovered .magic-card-border {
          opacity: 1;
        }

        .magic-card.is-hovered .magic-card-inner {
          border-color: rgba(var(--glow-color), 0.45);

          box-shadow:
            0 20px 50px rgba(35, 54, 31, 0.12),
            0 0 30px rgba(var(--glow-color), 0.08);
        }

        .magic-card.is-clicked .magic-card-inner {
          transform: scale(0.975);
        }

        .magic-card-0 {
          grid-column: span 2;
          grid-row: span 2;
        }

        .magic-card-1 {
          grid-column: span 1;
        }

        .magic-card-2 {
          grid-column: span 1;
        }

        .magic-card-3 {
          grid-column: span 2;
        }

        @media (max-width: 900px) {
          .magic-card-0 {
            grid-column: span 2;
            grid-row: span 2;
          }

          .magic-card-1,
          .magic-card-2 {
            grid-column: span 1;
          }

          .magic-card-3 {
            grid-column: span 2;
          }
        }

        @media (max-width: 640px) {
          .magic-card-0,
          .magic-card-1,
          .magic-card-2,
          .magic-card-3 {
            grid-column: span 1;
            grid-row: span 1;
          }
        }
      `}</style>
    </div>
  );
}