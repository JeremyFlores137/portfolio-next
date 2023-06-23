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
import unit_converter from '../../../public/img/unit_converter.png';
import color_palet from '../../../public/img/color_palet.png';

interface WorkProps {}

const Work: FC<WorkProps> = () => {
  return (
    <section className='flex w-full flex-col items-center justify-center pb-16 3xl:mt-8'>
      <Presentation
        text='¡La Imaginación Supera al Conocimiento!'
        className='!mb-16 !normal-case dark:text-white/90 lg:!text-6xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
      />

      <div className='grid grid-cols-12 gap-24 gap-y-32 2xl:p-10 xl:gap-x-16 lg:gap-x-8 lg:p-0 md:gap-y-24 sm:gap-x-0'>
        <div className='col-span-12'>
          <FeatureProject
            title='Quizzical II'
            summary='Esta aplicación Quizzical II presenta una interfaz de usuario más intuitiva y desarrollada siguiendo las tendencias actuales de React, incluyendo el uso de useReducer, useContext, entre otros.'
            link='https://dynamic-creponne-4b83e7.netlify.app/'
            img={improvedQuizzical.src}
            github='https://github.com/JeremyFlores137/improved-quizcall'
            type='Proyecto Destacado'
            skillsList={['React', 'HTML', 'CSS']}
          />
        </div>
        <div className='col-span-6 sm:col-span-12'>
          <Project
            title='Tenzies App'
            link='https://stunning-melomakarona-7f116b.netlify.app/'
            img={tenzies.src}
            github='https://github.com/JeremyFlores137/tenzies'
            type='Proyecto'
            skillsList={['React', 'HTML', 'CSS']}
            summary='Un juego de Tenzies para disfrutar en familia, donde el ganador es quien logra tener los diez dados de un único número.'
          />
        </div>
        <div className='col-span-6 sm:col-span-12'>
          <Project
            title='Movie WatchList'
            link='https://charming-taffy-a45bd2.netlify.app/'
            img={movieWatchList.src}
            github='https://github.com/JeremyFlores137/Movie-watchlist'
            type='Proyecto'
            skillsList={['JavaScript', 'HTML', 'CSS']}
            summary='Una aplicación que te ayuda a encontrar la película perfecta para ver hoy con tus seres queridos. Es tu compañero definitivo para descubrir, organizar y hacer un seguimiento de tus películas favoritas. Esta aplicación está diseñada para mejorar tu experiencia al ver películas al brindarte una plataforma integral para explorar nuevos filmes, crear listas personalizadas de películas por ver y realizar un seguimiento de las películas que has visto.'
            className='m-auto !w-[55%] rounded-lg'
          />
        </div>
        <div className='col-span-12'>
          <FeatureProject
            title='Jobiby'
            summary='Bienvenido a Jobyfy, una aplicación completa de búsqueda de empleo construida utilizando la pila MERN (MongoDB, Express.js, React.js, Node.js). Con Jobyfy, encontrar el trabajo de tus sueños es más fácil que nunca. Esta aplicación intuitiva y fácil de usar, conecta a los buscadores de empleo con oportunidades laborales relevantes, optimizando todo el proceso de búsqueda de empleo.'
            link='https://mern-app-the-beginning.onrender.com/landing'
            img={jobify.src}
            github='https://github.com/JeremyFlores137/MERN-APP'
            type='Proyecto Destacado'
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
            title='Encriptador de Texto'
            link='https://jeremyflores137.github.io/JeremyFlores137.github.io-textEncryption/'
            img={textEncryption.src}
            github='https://github.com/JeremyFlores137/JeremyFlores137.github.io-textEncryption'
            type='Proyecto'
            skillsList={['JavaScript', 'HTML', 'CSS']}
            summary='Encriptador de Texto es una aplicación minimalista diseñada para proporcionar privacidad y seguridad en tus conversaciones. Con su interfaz fácil de usar, Encriptador de Texto garantiza que tus mensajes se mantengan confidenciales y protegidos de miradas indiscretas.'
          />
        </div>
        <div className='col-span-6 sm:col-span-12'>
          <Project
            title='Personal Dashboard'
            link='https://astounding-alpaca-c8bc80.netlify.app/'
            img={dashboard.src}
            github='https://github.com/JeremyFlores137/Dashboard'
            type='Proyecto'
            skillsList={['React', 'HTML', 'CSS']}
            summary='Una extensión de Chrome para ayudarte a mantener el enfoque y estar actualizado.'
          />
        </div>
        <div className='col-span-12'>
          <FeatureProject
            title='Quizzical App'
            summary='¿Alguna vez te has preguntado si tienes suficiente conocimiento sobre temas generales?. Ahora es el momento de demostrarte a ti mismo.'
            link='https://ubiquitous-stardust-ecf078.netlify.app/'
            img={quizzical.src}
            github='https://github.com/JeremyFlores137/Quizzical'
            type='Proyecto Destacado'
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
            summary='Una aplicación que te ayuda a generar contraseñas seguras. Una característica indispensable en la actualidad.'
          />
        </div>
        <div className='col-span-6 sm:col-span-12'>
          <Project
            title='Tipeador Bolt'
            link='https://peaceful-gaufre-4537e2.netlify.app/'
            img={typing.src}
            github='https://github.com/JeremyFlores137/typing-game'
            type='Proyecto'
            skillsList={['React', 'HTML', 'CSS']}
            summary='Tipeador Bolt es una aplicación divertida y atractiva diseñada para mejorar tus habilidades de escritura mientras te diviertes. Ya sea que seas un principiante que busca mejorar su velocidad de escritura o un mecanógrafo experimentado que apunta a la perfección, esta aplicación ofrece una forma emocionante y desafiante de dominar el arte de escribir rápido y con precisión.'
          />
        </div>
        <div className='col-span-12'>
          <FeatureProject
            title='Portafolio Anterior'
            summary='Como principiante, mi portafolio web me sirvió como una forma de mostrar mis habilidades y comenzar con proyectos iniciales. El diseño del portafolio es simple y minimalista, con una estructura básica que incluye una página de inicio, una sección about y una galería de proyectos.'
            link='https://ieremy-flores.netlify.app/'
            img={previous_portfolio.src}
            github='https://github.com/JeremyFlores137/Porftfolio'
            type='Proyecto Destacado'
            skillsList={['JavaScript', 'HTML', 'CSS']}
          />
        </div>
        <div className='col-span-6 sm:col-span-12'>
          <Project
            title='Convertidor de Unidades'
            link='https://elaborate-stardust-dcbc4f.netlify.app/'
            img={unit_converter.src}
            github='https://github.com/JeremyFlores137/Unit-Converter'
            type='Proyecto'
            skillsList={['JavaScript', 'HTML', 'CSS']}
            summary='La aplicación Convertidor de Unidades es una herramienta sencilla y eficiente que permite a los usuarios convertir diferentes tipos de unidades de manera rápida y automatizada. Su objetivo principal es proporcionar una solución eficiente para realizar conversiones de unidades sin complicaciones.'
            className='m-auto !w-[75%] rounded-lg'
          />
        </div>
        <div className='col-span-6 sm:col-span-12'>
          <Project
            title='Generador de Esquemas de Color'
            link='https://resilient-snickerdoodle-5863d8.netlify.app/'
            img={color_palet.src}
            github='https://github.com/JeremyFlores137/Color-Scheme-Generator'
            type='Proyecto'
            skillsList={['JavaScript', 'HTML', 'CSS']}
            summary='La aplicación Generador de Esquemas de Color es una herramienta minimalista que ayuda a los usuarios a crear esquemas de color armoniosos para sus proyectos de diseño. Su objetivo principal es proporcionar una forma rápida y sencilla de generar combinaciones de colores estéticamente agradables.'
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
