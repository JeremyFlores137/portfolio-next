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
        className='!mb-16 !normal-case dark:!text-white/80 3xl:!mt-40 2xl:!mt-8 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl'
      />
      <div className='grid w-full grid-cols-8 gap-16 pb-24 pt-5 3xl:px-24 md:px-0 sm:gap-8'>
        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
          <h2 className={`mb-4 text-lg font-bold uppercase dark:text-white/80`}>
            Biografía
          </h2>
          <p className='font-medium dark:text-white/75'>
            Mi nombre es Ieremy Flores. Soy un estudiante de la carrera de
            Ingeniería de Telecomunicaciones en Perú. Desde mis inicios en la
            universidad, ha surgido en mí una gran pasión por el mundo de la
            programación, el Desarrollo de Aplicaciones, Ciberseguridad, Cloud
            Computing, Inteligencia Artificial, Redes de Computadoras, entre
            otros temas. Siempre me esfuerzo por desarrollar aplicaciones que no
            solo funcionen, sino que también sean óptimas para las diversas
            plataformas del mercado.
          </p>
          <p className='my-4 font-medium dark:text-white/75'>
            Mi objetivo principal es ser un guardian de la ciberseguridad,
            creando software seguro que proteja a millones de usuarios y haga
            del mundo digital un lugar más confiable y protegido.
          </p>
          <p className='font-medium dark:text-white/75'>
            Mi visión a largo plazo es trabajar en la industria del desarrollo
            de software seguro, colaborando con equipos multidisciplinarios para
            crear soluciones innovadoras que protejan a los usuarios y promuevan
            la confianza en el mundo digital.
          </p>
          <p className='my-4 font-medium dark:text-white/75'>
            Con su pasión, determinación y conocimientos técnicos, estaré
            preparado para enfrentar los desafíos de la industria del desarrollo
            de software seguro y dejar una huella significativa en la protección
            de la información y la privacidad de las personas.
          </p>
          <p className='font-medium dark:text-white/75'>
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
              <AnimatedNumbers value={10} /> +
            </span>
            <h2
              className={`text-xl font-medium capitalize dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm`}
            >
              Proyectos Concluidos
            </h2>
          </div>
          <div className='flex flex-col items-end justify-center xl:items-center'>
            <span
              className={`inline-block text-8xl font-bold dark:text-white md:text-6xl sm:text-5xl xs:text-4xl`}
            >
              <AnimatedNumbers value={15} /> +
            </span>
            <h2
              className={`text-xl font-medium capitalize dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm`}
            >
              Certificaciones Obtenidas
            </h2>
          </div>
          <div className='flex flex-col items-end justify-center xl:items-center'>
            <span
              className={`inline-block text-8xl font-bold dark:text-white md:text-6xl sm:text-5xl xs:text-4xl`}
            >
              <AnimatedNumbers value={4} /> +
            </span>
            <h2
              className={`text-xl font-medium capitalize dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm`}
            >
              Años de Preparación
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
