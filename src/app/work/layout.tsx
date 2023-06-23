import { Transition } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work Page',
  description: 'Página Work del portafolio de Ieremy Flores',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Transition />
      {children}
    </main>
  );
}
