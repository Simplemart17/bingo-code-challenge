import React from 'react'
import Board from './component/Board'
import {wordLists} from './utils/wordLists'

const App = () => <Board values={wordLists} />

export default App
