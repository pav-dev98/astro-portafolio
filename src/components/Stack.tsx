import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import './Stack.css';
import CardRotate from './CardRotate';
import Project from './Project';
// import './ProjectList.css';


const projects = [
  {
    name: "Spot CLI",
    version: "1.0.0, beta",
    description: "Smart directory & stack manager",
    link: "https://github.com/pav-dev98/spot",
    features: [
      "Smart directory & stack manager",
      "Fast SQLite persistence (zero config)",
      "Pattern: Service/Repository + Zod",
      "Testing with Vitest & TypeScript",
    ]
  }, {
    name: "Recs.ai",
    version: "1.0.0, beta",
    description: "AI-powered personalized movie & book recommendation system",
    link: "https://github.com/pav-dev98/Recs.ai",
    features: [
      "AI recommendations via Grok API (xAI)",
      "Monorepo: Rails 8 API + React 19 + TypeScript",
      "JWT auth, rate limiting & background jobs",
      "Ratings, favorites & preference-based suggestions",
    ]
  },
  {
    name: "Pure Mineral",
    version: "1.0.0, beta",
    description: "E-commerce for natural stones, gems & artisanal jewelry",
    link: "https://github.com/pav-dev98/pure-mineral-nextjs",
    features: [
      "Product catalog with category filtering",
      "Built with Next.js 15 + React 19 + TypeScript",
      "UI: shadcn/ui, Tailwind CSS 4 & Framer Motion",
      "Responsive design & optimized UX",
    ]
  },
  // {
  //   name: "Peruvian Amazonite",
  //   version: "1.0.0, beta",
  //   description: "B2B landing page connecting wholesale buyers with Peruvian Amazonite mines",
  //   link: "https://github.com/pav-dev98/peruvian-amazonite-landing",
  //   features: [
  //     "Built with Astro 5 + React 19 (zero-JS by default)",
  //     "Lead capture form with Zod + React Hook Form",
  //     "Lead storage & persistence with Supabase",
  //     "shadcn/ui, Tailwind CSS 4 & dark/light mode",
  //   ]
  // }
];

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  const [stack, setStack] = useState(() => {
    if (cards.length) {
      return cards.map((content, index) => ({ id: index + 1, content }));
    } else {
      return projects.map((project, index) => ({ id: index + 1, content: <Project {...project} /> }));
    }
  });

  useEffect(() => {
    if (cards.length) {
      setStack(cards.map((content, index) => ({ id: index + 1, content })));
    }
  }, [cards]);

  const sendToBack = (id: number) => {
    setStack(prev => {
      const newStack = [...prev];
      const index = newStack.findIndex(card => card.id === id);
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  return (
    <div
      className="stack-container"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div className='blend'></div>
      {stack.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={shouldDisableDrag}
          >
            <motion.div
              className="card"
              onClick={() => shouldEnableClick && sendToBack(card.id)}
              animate={{
                rotateZ: (stack.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - stack.length * 0.06,
                transformOrigin: '90% 90%'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
