import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import WordsCreator from './components/wordsCreator/WordsCreator';
import WordsTester from './components/wordsTester/WordsTester';
import History from './components/history/History';
import Footer from './components/footer/Footer';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<WordsCreator />} />
          <Route path="/test" element={<WordsTester />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
