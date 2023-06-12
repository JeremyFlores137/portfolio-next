'use client';
import { SkillAnimation } from '@/utils';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  return (
    <>
      <h2 className='mb-5 mt-64 w-full text-center text-8xl font-bold dark:text-white/80 md:mt-32 md:text-6xl 3xl:mb-14'>
        Habilidades
      </h2>
      <div
        className='relative flex h-screen w-full items-center justify-center rounded-full
      bg-circularLight lg:h-[80vh] lg:bg-circularLightLg md:bg-circularLightMd sm:h-[60vh] sm:bg-circularLightSm
      xs:h-[50vh] dark:bg-circularDark dark:md:bg-circularDarkMd dark:lg:bg-circularDarkLg
      dark:sm:bg-circularDarkSm
      '
      >
        <motion.div
          className='flex cursor-pointer items-center justify-center rounded-full bg-black p-10 text-2xl font-semibold
         text-white shadow-black xl:p-8 xl:text-xl lg:p-6 md:p-4 xs:p-2 xs:text-sm'
          whileHover={{ scale: 1.05 }}
        >
          Full-Stack Developer
        </motion.div>

        <SkillAnimation
          name='HTML'
          x='-40vw'
          y='5vw'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black'
        />
        <SkillAnimation
          name='CSS'
          x='40vw'
          y='-3vw'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black'
        />
        <SkillAnimation
          name='JavaScript'
          x='5vw'
          y='20vw'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black'
        />
        <SkillAnimation
          name='Node.js'
          x='10vw'
          y='-10vw'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black'
        />
        <SkillAnimation
          name='Docker'
          x='-18vw'
          y='10vw'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black'
        />
        <SkillAnimation
          name='Kubernetes'
          x='-25vw'
          y='-8vw'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black'
        />
        <SkillAnimation
          name='Next.js'
          x='5vw'
          y='-20vw'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black'
        />
        <SkillAnimation
          name='React'
          x='-18vw'
          y='23vw'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black'
        />
        <SkillAnimation
          name='Web Design'
          x='30vw'
          y='15vw'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black'
        />
        <SkillAnimation
          name='Java'
          x='-30vw'
          y='-20vw'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black'
        />
        <SkillAnimation
          name='Spring'
          x='30vw'
          y='-18vw'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black'
        />
        <SkillAnimation
          name='Python'
          x='-12vw'
          y='-23vw'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black'
        />
      </div>
    </>
  );
};

export default Skills;
