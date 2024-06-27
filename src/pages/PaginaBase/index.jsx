import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import GlobalStyles from "../../componentes/GlobalStyles"
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import { Outlet } from 'react-router-dom';

function PaginaBase() {

  return (
    <>
      <GlobalStyles />
      <Header />
        <Outlet />
      <Footer />
    </>
  );
}

export default PaginaBase;
