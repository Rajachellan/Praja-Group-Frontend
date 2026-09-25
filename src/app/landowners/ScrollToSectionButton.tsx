'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ScrollToSectionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  targetId: string;
  children: ReactNode;
};

export default function ScrollToSectionButton({ targetId, children, onClick, ...props }: ScrollToSectionButtonProps) {
  return (
    <button
      {...props}
      onClick={(event) => {
        onClick?.(event);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {children}
    </button>
  );
}
