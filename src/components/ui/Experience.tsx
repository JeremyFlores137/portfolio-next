'use client';
import { FC, useRef } from 'react';
import { Detail } from '../../utils';
import { useScroll, motion } from 'framer-motion';

interface ExperienceProps {}

export const Experience: FC<ExperienceProps> = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center'],
  });

  return (
    <div className='my-32'>
      <h2 className='mb-32 w-full text-center text-8xl font-bold dark:text-white/80 md:mb-16 md:text-6xl xs:text-4xl'>
        Experience
      </h2>
      <div ref={ref} className='relative mx-auto w-[%75] lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className={`absolute left-14 top-0 h-full w-[4px] origin-top dark:bg-white bg-black md:left-[55px] md:w-[2px] xs:left-[55px]`}
        />

        <ul className='xs:ml-15 flex-col items-start justify-between 3xl:ml-32 xl:ml-20 lg:ml-16'>
          <Detail
            position='Software Engineering'
            company='Google'
            time='2023 - Present'
            address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's search engine."
            companyLink='https://www.google.com'
          />
          <Detail
            position='Software Engineering'
            company='Google'
            time='2023 - Present'
            address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's search engine."
            companyLink='https://www.google.com'
          />
          <Detail
            position='Software Engineering'
            company='Google'
            time='2023 - Present'
            address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's search engine."
            companyLink='https://www.google.com'
          />
          <Detail
            position='Software Engineering'
            company='Google'
            time='2023 - Present'
            address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's search engine."
            companyLink='https://www.google.com'
          />
          <Detail
            position='Software Engineering'
            company='Google'
            time='2023 - Present'
            address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's search engine."
            companyLink='https://www.google.com'
          />
        </ul>
      </div>
    </div>
  );
};
