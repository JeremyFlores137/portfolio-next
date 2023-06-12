import { FC, useRef } from 'react';
import { LiIcon } from './';
import { motion } from 'framer-motion';

interface DetailProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

export const Detail: FC<DetailProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      style={{ margin: '1.5em' }}
      className='mx-auto flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0 md:w-[80%] '
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='text-2xl font-bold dark:text-white/75 sm:text-xl xs:text-lg'>
          {position}&nbsp;
          <a
            href={companyLink}
            target='_blank'
            style={{ color: 'rgb(190 24 93)', textTransform: 'capitalize' }}
          >
            @{company}
          </a>
        </h3>
        <span style={{opacity:0.6}} className='font-semibold dark:text-white xs:text-sm'>
          {time} | {address}
        </span>
        <p className='w-full font-medium dark:text-white/75 md:text-sm'>
          {work}
        </p>
      </motion.div>
    </li>
  );
};
