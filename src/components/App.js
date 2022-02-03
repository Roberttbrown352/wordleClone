import React from "react";
import { connect } from "react-redux";
import WordTable from './WordTable'
import WordEntry from './WordEntry'
import Result from "./Result";

const App = (props) => {
  return(
    <>
    <h1 className='header'>Wordle Clone</h1>
    <hr />
    <WordTable />
    <WordEntry />
    {props.gameState === '' ? <></> : <Result />}
    </>
  )
}

const mapToState = (state) => ({
  gameState: state.gameState
})

export default connect(mapToState)(App)
