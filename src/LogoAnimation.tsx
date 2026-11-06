import { useEffect, useRef, useState, type ReactNode } from 'react';
import { SaoirseFace } from './SaoirseFace';

const LABEL = "The Saoi wordmark rolls up into Saoirse's face";

/**
 * Whether the animation can run at all. Without these three APIs, or for a visitor who asks for
 * less motion, the stage shows the face at rest instead. (The SVG's own reduced-motion rule
 * shows the wordmark, not the face, so it is not used.)
 */
function canAnimate(): boolean {
  if (typeof window === 'undefined') return false;
  if (typeof IntersectionObserver === 'undefined') return false;
  if (typeof Element.prototype.attachShadow !== 'function') return false;
  if (typeof Element.prototype.getAnimations !== 'function') return false;
  if (typeof window.matchMedia === 'function') {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  }
  return true;
}

const HOST_CSS = ':host{display:block}svg{display:block;width:100%;height:auto}';

function ReplayIcon(): ReactNode {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4"
    >
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </svg>
  );
}

export function LogoAnimation(): ReactNode {
  const [animated] = useState(canAnimate);
  const [finished, setFinished] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const animationsRef = useRef<Animation[]>([]);

  const play = (): void => {
    const animations = animationsRef.current;
    for (const animation of animations) animation.play();
    Promise.all(animations.map((animation) => animation.finished)).then(
      () => {
        setFinished(true);
      },
      () => {
        // A cancelled animation (the page went away) is not a finished one.
      },
    );
  };

  useEffect(() => {
    const stage = stageRef.current;
    if (!animated || stage === null) return;

    let cancelled = false;
    let observer: IntersectionObserver | null = null;
    let started = false;

    const start = (): void => {
      if (started || cancelled) return;
      if (document.visibilityState !== 'visible') return;
      started = true;
      observer?.disconnect();
      document.removeEventListener('visibilitychange', onVisible);
      play();
    };
    let visibleEnough = false;
    const onVisible = (): void => {
      if (visibleEnough) start();
    };

    void import('./assets/saoi-to-face.svg?raw').then((module) => {
      if (cancelled) return;
      const root = stage.shadowRoot ?? stage.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>${HOST_CSS}</style>${module.default}`;
      const animations = root.getAnimations();
      for (const animation of animations) {
        animation.pause();
        animation.currentTime = 0;
      }
      animationsRef.current = animations;

      observer = new IntersectionObserver(
        (entries) => {
          visibleEnough = entries.some((entry) => entry.isIntersecting);
          if (visibleEnough) start();
        },
        { threshold: 0.6 },
      );
      observer.observe(stage);
      document.addEventListener('visibilitychange', onVisible);
    });

    return () => {
      cancelled = true;
      observer?.disconnect();
      document.removeEventListener('visibilitychange', onVisible);
    };
    // `play` only reads a ref and a state setter, so it is stable for this effect's purpose.
  }, [animated]);

  const replay = (): void => {
    for (const animation of animationsRef.current) animation.currentTime = 0;
    setFinished(false);
    play();
  };

  return (
    <div className="relative mx-auto aspect-video w-full max-w-[480px]">
      <div
        ref={stageRef}
        role="img"
        aria-label={LABEL}
        className="text-saoi grid h-full w-full place-items-center"
      >
        {animated ? null : <SaoirseFace className="h-24 w-auto" />}
      </div>
      {animated ? (
        <button
          type="button"
          aria-label="Replay the animation"
          onClick={replay}
          disabled={!finished}
          tabIndex={finished ? 0 : -1}
          className={`text-muted hover:text-ink absolute right-1 bottom-1 grid size-7 place-items-center rounded-full transition-opacity duration-500 ${finished ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
          <ReplayIcon />
        </button>
      ) : null}
    </div>
  );
}
