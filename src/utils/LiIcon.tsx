'use client';
import { FC } from 'react';
import { motion, useScroll } from 'framer-motion';

interface LiIconProps {
  reference: React.RefObject<HTMLElement>;
}

export const LiIcon: FC<LiIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
    layoutEffect: false,
  });
  return (
    <figure
      className={`absolute left-0 stroke-black`}
      style={{
        position: 'absolute',
        left: '0',
        stroke: `#000`,
      }}
    >
      <svg
        className='-rotate-90 md:h-[60px] md:w-[60px] xs:h-[40px] xs:w-[40px]'
        width='75'
        height='75'
        viewBox='0 0 100 100'
      >
        <circle
          cx='75'
          cy='50'
          r='20'
          style={{ stroke: ' #be185d', fill: 'none' }}
        />
        <motion.circle
          cx='75'
          cy='50'
          r='20'
          style={{
            strokeWidth: '5px',
            fill: '#fff',
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx='75'
          cy='50'
          r='10'
          style={{
            fill: '#be185d',
            strokeWidth: '1',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />
      </svg>
    </figure>
  );
};
