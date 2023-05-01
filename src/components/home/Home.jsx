import React from 'react';

import './home.scss';

function Home() {
  return (
    <section className="home">
      <ul className="words-list">
        <li className="words-list__word">
          <b>cat</b> - <i>кіт</i>
        </li>
        <li className="words-list__word">
          <b>cat</b> - <i>кіт</i>
        </li>
        <li className="words-list__word">
          <b>cat</b> - <i>кіт</i>
        </li>
        <li className="words-list__word">
          <b>cat</b> - <i>кіт</i>
        </li>
      </ul>
    </section>
  );
}

export default Home;
