import React from 'react';

import './history.scss';

function History({ history }) {
  const getAveragePercentageOfActivity = () =>
    Math.floor(
      history.reduce((acc, { percent }) => acc + +percent.substring(0, percent.length - 1), 0) /
        history.length,
    );

  return (
    <section className="history">
      <ul className="history__list">
        <h5 className="history__title">History</h5>
        {history.length === 0 ? (
          <p>Empty...</p>
        ) : (
          <>
            <h5 className="history__title">{`Average percentage of activity: ${getAveragePercentageOfActivity()}%`}</h5>
            <li className="history__list-item">
              <p>TIME</p>
              <p>COUNT OF WORDS</p>
              <p>RESULT</p>
            </li>
            {history.map(({ id, time, wordsCount, percent }) => (
              <li className="history__list-item" key={id}>
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
