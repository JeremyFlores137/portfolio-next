import { Transition } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ask Me Page',
  description: 'Página de Preguntas del portafolio de Ieremy Flores',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='pt-8'>
      <Transition />
      {children}
    </main>
  );
}
