import React from "react";
import { addLetter } from "../store";
import { connect } from "react-redux";

const WordEntryKey = (props) => {
  const cell = props.cell
  const addLetter = props.addLetter
  const correctWB = props.correctWB
  const nearWB = props.nearWB
  const wrongWB = props.wrongWB

  const keyState = () => {
    if(correctWB.includes(cell)){
      return 'correct'
    } else if(nearWB.includes(cell)){
      return 'near'
    } else if(wrongWB.includes(cell)){
      return 'wrong'
    } else {
      return ''
    }
  }

  return(
    <td className={keyState()} onClick={() => {addLetter(cell)}}>
        {cell}
    </td>
  )
}

const mapToState = (state) => ({
  correctWB: state.correctWB,
  nearWB: state.nearWB,
  wrongWB: state.wrongWB
})

const mapToDispatch = dispatch => {
  return {
    addLetter: function(letter){
      dispatch(addLetter(letter))
    }
  }
}

export default connect(mapToState, mapToDispatch)(WordEntryKey)
