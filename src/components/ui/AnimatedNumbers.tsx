'use client';
import { FC, useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
interface AnimatedNumbersProps {
  value: number;
}

export const AnimatedNumbers: FC<AnimatedNumbersProps> = ({ value }) => {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 6000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};
