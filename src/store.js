import { createStore } from "redux";
import data from '../data/data'

// ACTION TYPES
const ADD_LETTER = 'ADD_LETTER'
const REMOVE_LETTER = 'REMOVE_LETTER'
const ADD_WORD = 'ADD_WORD'

// ACTION CREATORS
export const addLetter = (letter) => {
  return({type: ADD_LETTER, letter: letter})
}

export const removeLetter = () => {
  return({type: REMOVE_LETTER})
}

export const addWord = () => {
  return({type: ADD_WORD})
}

const initialState = {
  words: data.words,
  rows: data.rows,
  rowComp: data.rowComp,
  keyboard: data.keyboard,
  currentWordBar: [],
  currentRow: 0,
  currentWord: data.words[Math.floor(Math.random() * data.words.length)].toUpperCase().split(''),
  gameState: '',
  wrongWB: [],
  nearWB: [],
  correctWB: [],
  allowedWords: data.allowedWords
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_LETTER':
      if(state.currentWordBar.length >= 5 || state.gameState != ''){
        return {...state}
      } else {
      return {...state, currentWordBar: [...state.currentWordBar, action.letter]}
      }
    case 'REMOVE_LETTER':
      if(state.currentWordBar.length <= 0){
        return {...state}
      } else {
        const newWordbar = [...state.currentWordBar]
        newWordbar.pop()
        return {...state, currentWordBar: newWordbar}
      }
    case 'ADD_WORD':
      const currentWordBar = [...state.currentWordBar]
      const currentWordBarAsWord = currentWordBar.join('').toLowerCase()
      const inMainBank = state.words.includes(currentWordBarAsWord)
      const inAltBank = state.allowedWords.includes(currentWordBarAsWord)

      if(currentWordBar.length < 5 || state.currentRow === 6 || state.gameState != ''){
        return {...state}
      } else if(!(inMainBank || inAltBank)){
        alert('Please enter a valid word')
        return {...state}
      } else {
        const currentWord = [...state.currentWord]
        const wrongWB = [...state.wrongWB]
        const nearWB = [...state.nearWB]
        const correctWB = [...state.correctWB]
        const newRows = [...state.rows]
        const rowComp = [...state.rowComp]

        newRows[state.currentRow].cells = [...state.currentWordBar]

        currentWordBar.forEach((letter, index) => {
          if(currentWord.includes(letter) && currentWord.indexOf(letter) === index){
            correctWB.push(letter)
            rowComp[state.currentRow][index] = 'G'
          } else if(currentWord.includes(letter)){
            nearWB.push(letter)
            rowComp[state.currentRow][index] = 'Y'
          } else {
            wrongWB.push(letter)
            rowComp[state.currentRow][index] = 'DG'
          }
        })

        if(currentWord.toString() === currentWordBar.toString()){
          state.gameState = 'win'
        } else if(state.currentRow === 5){
          state.gameState = 'lose'
        }

        return {
          ...state,
          wrongWB: wrongWB,
          nearWB: nearWB,
          correctWB: correctWB,
          currentWordBar: [],
          rows: newRows,
          rowComp: rowComp,
          currentRow: state.currentRow + 1
        }

      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
