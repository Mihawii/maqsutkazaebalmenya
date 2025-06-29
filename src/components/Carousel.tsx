import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import {
  FiCircle,
  FiCode,
  FiFileText,
  FiLayers,
  FiLayout,
} from "react-icons/fi";
import '../styles/Carousel.css';

// Fix for React 19 + react-icons type incompatibility
// Use this type instead of IconType from react-icons
// Remove or comment out: import { IconType } from "react-icons";
type FixedIconType = (props: React.ComponentProps<'svg'>) => React.ReactNode;

interface CarouselItem {
  title: string;
  description: string;
  id: number;
}

interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  { id: 1, title: "01", description: "How to choose the right university for your future" },
  { id: 2, title: "02", description: "How to prepare independently for IELTS and SAT" },
  { id: 3, title: "03", description: "How to calculate GPA - School grades correctly" },
  { id: 4, title: "04", description: "How to start building your portfolio" },
  { id: 5, title: "05", description: "How to work with top data platforms" },
  { id: 6, title: "06", description: "How to write essays and recommendations for admissions." },
  { id: 7, title: "07", description: "How to successfully pass interviews" },
  { id: 8, title: "08", description: "How to properly apply to American universities" },
  { id: 9, title: "09", description: "How to create a proper CSS profile" },
  { id: 10, title: "10", description: "How to successfully pass interviews" },
  { id: 11, title: "11", description: "How to properly apply to American universities" },
  { id: 12, title: "12", description: "How to create a proper CSS profile" },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 } as const;

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Create a single useTransform hook for all items
  const createRotateY = (index: number) => {
    const range = [
      -(index + 1) * trackItemOffset,
      -index * trackItemOffset,
      -(index - 1) * trackItemOffset,
    ];
    const outputRange = [90, 0, -90];
    return range.map((r, i) => ({ input: r, output: outputRange[i] }));
  };

  const rotateY = useTransform(x, 
    carouselItems.flatMap((_, i) => createRotateY(i).map(r => r.input)),
    carouselItems.flatMap((_, i) => createRotateY(i).map(r => r.output))
  );

  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  // Number of cards to show at once
  const cardsToShow = 3;
  // Calculate the visible window of cards (no duplicates, no mid-window wrap)
  const getVisibleCards = () => {
    let start = currentIndex;
    // If near the end, clamp to last full window
    if (start > carouselItems.length - cardsToShow) {
      start = carouselItems.length - cardsToShow;
    }
    if (start < 0) start = 0;
    return carouselItems.slice(start, start + cardsToShow);
  };

  // Adjust arrow logic to clamp to valid windows
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) return carouselItems.length - cardsToShow;
      return prev - 1;
    });
  };
  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= carouselItems.length - cardsToShow) return 0;
      return prev + 1;
    });
  };

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? "round" : ""}`}
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '32px auto 0',
        /* background: 'var(--bg-color)', */
        borderRadius: '40px',
        boxShadow: '0 6px 32px var(--shadow)',
        padding: '0',
        display: 'block',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {/* Left arrow - vertically centered */}
      <button
        aria-label="Previous"
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: '-48px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'var(--bg-color)',
          border: 'none',
          borderRadius: '50%',
          width: '64px',
          height: '64px',
          fontSize: '2.2rem',
          color: 'var(--secondary-color)',
          cursor: 'pointer',
          boxShadow: '0 4px 24px var(--shadow)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'box-shadow 0.2s, background 0.2s',
          zIndex: 3,
        }}
        onMouseOver={e => e.currentTarget.style.boxShadow = '0 8px 32px var(--shadow-lg)'}
        onMouseOut={e => e.currentTarget.style.boxShadow = '0 4px 24px var(--shadow)'}
      >
        &#8592;
      </button>
      {/* Right arrow - vertically centered */}
      <button
        aria-label="Next"
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: '-48px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'var(--bg-color)',
          border: 'none',
          borderRadius: '50%',
          width: '64px',
          height: '64px',
          fontSize: '2.2rem',
          color: 'var(--secondary-color)',
          cursor: 'pointer',
          boxShadow: '0 4px 24px var(--shadow)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'box-shadow 0.2s, background 0.2s',
          zIndex: 3,
        }}
        onMouseOver={e => e.currentTarget.style.boxShadow = '0 8px 32px var(--shadow-lg)'}
        onMouseOut={e => e.currentTarget.style.boxShadow = '0 4px 24px var(--shadow)'}
      >
        &#8594;
      </button>
      {/* Animated cards row */}
      <div style={{ minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ display: 'flex', gap: '32px', width: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            {getVisibleCards().map((item) => (
              <div
                key={item.id}
                className="carousel-item"
                style={{
                  width: '340px',
                  minHeight: '300px',
                  height: 'auto',
                  boxShadow: '0 4px 24px var(--shadow)',
                  border: '2px solid var(--border-color)',
                  borderRadius: '32px',
                  padding: '2.5rem 1.5rem 2.5rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  overflow: 'auto',
                  wordBreak: 'break-word',
                  textAlign: 'center',
                }}
              >
                <div className="carousel-item-header" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.2rem', marginTop: '0.5rem', borderRadius: '100px' }}>{item.title}</div>
                <div className="carousel-item-content">
                  <div className="carousel-item-title" style={{ fontWeight: 500, fontSize: '1.2rem', marginBottom: 0, lineHeight: 1.5 }}>{item.description}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Indicators */}
      <div className={`carousel-indicators-container ${round ? "round" : ""}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <div
              key={index}
              className={`carousel-indicator ${currentIndex % items.length === index ? "active" : "inactive"}`}
              style={{ cursor: 'pointer' }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
