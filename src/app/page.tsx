import { Presentation, Transition } from '../components/ui';
import Image from 'next/image';
import ladder from '../../public/img/ladder_to_heaven.png';
import ContactMe from '@/components/ui/ContactMe';

export default function Home() {
  return (
    <>
      <Transition />
      <section className='flex w-full items-center justify-between lg:flex-col'>
        <div className='w-1/2 md:w-full'>
          <Image
            src={ladder}
            alt='logo'
            className='h-auto w-full rounded-xl lg:hidden md:inline-block md:w-full'
            priority
          />
        </div>
        <div className='flex w-1/2 flex-col items-center self-center 2xl:mx-5 lg:mx-0 3xl:ml-2 xl:ml-0 lg:w-full lg:text-center xs:mt-5'>
          <Presentation
            text='Convirtiendo Obstáculos en Sólidos Escalones hacia el Progreso'
            className='!text-6x1 !text-left
          !normal-case  dark:text-white/90 3xl:!ml-0 xl:!ml-0 xl:!text-6xl lg:!text-center lg:!text-5xl md:!text-4xl
          sm:!text-3xl 
          '
          />
          <p className='my-4 text-base font-medium 3xl:mr-auto 2xl:ml-2 xl:ml-0 md:text-sm sm:text-sm xs:mb-6
          dark:text-white/80'>
            Como explorador del desarrollo full-stack, trato de crear software
            seguro, eficiente y estéticamente atractivo, generando confianza y
            tranquilidad. Superando obstáculos, convierto desafíos en
            oportunidades de crecimiento.
          </p>
          <ContactMe />
          <div className='mr-auto flex items-center justify-center gap-2 3xl:mt-8 xl:mt-0 lg:m-auto lg:mb-20 lg:flex-col'>
            <a
              href='https://drive.google.com/file/d/12iTnN2CYgI83t7cJ_JIi2GONP0LfZ-Sh/view?usp=sharing'
              target='_blank'
              className='m-2 mb-auto rounded-xl bg-black p-5 text-white duration-700 ease-in-out hover:scale-105
            hover:bg-white hover:text-black 3xl:text-3xl 2xl:text-2xl xl:ml-auto xl:text-xl
            lg:m-auto lg:my-3 lg:text-lg md:p-4 md:text-lg xs:p-4 xs:px-8 3xl:ml-0
            '
            >
              Mi Curriculum
            </a>
            <a
              href='https://mail.google.com/mail/?view=cm&fs=1&to=eulerfermatleibniz@gmail.com&su=Hello!%20How%20can%20I%20help%20you?&body='
              target='_blank'
              className='self-end underline duration-700 ease-in-out hover:scale-105 3xl:text-3xl 2xl:text-2xl xl:text-xl lg:text-lg
              md:text-sm sm:text-sm xs:text-xs dark:text-white/80'
            >
              eulerfermatleibniz@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
