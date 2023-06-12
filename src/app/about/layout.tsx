import { Transition } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'Página About del portafolio de Ieremy Flores',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Transition />
      {children}
    </main>
  );
}
