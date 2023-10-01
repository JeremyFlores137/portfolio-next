'use client';
import { Presentation } from '@/components/ui';
import { FC } from 'react';
import Image from 'next/image';
import robotin from '../../../public/img/robotin.png';
import { SvgComponentSend } from '@/components/svg';
import { useState, KeyboardEvent } from 'react';

interface AskMeProps {}

const AskMe: FC<AskMeProps> = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('askMe/api/bot', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleKeypress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    //it triggers by pressing the enter key
    if (event.code === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className='flex w-full flex-col items-center justify-center pb-16'>
      <Presentation
        text='!Cuénteme! ¿Qué desea saber?'
        className='!mb-16 !normal-case dark:!text-white/80 3xl:!mt-8 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl'
      />
      <Image
        src={robotin.src}
        alt='Imagen de Robotín'
        width={300}
        height={300}
        className='py-5'
      />
      <div className='relative m-0 h-[13vh] w-2/3 rounded-xl border border-white bg-gray-600 p-0 sm:w-[85%]'>
        <textarea
          style={{ fontFamily: 'Dancing Script, cursive' }}
          placeholder='Introduzca su mensaje'
          className='relative top-[50%] m-0 translate-y-[-50%] resize-none whitespace-nowrap rounded-xl border-none
           bg-gray-600 p-0 pl-5 text-white placeholder-gray-300 outline-none 3xl:h-[4rem] 
          3xl:w-[96%]  3xl:text-[2rem] 2xl:h-[3rem] 2xl:w-[w-90%] 2xl:text-[1.5rem] xl:h-[2rem] xl:w-[88%] xl:text-[1rem] md:w-[85%]
        '
          value={prompt}
          onChange={handleChange}
          onKeyDown={handleKeypress}
        />
        <button
          onClick={() => handleSubmit()}
          disabled={isLoading || !prompt}
          className='absolute right-2 top-[50%] translate-y-[-50%] disabled:opacity-50'
        >
          <SvgComponentSend
            className='fill-gray-300 duration-500 ease-in-out hover:scale-105
        hover:cursor-pointer hover:fill-white disabled:pointer-events-none 3xl:text-3xl xs:text-xl'
            isLoading={isLoading || !prompt}
          />
        </button>
      </div>
      <div className='relative mt-5 h-[50vh] w-2/3 rounded-xl border border-white bg-gray-600 p-4 text-white sm:w-[85%]'>
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            Respuesta aquí:
            <Presentation
              text={result}
              className='!text-left !normal-case 3xl:!text-xl lg:!text-lg md:!text-lg sm:!text-sm mt-2'
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AskMe;
