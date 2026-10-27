import type { ReactNode } from 'react';
import styles from './Sublinhado.module.css';

export function Sublinhado({ children }: { children: ReactNode }) {
  return (
    <span className={styles.sublinhado}>
      {children}
      <svg viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true">
        <path d="M4 15 C 70 6, 160 20, 296 9" stroke="#FF6E00" strokeWidth={9} fill="none" strokeLinecap="round" />
        <path
          d="M14 19 C 110 12, 210 21, 286 15"
          stroke="#FF6E00"
          strokeWidth={5}
          fill="none"
          strokeLinecap="round"
          opacity={0.8}
        />
      </svg>
    </span>
  );
}
