import { Presentation } from '@/components/ui';
import { FC } from 'react';

interface AskMeProps {}

const AskMe: FC<AskMeProps> = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center pb-16 3xl:mt-40 2xl:mt-0'>
      <Presentation text='!Cuéntame! ¿Que deseas saber?' className='' />
      
    </div>
  );
};

export default AskMe;
