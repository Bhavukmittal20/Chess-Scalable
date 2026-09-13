import type { ChessPieces } from "./types.js";
function generate_bishop_white_moves(BoardState:(ChessPieces|null)[][],i:number,j:number):[number,number][]{
    let ans:[number,number][]=[];
    for(let k=1;k<8;k++){
        if(i+k>=8||j+k>=8) break;
        if(BoardState[i+k]?.[j+k]==null) ans.push([i+k,j+k]);
        else if(BoardState[i+k]?.[j+k]=="RookB"||BoardState[i+k]?.[j+k]=="KingB"||BoardState[i+k]?.[j+k]=="QueenB"||BoardState[i+k]?.[j+k]=="BishopB"||BoardState[i+k]?.[j+k]=="PawnB"||BoardState[i+k]?.[j+k]=="KnightB"){
            ans.push([i+k,j+k]);
            break;
        }else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(i-k<0||j+k>=8) break;
        if(BoardState[i-k]?.[j+k]==null) ans.push([i-k,j+k]);
        else if(BoardState[i-k]?.[j+k]=="RookB"||BoardState[i-k]?.[j+k]=="KingB"||BoardState[i-k]?.[j+k]=="QueenB"||BoardState[i-k]?.[j+k]=="BishopB"||BoardState[i-k]?.[j+k]=="PawnB"||BoardState[i-k]?.[j+k]=="KnightB"){
            ans.push([i-k,j+k]);
            break;
        }else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(i-k<0||j-k<0) break;
        if(BoardState[i-k]?.[j-k]==null) ans.push([i-k,j-k]);
        else if(BoardState[i-k]?.[j-k]=="RookB"||BoardState[i-k]?.[j-k]=="KingB"||BoardState[i-k]?.[j-k]=="QueenB"||BoardState[i-k]?.[j-k]=="BishopB"||BoardState[i-k]?.[j-k]=="PawnB"||BoardState[i-k]?.[j-k]=="KnightB"){
            ans.push([i-k,j-k]);
            break;
        }else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(i+k>=8||j-k<0) break;
        if(BoardState[i+k]?.[j-k]==null) ans.push([i+k,j-k]);
        else if(BoardState[i+k]?.[j-k]=="RookB"||BoardState[i+k]?.[j-k]=="KingB"||BoardState[i+k]?.[j-k]=="QueenB"||BoardState[i+k]?.[j-k]=="BishopB"||BoardState[i+k]?.[j-k]=="PawnB"||BoardState[i+k]?.[j-k]=="KnightB"){
            ans.push([i+k,j-k]);
            break;
        }else{
            break;
        }
    }
    return ans;
}
function generate_bishop_black_moves(BoardState:(ChessPieces|null)[][],i:number,j:number):[number,number][]{
    let ans:[number,number][]=[];
    for(let k=1;k<8;k++){
        if(i+k>=8||j+k>=8) break;
        if(BoardState[i+k]?.[j+k]==null) ans.push([i+k,j+k]);
        else if(BoardState[i+k]?.[j+k]=="RookW"||BoardState[i+k]?.[j+k]=="KingW"||BoardState[i+k]?.[j+k]=="QueenW"||BoardState[i+k]?.[j+k]=="BishopW"||BoardState[i+k]?.[j+k]=="PawnW"||BoardState[i+k]?.[j+k]=="KnightW"){
            ans.push([i+k,j+k]);
            break;
        }else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(i-k<0||j+k>=8) break;
        if(BoardState[i-k]?.[j+k]==null) ans.push([i-k,j+k]);
        else if(BoardState[i-k]?.[j+k]=="RookW"||BoardState[i-k]?.[j+k]=="KingW"||BoardState[i-k]?.[j+k]=="QueenW"||BoardState[i-k]?.[j+k]=="BishopW"||BoardState[i-k]?.[j+k]=="PawnW"||BoardState[i-k]?.[j+k]=="KnightW"){
            ans.push([i-k,j+k]);
            break;
        }else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(i-k<0||j-k<0) break;
        if(BoardState[i-k]?.[j-k]==null) ans.push([i-k,j-k]);
        else if(BoardState[i-k]?.[j-k]=="RookW"||BoardState[i-k]?.[j-k]=="KingW"||BoardState[i-k]?.[j-k]=="QueenW"||BoardState[i-k]?.[j-k]=="BishopW"||BoardState[i-k]?.[j-k]=="PawnW"||BoardState[i-k]?.[j-k]=="KnightW"){
            ans.push([i-k,j-k]);
            break;
        }else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(i+k>=8||j-k<0) break;
        if(BoardState[i+k]?.[j-k]==null) ans.push([i+k,j-k]);
        else if(BoardState[i+k]?.[j-k]=="RookW"||BoardState[i+k]?.[j-k]=="KingW"||BoardState[i+k]?.[j-k]=="QueenW"||BoardState[i+k]?.[j-k]=="BishopW"||BoardState[i+k]?.[j-k]=="PawnW"||BoardState[i+k]?.[j-k]=="KnightW"){
            ans.push([i+k,j-k]);
            break;
        }else{
            break;
        }
    }
    return ans;
}
function generate_rook_white_moves(BoardState:(ChessPieces|null)[][],i:number,j:number):[number,number][]{
    let ans:[number,number][]=[];
    for(let k=1;k<8;k++){
        if(i+k>=8) break;
        if(BoardState[i+k]?.[j]==null) ans.push([i+k,j]);
        else if(BoardState[i+k]?.[j]=="RookB"||BoardState[i+k]?.[j]=="KingB"||BoardState[i+k]?.[j]=="QueenB"||BoardState[i+k]?.[j]=="BishopB"||BoardState[i+k]?.[j]=="PawnB"||BoardState[i+k]?.[j]=="KnightB"){
            ans.push([i+k,j]);
            break;
        }else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(i-k<0) break;
        if(BoardState[i-k]?.[j]==null) ans.push([i-k,j]);
        else if(BoardState[i-k]?.[j]=="RookB"||BoardState[i-k]?.[j]=="KingB"||BoardState[i-k]?.[j]=="QueenB"||BoardState[i-k]?.[j]=="BishopB"||BoardState[i-k]?.[j]=="PawnB"||BoardState[i-k]?.[j]=="KnightB"){
            ans.push([i-k,j]);
            break;
        }else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(j+k>=8) break;
        if(BoardState[i]?.[j+k]==null) ans.push([i,j+k]);
        else if(BoardState[i]?.[j+k]=="RookB"||BoardState[i]?.[j+k]=="KingB"||BoardState[i]?.[j+k]=="QueenB"||BoardState[i]?.[j+k]=="BishopB"||BoardState[i]?.[j+k]=="PawnB"||BoardState[i]?.[j+k]=="KnightB"){
            ans.push([i,j+k]);
            break;
        }else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(j-k<0) break;
        if(BoardState[i]?.[j-k]==null) ans.push([i,j-k]);
        else if(BoardState[i]?.[j-k]=="RookB"||BoardState[i]?.[j-k]=="KingB"||BoardState[i]?.[j-k]=="QueenB"||BoardState[i]?.[j-k]=="BishopB"||BoardState[i]?.[j-k]=="PawnB"||BoardState[i]?.[j-k]=="KnightB"){
            ans.push([i,j-k]);
            break;
        }else{
            break;
        }
    }
    return ans;
}
function generate_rook_black_moves(BoardState:(ChessPieces|null)[][],i:number,j:number):[number,number][]{
    let ans:[number,number][]=[];
    for(let k=1;k<8;k++){
        if(i+k>=8) break;
        if(BoardState[i+k]?.[j]==null) ans.push([i+k,j]);
        else if(BoardState[i+k]?.[j]=="RookW"||BoardState[i+k]?.[j]=="KingW"||BoardState[i+k]?.[j]=="QueenW"||BoardState[i+k]?.[j]=="BishopW"||BoardState[i+k]?.[j]=="PawnW"||BoardState[i+k]?.[j]=="KnightW"){
            ans.push([i+k,j]);
            break;
        }else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(i-k<0) break;
        if(BoardState[i-k]?.[j]==null) ans.push([i-k,j]);
        else if(BoardState[i-k]?.[j]=="RookW"||BoardState[i-k]?.[j]=="KingW"||BoardState[i-k]?.[j]=="QueenW"||BoardState[i-k]?.[j]=="BishopW"||BoardState[i-k]?.[j]=="PawnW"||BoardState[i-k]?.[j]=="KnightW"){
            ans.push([i-k,j]);
            break;
        }else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(j+k>=8) break;
        if(BoardState[i]?.[j+k]==null) ans.push([i,j+k]);
        else if(BoardState[i]?.[j+k]=="RookW"||BoardState[i]?.[j+k]=="KingW"||BoardState[i]?.[j+k]=="QueenW"||BoardState[i]?.[j+k]=="BishopW"||BoardState[i]?.[j+k]=="PawnW"||BoardState[i]?.[j+k]=="KnightW"){
            ans.push([i,j+k]);
            break;
        }else{
            break;
        }
    }
    for(let k=1;k<8;k++){
        if(j-k<0) break;
        if(BoardState[i]?.[j-k]==null) ans.push([i,j-k]);
        else if(BoardState[i]?.[j-k]=="RookW"||BoardState[i]?.[j-k]=="KingW"||BoardState[i]?.[j-k]=="QueenW"||BoardState[i]?.[j-k]=="BishopW"||BoardState[i]?.[j-k]=="PawnW"||BoardState[i]?.[j-k]=="KnightW"){
            ans.push([i,j-k]);
            break;
        }else{
            break;
        }
    }
    return ans;
}
function generate_queen_white_moves(BoardState:(ChessPieces|null)[][],i:number,j:number):[number,number][]{
    if(BoardState[i]?.[j]!='QueenW') return [];
    let ans:[number,number][]=[];
    ans.push(...generate_bishop_white_moves(BoardState,i,j));
    ans.push(...generate_rook_white_moves(BoardState,i,j));
    return ans;
}
function generate_queen_black_moves(BoardState:(ChessPieces|null)[][],i:number,j:number):[number,number][]{
    if(BoardState[i]?.[j]!='QueenB') return [];
    let ans:[number,number][]=[];
    ans.push(...generate_bishop_black_moves(BoardState,i,j));
    ans.push(...generate_rook_black_moves(BoardState,i,j));
    return ans;
}
function generate_king_black_moves(BoardState:(ChessPieces|null)[][],i:number,j:number):[number,number][]{
    if(BoardState[i]?.[j]!='KingB') return [];
    let ans:[number,number][]=[];
    for(let k=-1;k<=1;k++){
        for(let l=-1;l<=1;l++){
            if(k==0&&l==0) continue;
            if(i+k>=0&&i+k<8&&j+l>=0&&j+l<8){
                if(BoardState[i+k]?.[j+l]==null||BoardState[i+k]?.[j+l]=="RookW"||BoardState[i+k]?.[j+l]=="KingW"||BoardState[i+k]?.[j+l]=="QueenW"||BoardState[i+k]?.[j+l]=="BishopW"||BoardState[i+k]?.[j+l]=="PawnW"||BoardState[i+k]?.[j+l]=="KnightW"){
                    ans.push([i+k,j+l]);
                }
            }
        }   
    }
    return ans;
}
function generate_king_white_moves(BoardState:(ChessPieces|null)[][],i:number,j:number):[number,number][]{
    if(BoardState[i]?.[j]!='KingW') return [];
    let ans:[number,number][]=[];
    for(let k=-1;k<=1;k++){
        for(let l=-1;l<=1;l++){
            if(k==0&&l==0) continue;
            if(i+k>=0&&i+k<8&&j+l>=0&&j+l<8){
                if(BoardState[i+k]?.[j+l]==null||BoardState[i+k]?.[j+l]=="RookB"||BoardState[i+k]?.[j+l]=="KingB"||BoardState[i+k]?.[j+l]=="QueenB"||BoardState[i+k]?.[j+l]=="BishopB"||BoardState[i+k]?.[j+l]=="PawnB"||BoardState[i+k]?.[j+l]=="KnightB"){
                    ans.push([i+k,j+l]);
                }
            }
        }   
    }
    return ans;
}
function generate_knight_white_moves(BoardState:(ChessPieces|null)[][],i:number,j:number):[number,number][]{

    if(BoardState[i]?.[j]!='KnightW') return [];

    let ans:[number,number][]=[];
    let moves:[number,number][]=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];

    for(let [k,l] of moves){

        if(i+k>=0&&i+k<8&&j+l>=0&&j+l<8){

            if(BoardState[i+k]?.[j+l]==null||
               BoardState[i+k]?.[j+l]=="RookB"||
               BoardState[i+k]?.[j+l]=="KingB"||
               BoardState[i+k]?.[j+l]=="QueenB"||
               BoardState[i+k]?.[j+l]=="BishopB"||
               BoardState[i+k]?.[j+l]=="PawnB"||
               BoardState[i+k]?.[j+l]=="KnightB"){

                ans.push([i+k,j+l]);

            }

        }

    }

    return ans;
}
function generate_knight_black_moves(BoardState:(ChessPieces|null)[][],i:number,j:number):[number,number][]{

    if(BoardState[i]?.[j]!='KnightB') return [];

    let ans:[number,number][]=[];
    let moves:[number,number][]=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];

    for(let [k,l] of moves){

        if(i+k>=0&&i+k<8&&j+l>=0&&j+l<8){

            if(BoardState[i+k]?.[j+l]==null||
               BoardState[i+k]?.[j+l]=="RookW"||
               BoardState[i+k]?.[j+l]=="KingW"||
               BoardState[i+k]?.[j+l]=="QueenW"||
               BoardState[i+k]?.[j+l]=="BishopW"||
               BoardState[i+k]?.[j+l]=="PawnW"||
               BoardState[i+k]?.[j+l]=="KnightW"){

                ans.push([i+k,j+l]);

            }

        }

    }

    return ans;
}
function generate_pawn_white_moves(BoardState:(ChessPieces|null)[][],i:number,j:number):[number,number][]{
    if(BoardState[i]?.[j]!='PawnW') return [];
    let ans:[number,number][]=[];
    const isBlack = (p:ChessPieces|null) => p!=null && p.endsWith("B");

    if(i-1>=0&&j+1<8&&isBlack(BoardState[i-1]?.[j+1] ?? null)) ans.push([i-1,j+1]);
    if(i-1>=0&&j-1>=0&&isBlack(BoardState[i-1]?.[j-1] ?? null)) ans.push([i-1,j-1]);
    if(i-1>=0&&BoardState[i-1]?.[j]==null){
        ans.push([i-1,j]);
        if(i==6&&BoardState[i-2]?.[j]==null) ans.push([i-2,j]);
    }
    return ans;
}

function generate_pawn_black_moves(BoardState:(ChessPieces|null)[][],i:number,j:number):[number,number][]{
    if(BoardState[i]?.[j]!='PawnB') return [];
    let ans:[number,number][]=[];
    const isWhite = (p:ChessPieces|null) => p!=null && p.endsWith("W");

    if(i+1<8&&j+1<8&&isWhite(BoardState[i+1]?.[j+1] ?? null)) ans.push([i+1,j+1]);
    if(i+1<8&&j-1>=0&&isWhite(BoardState[i+1]?.[j-1] ?? null)) ans.push([i+1,j-1]);
    if(i+1<8&&BoardState[i+1]?.[j]==null){
        ans.push([i+1,j]);
        if(i==1&&BoardState[i+2]?.[j]==null) ans.push([i+2,j]);
    }
    return ans;
}