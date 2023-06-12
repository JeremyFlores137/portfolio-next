'use client';
import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Card } from '@mui/material';
import photo from '../../../public/img/ieremy_edited.jpg';
import Link from 'next/link';
import { useThemeSwitcher } from '../hooks';

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useThemeSwitcher();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar className='dark:bg-black'>
      <Toolbar>
        <Link
          href='/'
          style={{ display: 'flex', alignItems: 'center' }}
          className='lg:hidden'
        >
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: '5px',
            }}
            className='dark:bg-stone-600'
          >
            <img src={photo.src} className='w-20' alt='Foto de Ieremy' />
            <Typography
              variant='caption'
              color='inherit'
              sx={{
                fontFamily: "'Dancing Script', cursive;",
                fontWeight: 'bold',
              }}
              className='dark:text-white'
            >
              Soy Ieremy Flores
            </Typography>
          </Card>
        </Link>

        <Box flex={1} />

        <Box
          sx={{ display: { xs: 'none', sm: 'block' } }}
          className='lg:hidden'
        >
          <Link
            href='/work'
            className={`duration-75 dark:hover:text-stone-400`}
          >
            <Button color='inherit'>Proyectos</Button>
          </Link>
          <Link
            href='/about'
            className={`duration-75 dark:hover:text-stone-400`}
          >
            <Button color='inherit'>Sobre mí</Button>
          </Link>
          {/*<Link href='/contact' className='duration-75 hover:text-black'>
            <Button color='inherit'>Contacto</Button>
            </Link>*/}
          <Link
            href='/askMe'
            className={`duration-75 dark:hover:text-stone-400`}
          >
            <Button color='inherit'>Pregúntame</Button>
          </Link>
        </Box>

        <Box flex={1} />

        <IconButton className='hover:text-white dark:text-white dark:hover:text-stone-400 lg:hidden'>
          <LanguageIcon />
        </IconButton>
        <IconButton
          className='hover:text-white dark:text-white dark:hover:text-stone-400 lg:hidden'
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        >
          {mode === 'dark' ? <WbSunnyIcon /> : <DarkModeIcon />}
        </IconButton>

        <button
          className='hidden flex-col items-center justify-center lg:flex'
          onClick={handleClick}
        >
          <span
            className={`h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out dark:bg-white ${
              isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`my-0.5 h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out dark:bg-white ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out dark:bg-white ${
              isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
            }`}
          ></span>
        </button>

        {isOpen ? (
          <div
            className={`fixed left-1/2 top-1/2 z-30 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg py-32 backdrop-blur-md
        dark:bg-white/40`}
          >
            <Link href='/' style={{ display: 'flex', alignItems: 'center' }}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '5px',
                  marginBottom: '1em',
                }}
                onClick={handleClick}
              >
                <img src={photo.src} className='w-24' alt='Foto de Ieremy' />
                <Typography
                  variant='caption'
                  color='inherit'
                  sx={{
                    fontFamily: "'Dancing Script', cursive;",
                    fontWeight: 'bold',
                  }}
                >
                  Soy Ieremy Flores
                </Typography>
              </Card>
            </Link>

            <Box
              sx={{ display: { xs: 'none', sm: 'block' } }}
              className={`flex flex-col items-center justify-center gap-2 dark:text-black`}
            >
              <Link
                href='/work'
                onClick={handleClick}
                className='rounded-lg from-slate-200 to-stone-900
                 ease-in-out hover:scale-105 hover:bg-gradient-to-tr'
              >
                <Button color='inherit'>Proyectos</Button>
              </Link>
              <Link
                href='/about'
                onClick={handleClick}
                className='rounded-lg from-slate-200 to-stone-900 
                 ease-in-out hover:scale-105 hover:bg-gradient-to-tr'
              >
                <Button color='inherit'>Sobre mí</Button>
              </Link>
              {/*<Link
                href='/contact'
                onClick={handleClick}
                className='rounded-lg from-slate-200 to-stone-900 duration-1000
                 ease-in-out hover:scale-105 hover:bg-gradient-to-tr'
              >
                <Button color='inherit'>Contacto</Button>
                </Link>*/}
              <Link
                href='/askMe'
                onClick={handleClick}
                className='rounded-lg from-slate-200 to-stone-900 
                 ease-in-out hover:scale-105 hover:bg-gradient-to-tr'
              >
                <Button color='inherit'>Pregúntame</Button>
              </Link>
            </Box>

            <IconButton className='duration-1000 ease-in-out hover:scale-105'>
              <LanguageIcon color={'primary'} />
            </IconButton>
            <IconButton
              className='duration-1000 ease-in-out hover:scale-105'
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            >
              {mode === 'dark' ? (
                <WbSunnyIcon color={'primary'} />
              ) : (
                <DarkModeIcon color={'secondary'} />
              )}
            </IconButton>
          </div>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};
