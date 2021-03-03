import React from 'react'
import BoardMidPoint from './BoardMidPoint'

const BoardCells = ({
  cell,
  midpoint,
  selection,
  stateSel,
  setState,
  cellRow,
  cellCol,
  bingo,
}) => {
  const isMidpoint = cell.id === midpoint
  const selected = selection[cell.id] || isMidpoint ? true : false

  if (isMidpoint) {
    return <BoardMidPoint bingo={bingo} />
  }

  return (
    <td
      className={`${
        selection[cell.id] ? 'bg-gray-400' : bingo ? '' : 'hover:bg-blue-200'
      } outline-blue`}
    >
      <div className="flex justify-center">
        <button
          className={`${
            selection[cell.id] ? 'line-through text-white' : bingo ? 'cursor-not-allowed' : ''
          } sm:w-24 sm:h-24 sm:p-3 sm:text-sm w-16 h-16 text-center text-xs p-1 focus:outline-none`}
          onClick={() => {
            let selectectedCell = { ...stateSel }
            selectectedCell[cell.id] = !selected

            setState({
              selection: selectectedCell,
              activeRow: cellRow,
              activeCol: cellCol,
            })
          }}
          disabled={bingo}
        >
          {cell.value}
        </button>
      </div>
    </td>
  )
}

export default BoardCells
