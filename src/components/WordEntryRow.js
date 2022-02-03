import React from "react";
import WordEntryKey from "./WordEntryKey";

const WordEntryRow = (props) => {
  const row = props.row
  const rowIndex = props.index
  return(
    <>
      {row.map((cell, index) => {
        return (<WordEntryKey cell={cell} key={'keyRow' + rowIndex + 'Cell' + index} />)
      })}
    </>
  )
}

export default WordEntryRow

// <div className="keyboard-row">
