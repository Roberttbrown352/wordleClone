import React from "react";
import { connect } from "react-redux"
import WordRows from "./WordRows";

const WordTable = (props) => {
  const rows = props.rows
  return(
    <table>
      <tbody>
        {rows.map((row, index) => {return(<WordRows cells={row.cells} key={'row' + index} index={index}/>)})}
      </tbody>
    </table>
  )
}

const mapToState = (state) => ({
  rows: state.rows
})

export default connect(mapToState)(WordTable)
