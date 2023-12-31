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
         text-white shadow-black xl:p-8 xl:text-xl lg:p-6 md:p-4 xs:p-2 xs:text-sm dark:sm:bg-white/80 dark:sm:text-black'
          whileHover={{ scale: 1.05 }}
        >
          Full-Stack Developer
        </motion.div>

        <SkillAnimation
          name='HTML'
          x='-40vw'
          y='5vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='CSS'
          x='40vw'
          y='-3vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='JavaScript'
          x='5vw'
          y='20vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='Node.js'
          x='10vw'
          y='-10vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='Docker'
          x='-18vw'
          y='10vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='Kubernetes'
          x='-25vw'
          y='-8vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='Next.js'
          x='5vw'
          y='-20vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='React'
          x='-16vw'
          y='21vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='Web Design'
          x='28vw'
          y='15vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='Java'
          x='-30vw'
          y='-16vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='Spring Boot'
          x='30vw'
          y='-16vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='ICCA'
          x='30vw'
          y='-5vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='Python'
          x='-12vw'
          y='-20vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='CC-(ISC)²'
          x='-30vw'
          y='15vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='eJPTv2'
          x='-5vw'
          y='-10vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
        <SkillAnimation
          name='CCNA 300-201'
          x='12vw'
          y='8vh'
          className='absolute flex cursor-pointer items-center justify-center rounded-full bg-black p-2 font-semibold 
      dark:text-white shadow-black 2xl:p-6 lg:px-4 lg:py-2 md:px-2 md:py-1.5 md:text-sm sm:text-xs xs:bg-transparent xs:text-black 3xl:text-white'
        />
      </div>
    </>
  );
};

export default Skills;
