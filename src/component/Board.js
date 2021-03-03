import React, { useState, useEffect } from 'react'
import { generate2DGrid } from '../utils/grid'
import BoardCells from './BoardCells'
import Confetti from 'react-confetti'

const Board = ({ values }) => {
  const midpoint = (25 - 1) / 2

  const [state, setState] = useState({
    selection: { [midpoint]: true },
    activeRow: 0,
    activeCol: 0,
  })
  const [grid, setGrid] = useState()
  const [showConfetti, setShowConfetti] = useState(false)
  const [completeGame, setCompleteGame] = useState(false)

  useEffect(() => {
    const genGrid = generate2DGrid(values)
    setGrid(genGrid)
  }, [values])

  useEffect(() => {
    const checkRow = (row) => {
      const size = 5
      const rowStart = row * size
      for (let i = rowStart; i < rowStart + size; i++) {
        if (!state.selection[i]) {
          return false
        }
      }

      setShowConfetti(true)
      setTimeout(() => {
        setShowConfetti(false)
      }, 5000)
      return true
    }

    const checkColumn = (col) => {
      const size = 5
      for (let j = col; j < size * size; j += size) {
        if (!state.selection[j]) {
          return false
        }
      }

      setShowConfetti(true)
      setTimeout(() => {
        setShowConfetti(false)
      }, 5000)
      return true
    }

    const checkDiagonalA = (row, col) => {
      const size = 5
      if (row === col) {
        for (let i = 0; i < size; i++) {
          if (!state.selection[size * i + i]) {
            return false
          }
        }

        setShowConfetti(true)
        setTimeout(() => {
          setShowConfetti(false)
        }, 5000)
        return true
      }
    }

    const checkDiagonalB = (row, col) => {
      const size = 5
      if (row === size - col - 1) {
        for (let i = 0; i < size; i++) {
          if (!state.selection[size * i + size - i - 1]) {
            return false
          }
        }

        setShowConfetti(true)
        setTimeout(() => {
          setShowConfetti(false)
        }, 5000)
        return true
      }
    }

    const checkCompleteCell = () => {
      for (let i = 0; i < 25; i++) {
        if (!state.selection[i]) {
          setCompleteGame(false)
          return false
        }
      }

      setCompleteGame(true)
      return true
    }

    checkRow(state.activeRow)
    checkColumn(state.activeCol)
    checkDiagonalA(state.activeRow, state.activeCol)
    checkDiagonalB(state.activeRow, state.activeCol)
    checkCompleteCell()
  }, [state.activeRow, state.activeCol, state.selection])

  const BoardRow = ({ row, x }) => {
    const randomId = Math.floor(Math.random() * 50 + 25)

    return (
      <tr className="" key={randomId}>
        {row.map((cell, y) => (
          <BoardCells
            cell={cell}
            midpoint={midpoint}
            selection={state.selection}
            stateSel={state.selection}
            setState={setState}
            cellRow={x}
            cellCol={y}
            bingo={showConfetti}
          />
        ))}
      </tr>
    )
  }

  const resetGame = () => {
    setState({
      selection: { [midpoint]: true },
      activeRow: 0,
      activeCol: 0,
    })
  }

  return (
    <>
    <h1 className="mt-8 text-2xl font-bold text-center text-blue-400">A Bingo-like Game</h1>
      <div className="flex justify-center mt-3">
        <table className="w-11/12 h-80 sm:w-2/5">
          <tbody>
            {grid
              ? grid.map((row, idx) => <BoardRow row={row} x={idx} />)
              : null}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center pb-10 mt-10">
        <button
          className={`${
            !completeGame
              ? 'cursor-not-allowed bg-gray-300 text-gray-600'
              : 'bg-blue-500 hover:opacity-90 text-white'
          } w-32 p-2 font-bold rounded focus:outline-none`}
          onClick={resetGame}
          disabled={!completeGame}
        >
          Restart Game
        </button>
      </div>
      {showConfetti && <Confetti />}
    </>
  )
}

export default Board
