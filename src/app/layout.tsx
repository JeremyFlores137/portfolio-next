import './globals.css';
import { NavBar, Footer } from '../components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FullStack - Ieremy Flores',
  description: 'Portafolio de Ieremy Flores',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <nav>
          <NavBar />
        </nav>
        <main className='h-full w-full dark:bg-black/90 2xl:pt-28 xl:pt-28 lg:pt-32 md:pt-28 sm:pt-28'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
