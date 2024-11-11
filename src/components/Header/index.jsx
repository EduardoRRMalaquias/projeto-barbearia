import Image from 'next/image';
import React from 'react';
import estilos from './header.module.css';
import logo from '../../../public/barbearia.png';
import { BsSun, BsMoon } from 'react-icons/bs';

const Header = ({ tema, onClick }) => {
  return (
    <header className={estilos.header}>
      <div className={estilos.containerHeader}>
        <Image
          className={tema ? estilos.logo : estilos.logoDark}
          src={logo}
          alt="Barber Shop"
        />
        <button className={estilos.btnLigthDark} onClick={onClick}>
          {tema ? <BsSun /> : <BsMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
