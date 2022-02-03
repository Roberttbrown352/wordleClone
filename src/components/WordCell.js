import React from "react";
import { connect } from "react-redux";

const WordCell = (props) => {
  const cell = props.cell
  const cellIndex = props.cellIndex
  const rowIndex = props.rowIndex
  const rowCompValue = props.rowComp[rowIndex][cellIndex]


  const cellState = () => {
    if(rowCompValue === ''){
      return ''
    } else if(rowCompValue === 'G'){
      return 'correct'
    } else if(rowCompValue === 'Y'){
      return 'near'
    } else if(rowCompValue === 'DG'){
      return 'wrong'
    }
  }

  return(
    <td className={cellState()}>
      {cell}
    </td>
  )
}

const mapProps = (state) => ({
  rowComp: state.rowComp
})

export default connect(mapProps)(WordCell)
