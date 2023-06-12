import { FeatureProject, Presentation, Project } from '@/components/ui';
import { FC } from 'react';
import improvedQuizzical from '../../../public/img/improved-quizzical.png';
import tenzies from '../../../public/img/tenzies.png';
import textEncryption from '../../../public/img/text-encryption.png';
import movieWatchList from '../../../public/img/movie_watchlist.png';
import jobify from '../../../public/img/jobify.png';
import dashboard from '../../../public/img/dashboard.png';
import typing from '../../../public/img/typing.png';
import password from '../../../public/img/password.jpg';
import quizzical from '../../../public/img/quiz.jpg';
import previous_portfolio from '../../../public/img/portafolio_img.png';

interface WorkProps {}

const Work: FC<WorkProps> = () => {
  return (
    <section className='pb-16 flex w-full flex-col items-center justify-center 3xl:mt-40 2xl:mt-0'>
      <Presentation
        text='La Imaginación Supera al Conocimiento!'
        className='!mb-16 lg:!text-6xl sm:mb-8 sm:!text-6xl xs:!text-4xl !normal-case dark:text-white/90'
      />

      <div className='grid grid-cols-12 gap-24 gap-y-32 2xl:p-10 xl:gap-x-16 lg:gap-x-8 lg:p-0 md:gap-y-24 sm:gap-x-0'>
        <div className='col-span-12'>
          <FeatureProject
            title='Improved-Quizzical App'
            summary='Quizzical app with better UI and has been developed following current React trends including useReducer, useContext and so on.'
            link='https://dynamic-creponne-4b83e7.netlify.app/'
            img={improvedQuizzical.src}
            github='https://github.com/JeremyFlores137/improved-quizcall'
            type='Featured Proyect'
            skillsList={['React', 'HTML', 'CSS']}
          />
        </div>
        <div className='col-span-6 sm:col-span-12'>
          <Project
            title='Tenzies App'
            link='https://stunning-melomakarona-7f116b.netlify.app/'
            img={tenzies.src}
            github='https://github.com/JeremyFlores137/tenzies'
            type='Proyect'
            skillsList={['React', 'HTML', 'CSS']}
            summary='A game of Tenzies to enjoy with family, the winner is the one who manages to have all ten dice of a single number.'
          />
        </div>
        <div className='col-span-6 sm:col-span-12'>
          <Project
            title='Movie WatchList'
            link='https://charming-taffy-a45bd2.netlify.app/'
            img={movieWatchList.src}
            github='https://github.com/JeremyFlores137/Movie-watchlist'
            type='Proyect'
            skillsList={['React', 'HTML', 'CSS']}
            summary="An app that helps you find the perfect movie to watch today with your loved ones. it's your ultimate companion for discovering, organizing, and tracking your favorite movies. This app is designed to enhance your movie-watching experience by providing a comprehensive platform to explore new films, create personalized watchlists, and keep track of the movies you've watched."
            className='m-auto !w-[55%] rounded-lg'
          />
        </div>
        <div className='col-span-12'>
          <FeatureProject
            title='Jobiby'
            summary='Welcome to Jobyfy, a comprehensive job search application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. With jobyfy, finding your dream job becomes easier than ever before. This intuitive and user-friendly app connects job seekers with relevant job opportunities, streamlining the entire job search process.'
            link='https://mern-app-the-beginning.onrender.com/landing'
            img={jobify.src}
            github='https://github.com/JeremyFlores137/MERN-APP'
            type='Featured Proyect'
            skillsList={[
              'React',
              'React Router',
              'Styled Components',
              'Node.js',
              'Express',
              'MongoDB',
            ]}
          />
        </div>
        <div className='col-span-6 sm:col-span-12'>
          <Project
            title='Text Encryption'
            link='https://jeremyflores137.github.io/JeremyFlores137.github.io-textEncryption/'
            img={textEncryption.src}
            github='https://github.com/JeremyFlores137/JeremyFlores137.github.io-textEncryption'
            type='Proyect'
            skillsList={['JavaScript', 'HTML', 'CSS']}
            summary='Text Encryption is a minimalist app designed to provide privacy and security for your conversations. With its user-friendly interface, Text Encryption ensures that your messages remain confidential and protected from prying eyes.'
          />
        </div>
        <div className='col-span-6 sm:col-span-12'>
          <Project
            title='Personal Dashboard'
            link='https://astounding-alpaca-c8bc80.netlify.app/'
            img={dashboard.src}
            github='https://github.com/JeremyFlores137/Dashboard'
            type='Proyect'
            skillsList={['React', 'HTML', 'CSS']}
            summary='A Chrome extension to help you focus and stay up-to-date.'
          />
        </div>
        <div className='col-span-12'>
          <FeatureProject
            title='Quizzical App'
            summary='Have you ever wonder if you have sufficient knowledge about general topics? Now is the time to prove yourself.'
            link='https://ubiquitous-stardust-ecf078.netlify.app/'
            img={quizzical.src}
            github='https://github.com/JeremyFlores137/Quizzical'
            type='Featured Proyect'
            skillsList={['React', 'HTML', 'CSS']}
          />
        </div>
        <div className='col-span-6 sm:col-span-12'>
          <Project
            title='Password Generator'
            link='https://tubular-belekoy-04d421.netlify.app/'
            img={password.src}
            github='https://github.com/JeremyFlores137/Password-Generator'
            type='Proyect'
            skillsList={['JavaScript', 'HTML', 'CSS']}
            summary='An app that helps you generate secure passwords. An indispensable feature nowadays.'
          />
        </div>
        <div className='col-span-6 sm:col-span-12'>
          <Project
            title='Speed Typing Game'
            link='https://peaceful-gaufre-4537e2.netlify.app/'
            img={typing.src}
            github='https://github.com/JeremyFlores137/typing-game'
            type='Proyect'
            skillsList={['React', 'HTML', 'CSS']}
            summary="Speed Typing Game is a fun and engaging app designed to improve your typing skills while keeping you entertained. Whether you're a beginner looking to enhance your typing speed or an experienced typist aiming for perfection, this app offers an exciting and challenging way to master the art of fast and accurate typing."
          />
        </div>
        <div className='col-span-12'>
          <FeatureProject
            title='Previous Portfolio'
            summary='As a beginner, my web portfolio served as a way to showcase my skills and initial projects. The design of the portfolio was simple and clean, with a basic structure that included a home page, an "About Me" section, and a project gallery.'
            link='https://ieremy-flores.netlify.app/'
            img={previous_portfolio.src}
            github='https://github.com/JeremyFlores137/Porftfolio'
            type='Featured Proyect'
            skillsList={['JavaScript', 'HTML', 'CSS']}
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
