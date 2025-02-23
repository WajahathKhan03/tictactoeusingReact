import { useState } from "react"
import Card from '../card/card'
import './Grid.css'
import isWinner from "../../helper/checkWinner"
 

function Grid({numberofCards}){
const [board,setBoard]=useState(Array(numberofCards).fill(""))
const [turn,setTurn]=useState(true);
const [winner,setWinner]=useState(null);
 
function play(index){
  if(board[index]=='X'||board[index]=='O'){
    return
  }
  else if(winner=='X'|| winner=='O'){
    return
  }
if(turn==true){
  board[index]='X'
  
}else board[index]="O"
const win=isWinner(board,turn?'X':'O')
if(win){
  setWinner(win)
}
setBoard([...board])
setTurn(!turn)
 
}

function reset(){
  setBoard(Array(numberofCards).fill(""));
  setTurn(true);
  setWinner(null);
}

return (
    <div className="grid-wrapper">
        {
        winner  && (
          <div className="headings"> 
          <h1 className="winner-highlight">winner is: {winner}</h1>
          <button className="reset" onClick={()=>{reset()}}>Reset game</button>
          </div>
        )
        }
        <h1 className="current-highlight">Current turn:{turn?'X':'O'}</h1>
      
         <div className="Grid">
           {board.map((ele,indx)=> <Card  key={indx}   onplay={play} player={ele} index={indx}/>)}
         </div>
    </div>
)
}
export default Grid