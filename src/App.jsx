import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { storedWordsSelector, historySelector } from './redux/dictionary.selectors';
import { addNewWord, deleteWord, addSessionToHistory } from './redux/dictionary.actions';

import Header from './components/header/Header';
import WordsList from './components/wordsList/WordsList';
import WordsCreator from './components/wordsCreator/WordsCreator';
import WordsTester from './components/wordsTester/WordsTester';
import History from './components/history/History';
import Footer from './components/footer/Footer';

function App({ storedWords, history, deleteWord, addNewWord, addSessionToHistory }) {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<WordsList storedWords={storedWords} deleteWord={deleteWord} />}
          />
          <Route path="/create" element={<WordsCreator addNewWord={addNewWord} />} />
          <Route
            path="/test"
            element={
              <WordsTester storedWords={storedWords} addSessionToHistory={addSessionToHistory} />
            }
          />
          <Route path="/history" element={<History history={history} />} />
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
  addSessionToHistory,
};

export default connect(mapState, mapDispatch)(App);
