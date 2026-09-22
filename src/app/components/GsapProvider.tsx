'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const timer = setTimeout(() => {
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
        const children = container.children;
        if (children.length > 0) {
          gsap.fromTo(
            children,
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
    }, 20);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return <>{children}</>;
}
