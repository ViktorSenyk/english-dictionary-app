import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { storedWordsSelector, historySelector } from './dictionary.selectors';
import { addNewWord, deleteWord } from './dictionary.actions';

import Header from './components/header/Header';
import Home from './components/home/Home';
import WordsCreator from './components/wordsCreator/WordsCreator';
import WordsTester from './components/wordsTester/WordsTester';
import History from './components/history/History';
import Footer from './components/footer/Footer';

function App({ storedWords, history, deleteWord, addNewWord }) {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home storedWords={storedWords} deleteWord={deleteWord} />} />
          <Route path="/create" element={<WordsCreator addNewWord={addNewWord} />} />
          <Route path="/test" element={<WordsTester storedWords={storedWords} />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

const mapState = state => ({
  storedWords: storedWordsSelector(state),
  history: historySelector(state),
});

const mapDispatch = {
  addNewWord,
  deleteWord,
};

export default connect(mapState, mapDispatch)(App);
