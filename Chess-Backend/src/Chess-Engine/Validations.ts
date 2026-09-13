import type {ChessPieces} from './types.js'
function validate_rook_white(BoardState:(ChessPieces|null)[][],i1:number,j1:number,i2:number,j2:number):boolean{
        if(BoardState[i1]?.[j1]!='RookW') return false;
        if(i1!=i2&&j1!=j2) return false;
        if(i1==i2&&j1==j2) return false;
        if(i1==i2){
            for(let k=j1+1;k<=j2;k++){
                if(k==j2&&(BoardState[i1]?.[k]=="RookB"||BoardState[i1]?.[k]=="KingB"||BoardState[i1]?.[k]=="QueenB"||BoardState[i1]?.[k]=="BishopB"||BoardState[i1]?.[k]=="PawnB")) return true;
                if(BoardState[i1]?.[k]!=null) return false;
            }
            for(let k=j1-1;k>=j2;k--){
                if(k==j2&&(BoardState[i1]?.[k]=="RookB"||BoardState[i1]?.[k]=="KingB"||BoardState[i1]?.[k]=="QueenB"||BoardState[i1]?.[k]=="BishopB"||BoardState[i1]?.[k]=="PawnB")) return true;
                if(BoardState[i1]?.[k]!=null) return false;
            }
            
        }
        if(j1==j2){
            
            for(let k=i1+1;k<=i2;k++){
                if(k==i2&&(BoardState[k]?.[j1]=="RookB"||BoardState[k]?.[j1]=="KingB"||BoardState[k]?.[j1]=="QueenB"||BoardState[k]?.[j1]=="BishopB"||BoardState[k]?.[j1]=="PawnB")) return true;
                if(BoardState[k]?.[j1]!=null) return false;
            }
            for(let k=i1-1;k>=i2;k--){
            if(k==i2&&(BoardState[k]?.[j1]=="RookB"||BoardState[k]?.[j1]=="KingB"||BoardState[k]?.[j1]=="QueenB"||BoardState[k]?.[j1]=="BishopB"||BoardState[k]?.[j1]=="PawnB")) return true;
                if(BoardState[k]?.[j1]!=null) return false;
            }
        }
        return true;
}
function validate_rook_black(BoardState:(ChessPieces|null)[][],i1:number,j1:number,i2:number,j2:number):boolean{
        if(BoardState[i1]?.[j1]!='RookB') return false;
        if(i1!=i2&&j1!=j2) return false;
        if(i1==i2&&j1==j2) return false;
        if(i1==i2){
            for(let k=j1+1;k<=j2;k++){
                if(k==j2&&(BoardState[i1]?.[k]=="RookW"||BoardState[i1]?.[k]=="KingW"||BoardState[i1]?.[k]=="QueenW"||BoardState[i1]?.[k]=="BishopW"||BoardState[i1]?.[k]=="PawnW")) return true;
                if(BoardState[i1]?.[k]!=null) return false;
            }
            for(let k=j1-1;k>=j2;k--){
                if(k==j2&&(BoardState[i1]?.[k]=="RookW"||BoardState[i1]?.[k]=="KingW"||BoardState[i1]?.[k]=="QueenW"||BoardState[i1]?.[k]=="BishopW"||BoardState[i1]?.[k]=="PawnW")) return true;
                if(BoardState[i1]?.[k]!=null) return false;
            }
            
        }
        if(j1==j2){
            for(let k=i1+1;k<=i2;k++){
                if(k==i2&&(BoardState[k]?.[j1]=="RookW"||BoardState[k]?.[j1]=="KingW"||BoardState[k]?.[j1]=="QueenW"||BoardState[k]?.[j1]=="BishopW"||BoardState[k]?.[j1]=="PawnW")) return true;
                if(BoardState[k]?.[j1]!=null) return false;
            }
            for(let k=i1-1;k>=i2;k--){
            if(k==i2&&(BoardState[k]?.[j1]=="RookW"||BoardState[k]?.[j1]=="KingW"||BoardState[k]?.[j1]=="QueenW"||BoardState[k]?.[j1]=="BishopW"||BoardState[k]?.[j1]=="PawnW")) return true;
                if(BoardState[k]?.[j1]!=null) return false;
            }
        }
        return true;
}
function validate_bishop_white(BoardState:(ChessPieces|null)[][],i1:number,j1:number,i2:number,j2:number):boolean{
    if(BoardState[i1]?.[j1]!="BishopW") return false;
    if(Math.abs(i1-i2)!=Math.abs(j1-j2)) return false;
    
    return true;
}