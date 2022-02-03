import React from "react";
import { connect } from "react-redux"
import { removeLetter, addWord } from "../store";

const WordBar = (props) => {
  const currentWordBar = props.currentWordBar
  const removeLetter = props.removeLetter
  const addWord = props.addWord

  return(
    <div className='word-bar-with-buttons'>
      <div id='word-bar'>
        <h3>{currentWordBar.map(letter => {return letter})}</h3>
      </div>
      <div id='backspace' className='input-button' onClick={() => {removeLetter()}}>
        <h3>Back</h3>
      </div>
      <div id='enter' className='input-button' onClick={() => {addWord()}}>
        <h3>Enter</h3>
      </div>
    </div>
  )
}

const mapState = (state) => ({
  currentWordBar: state.currentWordBar
})

const mapToDispatch = dispatch => {
  return {
    removeLetter: function(){
      dispatch(removeLetter())
    },
    addWord: function(){
      dispatch(addWord())
    }
  }
}

export default connect(mapState, mapToDispatch)(WordBar)
