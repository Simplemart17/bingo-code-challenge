import React from 'react'

const BoardMidPoint = ({ bingo }) => {
  return (
    <td className="bg-gray-300 outline-blue">
      <div className="flex justify-center ">
        <button className="w-16 h-16 p-1 border-0 cursor-not-allowed sm:w-24 sm:h-24 sm:p-3">
          <svg
            className={`${bingo ? 'animate-spin' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title id="star-title">Star</title>
            <path d="M12.6 1.4l2.2 7c.1.2.3.4.6.4h6.9c.7 0 1 .9.5 1.3l-5.7 4.2c-.2.1-.3.5-.2.7l2.7 7.2c.2.6-.5 1.2-1.1.7l-6-4.5c-.3-.2-.6-.2-.9 0l-6.1 4.5c-.5.5-1.3-.1-1-.7L7.1 15c.1-.2 0-.6-.3-.7l-5.6-4.2c-.6-.4-.2-1.3.4-1.3h6.9c.4 0 .6-.1.7-.4l2.2-7c.1-.7 1.1-.6 1.2 0z"></path>
          </svg>
        </button>
      </div>
    </td>
  )
}

export default BoardMidPoint
