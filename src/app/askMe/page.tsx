import { Presentation } from '@/components/ui';
import { FC } from 'react';
import Image from 'next/image';
import robotin from '../../../public/img/robotin.png';
import { SvgComponentSend } from '@/components/svg';

interface AskMeProps {}

const AskMe: FC<AskMeProps> = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center pb-16 3xl:mt-40 2xl:mt-0'>
      <Presentation
        text='!Cuénteme! ¿Qué desea saber?'
        className='!mb-16 !normal-case dark:!text-white/80 3xl:!mt-40 2xl:!mt-8 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl'
      />
      <Image
        src={robotin.src}
        alt='Imagen de Robotín'
        width={300}
        height={300}
        className='py-5'
      />
      <div className='relative m-0 h-[13vh] w-2/3 rounded-xl bg-gray-600 p-0'>
        <textarea
          style={{ fontFamily: 'Dancing Script, cursive' }}
          placeholder='Introduzca su mensaje'
          className='relative top-[50%] m-0 translate-y-[-50%] resize-none whitespace-nowrap rounded-xl border-none
           bg-gray-600 p-0 pl-5 text-white placeholder-gray-300 outline-none 3xl:h-[4rem] 
          3xl:w-[96%]  3xl:text-[2rem]  2xl:h-[3rem] 2xl:w-[w-90%] 2xl:text-[1.5rem] xl:h-[2rem] xl:w-[88%] xl:text-[1rem] md:w-[85%]
          xs:w-[82%]
        '
        />
        <SvgComponentSend
          className='absolute right-2 top-[50%] translate-y-[-50%] fill-gray-300 duration-500 ease-in-out
        hover:scale-105 hover:cursor-pointer hover:fill-white 3xl:text-3xl xs:text-xl 
        '
        />
      </div>
    </div>
  );
};

export default AskMe;
