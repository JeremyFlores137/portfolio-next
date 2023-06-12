import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { SvgComponentGit } from '../svg';


interface ProjectProps {
  type: string;
  title: string;
  skillsList: string[];
  img: string;
  link: string;
  github: string;
  summary: string;
  className?: string;
}

export const Project: FC<ProjectProps> = ({
  type,
  title,
  img,
  link,
  github,
  skillsList,
  summary,
  className = '',
}) => {

  return (
    <article
      className={`relative flex w-full flex-col items-center justify-center rounded-2xl border border-solid
     border-black dark:bg-neutral-300 bg-white p-6 xs:p-4`}
    >
      <div
        className='absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2rem] rounded-br-3xl bg-black
      md:-right-2 md:w-[101%] xs:h-[101%] xs:rounded-[1.5rem]
      '
      />
      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image
          src={img}
          alt={title}
          className={`h-auto w-full ${className}`}
          width={800}
          height={600}
        />
      </Link>
      <div className='mt-4 flex w-full flex-col items-start justify-between'>
        <span className='text-xl font-medium text-pink-700 lg:text-lg md:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='underline-offset-2 hover:underline'
        >
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl text-black'>
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
        <div className='mt-2 flex w-full items-center justify-between'>
          <Link
            href={link}
            target='_blank'
            className='text-lg font-semibold underline md:text-base text-black'
          >
            Visit
          </Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'>
            <SvgComponentGit />
          </Link>
        </div>
      </div>
    </article>
  );
};
