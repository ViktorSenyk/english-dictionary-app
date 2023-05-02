import React from 'react';

import './history.scss';

function History({ history }) {
  return (
    <section className="history">
      <ul className="history__list">
        <h5 className="history__title">History</h5>
        {history.length === 0 ? (
          <p>Empty</p>
        ) : (
          <>
            <li className="history__list-item">
              <p>TIME</p>
              <p>COUNT OF WORDS</p>
              <p>RESULT</p>
            </li>
            {history.map(({ time, wordsCount, percent }) => (
              <li className="history__list-item">
                <p>{time}</p>
                <p>{wordsCount}</p>
                <p>{percent}</p>
              </li>
            ))}
          </>
        )}
      </ul>
    </section>
  );
}

export default History;
