import './App.css';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import NavBar from './components/NavBar';
import React, { useState } from "react";
import CarouselSlide from './components/CarouselSlide';
import { useTheme } from '@emotion/react';
import Section5 from './components/Section5';
import Section6 from './components/Section6';

function App() {

  return (
    <>
      <NavBar />
      <CarouselSlide />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  );
}

export default App;
