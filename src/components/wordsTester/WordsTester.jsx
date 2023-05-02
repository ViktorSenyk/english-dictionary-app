import React, { useState } from 'react';
import moment from 'moment';

import './wordsTester.scss';

function WordsTester({ storedWords, addSessionToHistory }) {
  const [countOfWords, setCountOfWords] = useState(5);
  const [isTestStart, setIsTestStart] = useState(false);
  const [randomWordForTest, setRandomWordForTest] = useState(null);
  const [randomTranslationsForTest, setRandomTranslationsForTest] = useState([]);
  const [resultOfTest, setResultOfTest] = useState([]);

  const getRandomWordForTest = () =>
    setRandomWordForTest(storedWords[Math.floor(Math.random() * storedWords.length)]);

  const getRandomTranslates = () => {
    const randomTranslations = [];
    const countOfTranslations = 3;
    for (let i = 1; i <= countOfTranslations; i += 1) {
      randomTranslations.push(storedWords[Math.floor(Math.random() * storedWords.length)].ukr);
    }
    return randomTranslations;
  };

  const getPercentOfResult = () => {
    const count = resultOfTest.filter(val => val).length;
    const percent = (count / resultOfTest.length) * 100;
    return Math.floor(percent) + '%';
  };

  const onTestStart = () => {
    getRandomWordForTest();
    setRandomTranslationsForTest(getRandomTranslates);
    setIsTestStart(true);
  };

  const onTestReset = () => {
    addSessionToHistory({
      id: Math.round(Math.random() * 1e8),
      time: moment().format('DD.MM.YYYY HH:mm'),
      wordsCount: resultOfTest.length,
      percent: getPercentOfResult(),
    });

    setResultOfTest([]);
    setIsTestStart(false);
  };

  return (
    <section className="words-tester">
      {!isTestStart ? (
        <>
          <h5 className="words-tester__title">Want test yourself ?</h5>
          <p>
            How much words:
            <select
              className="words-tester__select"
              value={countOfWords}
              onChange={e => setCountOfWords(e.target.value)}
            >
              <option value={10}>10</option>
              <option value={5}>5</option>
              <option value={3}>3</option>
            </select>
          </p>
          <button className="words-tester__start-button" onClick={() => onTestStart()}>
            START
          </button>
        </>
      ) : resultOfTest.length < countOfWords ? (
        <>
          <h2 className="words-tester__tested-word">{randomWordForTest.eng}</h2>
          <div className="words-tester__button-wrapper">
            {[...randomTranslationsForTest, randomWordForTest.ukr].sort().map(translationValue => (
              <button
                key={translationValue + Math.random()}
                className="words-tester__result-button"
                value={translationValue}
                onClick={e => {
                  setResultOfTest([...resultOfTest, randomWordForTest.ukr === e.target.value]);
                  onTestStart();
                }}
              >
                {translationValue}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="words-tester__result">
            <b>RESULT: {getPercentOfResult()}</b>
          </p>
          <button className="words-tester__reset-button" onClick={() => onTestReset()}>
            SAVE & TRY AGAIN
          </button>
        </>
      )}
    </section>
  );
}

export default WordsTester;
