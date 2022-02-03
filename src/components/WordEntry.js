import React from "react";
import { connect } from "react-redux"
import WordBar from "./WordBar";
import WordEntryRow from "./WordEntryRow";

const WordEntry = (props) => {
  const keyboard = props.keyboard
  return(
    <>
      <hr />
      <WordBar />
      <div id="keyboard">
        <table>
          <tbody>
            {keyboard.map((row, index) => {return(<tr key={'keyrow' + index}><WordEntryRow row={row} index={index}/></tr>)})}
          </tbody>
        </table>
      </div>
    </>
  )
}

const mapState = (state) => ({
  keyboard: state.keyboard
})

export default connect(mapState)(WordEntry)
