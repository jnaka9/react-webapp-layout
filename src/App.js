import './App.css';
//import { useState, useMemo, useRef, useLayoutEffect, useEffect } from 'react';
//import { useEffect } from 'react';

import useDocumentDimentions from './hooks/useDocumentDimentions';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import Content from './components/Content';

const HEADER_HEIGHT = 40;
const TOOLBAR_HEIGHT = 40;
const NAVBAR_WIDTH = 200;

function App() {
  const { width: clientWidth, height: clientHeight } = useDocumentDimentions();
  /*useEffect(() => {
    const disableScroll = (evt) => {
      evt.preventDefault();
    };
    document.addEventListener('wheel', disableScroll, { passive: false });
    return () => {
      document.removeEventListener('wheel', disableScroll, { passive: false });
    };
  }, []);*/

  return (
    <div className="App" style={{ width: clientWidth, height: clientHeight }}>
      <Header width={clientWidth} height={HEADER_HEIGHT} />
      <div className="container" style={{ display: 'flex' }}>
        <Navbar width={NAVBAR_WIDTH} height={clientHeight - HEADER_HEIGHT} />
        <div style={{ width: clientWidth - NAVBAR_WIDTH }}>
          <Toolbar width={clientWidth - NAVBAR_WIDTH} height={TOOLBAR_HEIGHT} />
          <Content
            width={clientWidth - NAVBAR_WIDTH}
            height={clientHeight - HEADER_HEIGHT - TOOLBAR_HEIGHT}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
