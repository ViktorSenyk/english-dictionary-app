import { ADD_NEW_WORD, DELETE_WORD, ADD_SESSION_TO_HISTORY } from './dictionary.actions';

const initialState = {
  storedWords: [
    { id: 1, eng: 'dog', ukr: 'пес' },
    { id: 2, eng: 'cat', ukr: 'кіт' },
    { id: 3, eng: 'sun', ukr: 'сонце' },
    { id: 4, eng: 'tree', ukr: 'дерево' },
    { id: 5, eng: 'food', ukr: 'їжа' },
    { id: 6, eng: 'moon', ukr: 'місяць' },
    { id: 7, eng: 'aim', ukr: 'ціль, мета' },
    { id: 8, eng: 'car', ukr: 'автомобіль' },
    { id: 9, eng: 'house', ukr: 'будинок' },
    { id: 10, eng: 'meeting', ukr: 'зустріч, зібрання' },
  ],
  history: [],
};

const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_WORD:
      return {
        ...state,
        storedWords: [...state.storedWords, action.payload.newWord],
      };
    case DELETE_WORD:
      return {
        ...state,
        storedWords: state.storedWords.filter(wordData => wordData.id !== action.payload.id),
      };
    case ADD_SESSION_TO_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload.sessionData],
      };
    default:
      return state;
  }
};

export default dictionaryReducer;
