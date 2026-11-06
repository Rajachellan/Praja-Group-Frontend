'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let cancelled = false;

    const initAnimations = async () => {
      if (cancelled) return;
      const hasDataGsap = document.querySelector('[data-gsap]');
      if (!hasDataGsap) return;

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();

      const fadeUpEls = document.querySelectorAll('[data-gsap="fade-up"]');
      fadeUpEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      const fadeInEls = document.querySelectorAll('[data-gsap="fade-in"]');
      fadeInEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      const scaleInEls = document.querySelectorAll('[data-gsap="scale-in"]');
      scaleInEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      const slideLeftEls = document.querySelectorAll('[data-gsap="slide-left"]');
      slideLeftEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      const slideRightEls = document.querySelectorAll('[data-gsap="slide-right"]');
      slideRightEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      const staggerContainers = document.querySelectorAll('[data-gsap="stagger-children"]');
      staggerContainers.forEach((container) => {
        const containerChildren = container.children;
        if (containerChildren.length > 0) {
          gsap.fromTo(
            containerChildren,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              stagger: 0.05,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: container,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    };

    const scheduleIdle =
      typeof window.requestIdleCallback === 'function'
        ? window.requestIdleCallback(() => void initAnimations(), { timeout: 1500 })
        : window.setTimeout(() => void initAnimations(), 200);

    return () => {
      cancelled = true;
      if (typeof window.cancelIdleCallback === 'function' && typeof scheduleIdle === 'number') {
        window.cancelIdleCallback(scheduleIdle);
      } else {
        clearTimeout(scheduleIdle as number);
      }
    };
  }, [pathname]);

  return <>{children}</>;
}
