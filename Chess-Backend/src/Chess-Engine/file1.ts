type ChessPieces="PawnW"|"KnightW"|"BishopW"|"KingW"|"QueenW"|"RookW"|"PawnB"|"KnightB"|"BishopB"|"KingB"|"QueenB"|"RookB";
const BoardState: (ChessPieces | null)[][] = [
  ["RookB","KnightB","BishopB","QueenB","KingB","BishopB","KnightB","RookB"], 
  Array(8).fill("PawnB"),                                                    
  Array(8).fill(null),                                                       
  Array(8).fill(null),                                                     
  Array(8).fill(null),                                                       
  Array(8).fill(null),                                                       
  Array(8).fill("PawnW"),                                                    
  ["RookW","KnightW","BishopW","QueenW","KingW","BishopW","KnightW","RookW"], 
];

