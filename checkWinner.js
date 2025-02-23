function isWinner(board,symbol){
    for(let i=0;i<=8;i=i+3){
      if (board[i] === symbol && board[i+1] === symbol && board[i+2] === symbol) {
         return symbol;
     }  
    }
    for(let i=0;i<2;i++){
       if(board[i]==board[i+3] && board[i+3]==board[i+6] && board[i+6]==symbol) {
         return symbol;
       }
    }
    if((board[0]==board[4] && board[4]==board[8] && board[8]==symbol) || (board[2]==board[4] && board[4]==board[6] && board[6]==symbol)) return symbol
    return null
   }
   export default isWinner