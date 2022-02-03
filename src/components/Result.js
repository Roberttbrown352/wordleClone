import React from "react";
import { connect } from "react-redux"

const Result = (props) => {
  const result = props.gameState === 'win' ? 'You Won!':'You Lost'
  let wordString = ''
  props.currentWord.forEach(letter => {if(letter != ','){wordString = wordString + letter}})
  const number = props.currentRow

  const message = props.gameState === 'win' ? `You got ${wordString} \n in ${number} tries`:`The word was ${wordString}`

  return(
    <div id='result-panel'>
      <h2>{result}</h2>
      <h3>{message}</h3>
      <div id="replay" onClick={() => {location.reload()}}>
        <h2>Replay</h2>
      </div>
    </div>
  )
}

const mapToState = (state) => ({
  gameState: state.gameState,
  currentWord: state.currentWord,
  currentRow: state.currentRow
})

export default connect(mapToState)(Result)
