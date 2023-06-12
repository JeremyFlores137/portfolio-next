import { FC, useRef } from 'react';
import { LiIcon } from './';
import { motion } from 'framer-motion';

interface DetailEducationProps {
  type: string;
  time: string;
  place: string;
  info: string;
}

export const DetailEducation: FC<DetailEducationProps> = ({
  type,
  time,
  place,
  info,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      style={{ margin: '1.5em' }}
      className='mx-auto flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0 md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='text-2xl font-bold capitalize sm:text-xl xs:text-lg dark:text-white/75'>
          {type}
        </h3>
        <span
          style={{
            fontWeight: '500',
            textTransform: 'capitalize',
          }}
          className='xs:text-sm dark:text-white/60'
        >
          {time} | {place}
        </span>
        <p className='w-full font-medium md:text-sm dark:text-white/75'>{info}</p>
      </motion.div>
    </li>
  );
};
