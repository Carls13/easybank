import React, { Fragment } from 'react';

import { GlobalStyles } from './GlobalStyles';

import { Header } from './components/Header/Header';
import { Blog } from './components/Blog/Blog';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Presentation } from './components/Presentation/Presentation';

function App() {
  return (
    <Fragment>
      <GlobalStyles/>
      <Header />
      <Presentation />
      <About />
      <Blog />
      <Footer />
    </Fragment>
  );
}

export default App;
