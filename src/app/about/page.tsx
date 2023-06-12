import { Education, Experience, Presentation } from '@/components/ui';
import { FC } from 'react';
import ieremyPhoto from '../../../public/img/ieremy_terno.png';
import Image from 'next/image';
import { AnimatedNumbers } from '@/components/ui';
import Skills from '@/components/ui/Skills';

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <Presentation
        text='Poder del Desarrollo: Imagina y Despliégalo'
        className='!mb-16 !normal-case 3xl:!mt-40 2xl:!mt-8 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl dark:!text-white/80'
      />
      <div className='grid w-full grid-cols-8 gap-16 pb-24 pt-5 3xl:px-24 md:px-0 sm:gap-8'>
        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
          <h2 className={`mb-4 text-lg font-bold uppercase dark:text-white/80`}>
            Biografía
          </h2>
          <p className='font-medium dark:text-white/75'>
            Soy un estudiante de la carrera de Ingeniería de Telecomunicaciones
            de Perú, desde mis inicios en la universidad afloró en mi una pasión
            por el mundo de la Programación, Desarrollo de Aplicaciones,
            Ciberseguridad, Cloud Computing, entre otras cosas. Siempre trato de
            desarrollar aplicaciones que no solo funcionen, sino que sean lo más
            optimas posibles para las diversas plataformas del mercado.
          </p>
          <p className='my-4 font-medium dark:text-white/75'>
            En este momento me encuentro en el 9no ciclo académico y ansío poner
            en práctica todos mis conocimientos aprendidos.
          </p>
        </div>
        <div
          className='relative col-span-3 h-max rounded-2xl border-2 border-solid border-black bg-white p-8 xl:col-span-4
          md:order-1 md:col-span-8
        '
        >
          <div className='absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-black md:right-0' />
          <Image
            src={ieremyPhoto}
            alt='Foto de Ieremy'
            className='h-auto rounded-2xl 2xl:m-auto 2xl:w-[80%] xl:w-full'
          />
        </div>
        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
          <div className='flex flex-col items-end justify-center xl:items-center'>
            <span
              className={`inline-block text-8xl font-bold dark:text-white md:text-6xl sm:text-5xl 
            xs:text-4xl`}
            >
              <AnimatedNumbers value={50} /> +
            </span>
            <h2
              className={`text-xl font-medium capitalize dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm`}
            >
              Clientes Satifechos
            </h2>
          </div>
          <div className='flex flex-col items-end justify-center xl:items-center'>
            <span
              className={`inline-block text-8xl font-bold dark:text-white md:text-6xl sm:text-5xl xs:text-4xl`}
            >
              <AnimatedNumbers value={50} /> +
            </span>
            <h2
              className={`text-xl font-medium capitalize dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm`}
            >
              Projects Completed
            </h2>
          </div>
          <div className='flex flex-col items-end justify-center xl:items-center'>
            <span
              className={`inline-block text-8xl font-bold dark:text-white md:text-6xl sm:text-5xl xs:text-4xl`}
            >
              <AnimatedNumbers value={50} /> +
            </span>
            <h2
              className={`text-xl font-medium capitalize dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm`}
            >
              Years of experience
            </h2>
          </div>
        </div>
      </div>
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};

export default About;
