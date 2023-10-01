'use client';
import { FC, useRef } from 'react';
import { Detail } from '../../utils';
import { useScroll, motion } from 'framer-motion';

interface ExperienceProps {}

export const Experience: FC<ExperienceProps> = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className='my-32'>
      <h2 className='mb-32 w-full text-center text-8xl font-bold dark:text-white/80 md:mb-16 md:text-6xl xs:text-4xl'>
        Experiencia
      </h2>
      <div
        ref={ref}
        className='relative mx-auto 3xl:w-1/3 3xl:pl-10 2xl:w-[90%] 2xl:pl-0 md:w-full'
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className={`absolute left-14 top-6 h-full w-[4px] origin-top bg-black dark:bg-white md:left-[55px] md:w-[2px] xs:left-[55px]`}
        />

        <ul className='xs:ml-15 flex-col items-start justify-between 3xl:ml-32 xl:ml-20 lg:ml-16'>
          <Detail
            position='Proyectos Personales'
            company='MyPage'
            time='2023 - Concluído'
            address='Líma, Perú'
            work='He desarrollado más de 20 proyectos de diversas categorías, que incluyen desde aplicaciones para encriptar texto y generar contraseñas seguras hasta el desarrollo de complejos sistemas de juegos como Tenzie, Quizzical y Tipea Rápido, entre otros. Cuento con más de 6 meses de experiencia en el área de Frontend y Backend, incluyendo el diseño de páginas web. Además, he complementado mi formación con varios cursos de ciberseguridad, cloud computing con Azure, y los módulos I y II de CCNA de Cisco.'
            companyLink='https://ieremy-flores.netlify.app/'
          />
          <Detail
            position='Vicepresidente del Capítulo SPS UNI IEEE'
            company='SPS-UNI'
            time='2022 - Concluído'
            address='Líma, Perú'
            work='Durante mi desempeño en el cargo de vicepresidente de la IEEE SPS UNI, tuve la oportunidad de sumergirme más en mi carrera y descubrir lo que verdaderamente me apasiona: el Desarrollo de Aplicaciones web junto con la Ciberseguridad. Además, participé en un gran número de eventos y procesos de gestión para elevar el prestigio del capítulo SPS IEEE.'
            companyLink='https://web.facebook.com/IEEESPSUNI'
          />
          <Detail
            position='Participación en la Feria de Proyectos 2023'
            company='Feria-UNI'
            time='2023 - En Curso'
            address='Lima, Perú'
            work='El proyecto se centra en el desarrollo de un sistema web para controlar un brazo robótico conectado a una cámara. El objetivo principal es implementar algoritmos de reconocimiento facial basados en redes neuronales convolucionales (CNN) para identificar rostros cubiertos y prevenir robos o posibles intentos de robo. El sistema permitirá a los usuarios controlar el brazo robótico a través de una interfaz web desde cualquier dispositivo con conexión a Internet. Desde esta interfaz, podrán controlar los movimientos del brazo robótico y visualizar en tiempo real las imágenes capturadas por la cámara.'
            companyLink='https://fp-2023-web.vercel.app/'
          />
        </ul>
      </div>
    </div>
  );
};
