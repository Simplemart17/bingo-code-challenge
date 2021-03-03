
export const generate2DGrid = (values) => {
    let gridBoard = [];

    for (let i = 0; i < 5; i++) {
      gridBoard[i] = [];
      for (let j = 0; j < 5; j++) {
        let id = j + (i * 5);
        
        gridBoard[i][j] = {
          value: values[id],
          id: id
        }
      }
    }

    return gridBoard;
  }