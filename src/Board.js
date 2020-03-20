import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';




class Board extends Component {
  static defaultProps ={
    nrows:5,
    ncols:5,
    chanceLightsOn:0.25
  };

  constructor(props) {
    super(props);

    this.state = {
      hasWon:false,
      board:this.createBoard()
    }
    this.flipCellsAround=this.flipCellsAround.bind(this)
  }



  createBoard() {
    let board = [];

    for (let i = 0; i < this.props.nrows; i++) 
    {
      let row =[];
      for(let j=0;j<this.props.ncols;j++)
      {
        row.push(Math.random()< this.props.chanceLightsOn)
      }  
      board.push(row)
    }
    return board
  }



  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let i=parseInt(coord.split("-")[0])
    let j=parseInt(coord.split("-")[1])

    function flipCell(y, x) {


      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    flipCell(i,j)
    flipCell(i,j-1)
    flipCell(i,j+1)
    flipCell(i-1,j)
    flipCell(i+1,j)



    let flag;
    for (let i = 0; i < nrows; i++) {
      for(let j=0; j < ncols; j++)
      {
        if(board[i][j] === true)
        {
          flag=board[i][j]
        }
      }   
    }
    let hasWon=!flag
    this.setState({board:board, hasWon:hasWon});
  }




  render() {
    if(this.state.hasWon)
    {
      return(
        <div className="Board-title">
          <div className="Winner">
            <span className="neon-orange">YOU</span>
            <span className="neon-blue">WIN!</span>
          </div>
        </div> 
      )
    }


    let tblboard=[];
    for (let i = 0; i < this.props.nrows; i++) 
    {
      let row=[]
      for(let j=0; j< this.props.ncols;j++)
      {
        let coord=i+"-"+j;
        row.push(<Cell 
                  key={coord} 
                  keys={coord}
                  isLit={this.state.board[i][j]}
                  flipCellsAroundMe={this.flipCellsAround}/>)
      }
      tblboard.push(<tr key={i}>{row}</tr>);
      
    }
    return(
        <div>
          <div className="Board-title">
            <div className="neon-orange">Lights</div>
            <div className="neon-blue">Out</div>
          </div> 
          <table className="Board">
          <tbody>{tblboard}</tbody>
        </table>
        </div>
        
    )
  }
}


export default Board;
