import React from 'react';

import './home.scss';

function Home({ storedWords, deleteWord }) {
  return (
    <section className="home">
      <ul className="words-list">
        {storedWords.map(wordData => (
          <li key={wordData.id} className="words-list__word word">
            <p className="word__text">
              <b>{wordData.eng}</b> - <i>{wordData.ukr}</i>
            </p>
            <button className="word__delete-button" onClick={() => deleteWord(wordData.id)}>
              <img src="./home/delete.svg" alt="deleteBtn" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
