import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { SvgComponentGit } from '../svg';


interface FeatureProjectProps {
  type: string;
  title: string;
  summary: string;
  img: string;
  link: string;
  github: string;
  skillsList: string[];
  className?: string;
}

export const FeatureProject: FC<FeatureProjectProps> = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  skillsList,
  className = '',
}) => {

  return (
    <article
      className={`relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-black
    dark:bg-neutral-300 bg-white p-12 shadow-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4`}
    >
      <div
        className='absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-black
      sm:h-[102%] xs:-right-2 xs:w-full xs:rounded-[1.5rem]
      '
      />
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <Image
          src={img}
          alt={title}
          className={`h-auto w-full ${className}`}
          width={800}
          height={600}
        />
      </Link>
      <div className='flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-xl font-medium text-pink-700 xs:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='underline-offset-2 hover:underline'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold text-black sm:text-sm'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-black sm:text-sm'>{summary}</p>
        <ul className='ml-5'>
          {skillsList.map((skill: string, index: number) => (
            <li key={index} className='m-2 list-disc text-pink-700'>
              {skill}
            </li>
          ))}
        </ul>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <SvgComponentGit />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-black p-2 px-6 text-lg font-semibold text-white sm:px-4 sm:text-base'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
