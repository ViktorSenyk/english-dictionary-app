import React from 'react';

import './wordsList.scss';

function WordsList({ storedWords, deleteWord }) {
  return (
    <section>
      <ul className="words-list">
        {storedWords.map(wordData => (
          <li key={wordData.id} className="words-list__word word">
            <p className="word__text">
              <b>{wordData.eng}</b> - <i>{wordData.ukr}</i>
            </p>
            <button className="word__delete-button" onClick={() => deleteWord(wordData.id)}>
              <img src="./images/home/delete.svg" alt="deleteBtn" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WordsList;
