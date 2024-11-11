'use client';
import Header from '@/components/Header';
import './globals.css';
import estilo from './page.module.css';
import Image from 'next/image';
import banner from '../../public/banner.jpg';
import React from 'react';

export default function Home() {
  const [modoClaroExcuro, setModoClaroExcuro] = React.useState(true);

  function alterarModo() {
    setModoClaroExcuro(!modoClaroExcuro);
  }

  return (
    <div className={modoClaroExcuro ? 'ligth' : 'dark'}>
      <Header tema={modoClaroExcuro} onClick={alterarModo} />
      <section className={estilo.banner}>
        <Image
          className={estilo.bannerImg}
          src={banner}
          alt="instrumentos de barbeiro profissional"
        />
      </section>
      <section className={estilo.content}>
        <article className={estilo.container}>
          <h1 className={estilo.titulo}>Bem-vindo a Barber Shop</h1>
          <strong>
            Nossa barbearia sempre oferece profissionais de qualidade e estamos
            prontos para lidar com suas maiores expectativas
          </strong>
          <p>
            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma
            equipe premiada que demonstrou o talento de mestres barbeiros em
            varios concursos de estilo. Deixe nosso barbeiro ser seu estilista
            pessoal e você
          </p>
          <h2 className={estilo.assinatura}>S. Kelly</h2>
        </article>
      </section>
    </div>
  );
}
