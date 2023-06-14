'use client';
import { FC, useRef } from 'react';
import { DetailEducation } from '../../utils';
import { useScroll, motion } from 'framer-motion';

interface EducationProps {}

export const Education: FC<EducationProps> = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className='my-32'>
      <h2 className='mb-32 w-full text-center text-8xl font-bold dark:text-white/80 md:mb-16 md:text-6xl xs:text-4xl'>
        Education
      </h2>
      <div
        ref={ref}
        className='relative mx-auto 3xl:w-1/3 3xl:pl-10 2xl:pl-0 2xl:w-[90%] md:w-full'
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className={`absolute left-14 top-6 h-full w-[4px] origin-top bg-black dark:bg-white md:left-[55px] md:w-[2px] xs:left-[55px]`}
        />

        <ul className='xs:ml-15 flex-col items-start justify-between 3xl:ml-44 xl:ml-20 lg:ml-16'>
          <DetailEducation
            type='Bootcamp - The Fronted Career Path'
            time='2023 - Concluído'
            place='Scrimba'
            info='Scrimba AS es una empresa remota con sede en Oslo, Noruega. Contamos con el respaldo de StartupLab, Nordic Makers, Alliance Venture y Amasia. The Frontend Carreer Path tiene como objetivo cubrir todo lo se necesita saber para ser contratado como desarrollador Frontend. Esto incluye HTML, CSS, JavaScript, React, diseño de interfaz de usuario, consejos profesionales ¡y mucho más!.'
          />
          <DetailEducation
            type='Oracle Next Education - Especialización Backend'
            time='2023 - En curso'
            place='Alura Latam'
            info='Alura es el brazo online de Caelum, una reconocida escuela de tecnología e innovación en Brasil.
            Los fundadores, Paulo Silveira y Guilherme Silveira, se dieron cuenta de que muchos estudiantes tenían interés en nuestros cursos solo que no tenían acceso a nuestro contenido debido a la distancia y el tiempo. Fue así que la plataforma online nació en 2011 y, con el éxito del proyecto, creamos nuestra propia marca Alura en junio de 2013.
            En esta especialización estoy abordando los conceptos básicos y avanzados del lenguaje Java, desde la Programación Orientada a Objetos hasta el manejo y comprensión de las librerías más utilizadas en Java, como java.lang y java.util. También estoy aprendiendo sobre el manejo de errores, metodologías ágiles y, por último, me estaré adentrando en el uso del framework Spring de Java.
            '
          />
          <DetailEducation
            type='Certified in Cybersecurity'
            time='2023 - Concluído'
            place='(ISC)²'
            info='(ISC)² es una asociación internacional sin fines de lucro para líderes de seguridad de la información. Se comprometen a ayudar a los miembros a aprender, crecer y prosperar. Con casi 330,000 miembros, asociados y candidatos, capacitamos a profesionales que abarcan todos los aspectos de la seguridad de la información.'
          />
          <DetailEducation
            type='Penetration Testing Student - eJPTv2'
            time='2023 - En Curso'
            place='INE'
            info='INE es el líder global de confianza en formación en línea de TI para redes, ciberseguridad, gestión en la nube y ciencia de datos. El examen eJPT (Junior Penetration Tester) de eLearnSecurity valida que la persona posee los conocimientos y habilidades necesarios para desempeñarse como un tester de penetración de nivel inicial. Esta certificación abarca metodologías de evaluación y auditoría empresarial con pruebas de penetración en host, redes y aplicaciones web. Esta preparación está diseñado para ser el primer hito en la certificación de alguien con poca o ninguna experiencia en ciberseguridad, simulando las habilidades utilizadas durante un compromiso en el mundo real.'
          />
          <DetailEducation
            type='Ingeniería de Telecomunicaciones'
            time='2018 - 2023'
            place='Universidad Nacional de Ingeniería'
            info='Durante mis años en la universidad, he desarrollado habilidades en disciplinas que abarcan diferentes áreas, entre las cuales se destacan las redes de computadoras, la ingeniería de software y la ciberseguridad. He adquirido conocimientos de la arquitectura TCP/IP, protocolos de enrutamiento y arquitectura de redes, tanto en redes cableadas Ethernet como inalámbricas (IEEE 802.11). Además, tengo un dominio sólido de algoritmos y estructuras de datos en lenguajes como C, Python y Java, así como experiencia en bases de datos SQL y NoSQL.
            También he adquirido conocimientos en redes móviles, tecnología de fibra óptica, cloud computing con Azure, tecnología Cisco, manejo del software GNS3, Wireshark y antenas, entre otros campos. Durante mi formación universitaria, he explorado una amplia gama de áreas relacionadas con las telecomunicaciones, lo que me ha permitido obtener una base sólida en diversos aspectos tecnológicos.'
          />
        </ul>
      </div>
    </div>
  );
};
