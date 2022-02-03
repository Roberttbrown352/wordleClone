import React from "react";
import WordCell from "./WordCell";

const WordRows = (props) => {
  const cells = props.cells
  const rowIndex = props.index
  return(
    <tr>
      {cells.map((cell, index) => {return(<WordCell cell={cell} rowIndex={rowIndex} cellIndex={index} key={'Row' + rowIndex + 'Cell' + index}/>)})}
    </tr>
  )
}

export default WordRows
