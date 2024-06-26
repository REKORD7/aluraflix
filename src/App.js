import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import GlobalStyles from "./componentes/GlobalStyles"
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Banner from './componentes/Banner';
import Team from './componentes/Team';

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Banner />
      <Team />
      <Footer />
    </>
  );
}

export default App;
