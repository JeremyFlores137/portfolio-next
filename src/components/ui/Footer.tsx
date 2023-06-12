'use client';
import { FC } from 'react';
import { SvgComponentGit, SvgComponentLin, SvgComponentTwi } from '../svg';
import { motion } from 'framer-motion';

interface PageProps {}

export const Footer: FC<PageProps> = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-black text-lg font-medium sm:text-base dark:bg-black/90'>
      <div className='flex items-center justify-between px-10 py-8 lg:flex-col lg:py-6'>
        <span className="dark:text-white/80">{new Date().getFullYear()} &copy; Copyright - Ieremy Flores</span>
        <div className='flex items-center justify-between gap-10 lg:py-4'>
          <motion.a
            href='https://github.com/JeremyFlores137'
            target={'_blank'}
            whileHover={{ y: -2 }}
            className='w-6'
            whileTap={{ scale: 0.9 }}
          >
            <SvgComponentGit
              className={`dark:fill-white`}
            />
          </motion.a>
          <motion.a
            href='https://www.linkedin.com/in/ieremy-flores-condori-a07036233/'
            target={'_blank'}
            whileHover={{ y: -2 }}
            className='w-6'
            whileTap={{ scale: 0.9 }}
          >
            <SvgComponentLin className='fill-blue-700' />
          </motion.a>
          <motion.a
            href='https://twitter.com/JeremyFloresCo1'
            target={'_blank'}
            whileHover={{ y: -2 }}
            className='w-6'
            whileTap={{ scale: 0.9 }}
          >
            <SvgComponentTwi className='fill-blue-400' />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};
