import { FC } from 'react';
import { SvgComponentContact } from '../svg';
import Link from 'next/link';

interface ContactMeProps {}

const ContactMe: FC<ContactMeProps> = () => {
  return (
    <div className='fixed bottom-24 right-0 flex items-center justify-center overflow-hidden 2xl:hidden'>
      <div className='relative flex h-auto w-44 items-center justify-center'>
        <SvgComponentContact
          className={'fill-dark animate-spin-slow font-bold'}
        />
        <Link
          href='mailto:eulerfermatleibniz@gmail.com'
          className='absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-solid border-black
        bg-black text-sm font-semibold text-white shadow-md duration-300 ease-in-out hover:bg-white hover:text-black 
        '
        >
          Contrátame
        </Link>
      </div>
    </div>
  );
};

export default ContactMe;
