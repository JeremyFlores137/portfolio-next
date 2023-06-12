'use client';
import { FC, useRef } from 'react';
import { DetailEducation } from '../../utils';
import { useScroll, motion } from 'framer-motion';

interface EducationProps {}

export const Education: FC<EducationProps> = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center'],
  });

  return (
    <div className='my-32'>
      <h2 className='mb-32 w-full text-center text-8xl font-bold dark:text-white/80 md:mb-16 md:text-6xl xs:text-4xl'>
        Education
      </h2>
      <div ref={ref} className='relative mx-auto w-[%75] lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className={`absolute left-14 top-0 h-full w-[4px] origin-top bg-black dark:bg-white md:left-[55px] md:w-[2px] xs:left-[55px]`}
        />

        <ul className='xs:ml-15 ml-16 flex-col items-start justify-between 2xl:ml-32 xl:ml-20 lg:ml-16'>
          <DetailEducation
            type='Bachelor of Science In Computer Science'
            time='2018 - 2023'
            place='Universidad Nacional de Ingeniería'
            info='Relevant courses included Data Structure'
          />
          <DetailEducation
            type='Bachelor of Science In Computer Science'
            time='2018 - 2023'
            place='Universidad Nacional de Ingeniería'
            info='Relevant courses included Data Structure'
          />
          <DetailEducation
            type='Bachelor of Science In Computer Science'
            time='2018 - 2023'
            place='Universidad Nacional de Ingeniería'
            info='Relevant courses included Data Structure'
          />
          <DetailEducation
            type='Bachelor of Science In Computer Science'
            time='2018 - 2023'
            place='Universidad Nacional de Ingeniería'
            info='Relevant courses included Data Structure'
          />
          <DetailEducation
            type='Bachelor of Science In Computer Science'
            time='2018 - 2023'
            place='Universidad Nacional de Ingeniería'
            info='Relevant courses included Data Structure'
          />
        </ul>
      </div>
    </div>
  );
};
