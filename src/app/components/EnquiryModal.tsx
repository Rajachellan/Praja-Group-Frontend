'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';

const EnquiryModalContent = dynamic(() => import('./EnquiryModalContent'), {
  ssr: false,
});

const SESSION_KEY = 'prajha_enquiry_shown';

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === '1') {
        return;
      }
    } catch {
      // Ignore storage access errors in restricted modes
    }

    let opened = false;
    let interactionTimer: ReturnType<typeof setTimeout> | undefined;

    const triggerOpen = () => {
      if (opened) return;
      opened = true;
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        // Ignore storage errors
      }
      setIsOpen(true);
    };

    const onFirstEngagement = () => {
      cleanupListeners();
      clearTimeout(fallbackTimer);
      interactionTimer = setTimeout(triggerOpen, 1800);
    };

    const events: Array<keyof WindowEventMap> = [
      'scroll',
      'touchstart',
      'pointerdown',
      'keydown',
    ];

    const cleanupListeners = () => {
      events.forEach((evt) =>
        window.removeEventListener(evt, onFirstEngagement)
      );
    };

    events.forEach((evt) =>
      window.addEventListener(evt, onFirstEngagement, {
        passive: true,
        once: true,
      })
    );

    // Fallback idle timer well outside initial LCP window
    const fallbackTimer = setTimeout(() => {
      cleanupListeners();
      triggerOpen();
    }, 15000);

    return () => {
      cleanupListeners();
      clearTimeout(fallbackTimer);
      if (interactionTimer) clearTimeout(interactionTimer);
    };
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  if (!isOpen) return null;

  return <EnquiryModalContent onClose={handleClose} />;
}
