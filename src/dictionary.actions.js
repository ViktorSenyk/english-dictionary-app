export const ADD_NEW_WORD = 'DICTIONARY/ADD_NEW_WORD';
export const DELETE_WORD = 'DICTIONARY/DELETE_WORD';

export const addNewWord = newWord => ({
  type: ADD_NEW_WORD,
  payload: {
    newWord,
  },
});

export const deleteWord = id => ({
  type: DELETE_WORD,
  payload: {
    id,
  },
});
