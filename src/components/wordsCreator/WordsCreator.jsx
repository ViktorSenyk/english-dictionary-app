import React, { useState } from 'react';

import './wordsCreator.scss';

function WordsCreator({ addNewWord }) {
  const [inputsValue, setInputsValue] = useState({ wordInputValue: '', translateInputValue: '' });

  const onCreate = e => {
    e.preventDefault();
    inputsValue.wordInputValue &&
      inputsValue.translateInputValue &&
      addNewWord({
        id: Math.round(Math.random() * 1e8),
        eng: inputsValue.wordInputValue,
        ukr: inputsValue.translateInputValue,
      });
    setInputsValue({ wordInputValue: '', translateInputValue: '' });
  };

  return (
    <section className="words-creator">
      <h5 className="words-creator__title">New Words Creator</h5>
      <form className="words-creator__form">
        <input
          className="words-creator__input"
          type="text"
          placeholder="type word..."
          value={inputsValue.wordInputValue}
          onChange={e => setInputsValue({ ...inputsValue, wordInputValue: e.target.value })}
        />
        <input
          className="words-creator__input"
          type="text"
          placeholder="type word translate..."
          value={inputsValue.translateInputValue}
          onChange={e => setInputsValue({ ...inputsValue, translateInputValue: e.target.value })}
        />
        <button className="words-creator__submit-button" type="submit" onClick={e => onCreate(e)}>
          CREATE
        </button>
      </form>
    </section>
  );
}

export default WordsCreator;
