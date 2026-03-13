const promptSync = require('prompt-sync');
const prompt = promptSync();
var i,j,lin,col;
var jogadas =0;
var jogador = 'o';
var vencedor =' ';
var fimJogo = false;
var tab = [3];
for(i = 0; i < 3; i++){
    tab[i] = [];
    for(j = 0; j < 3; j++){
        tab[i][j] = ' ';
    }
}

while((jogadas<9)&&(fimJogo==false)){
    for(i = 0; i < 3; i++){
    console.log(`[${tab[i][0]}][${tab[i][1]}][${tab[i][2]}]`);
}
    lin = parseInt(prompt(`${jogador} em [linha]: `));
    col=parseInt(prompt(`${jogador} em [coluna]: `));
    if(lin < 0 || lin > 2 || col < 0 || col > 2){
    console.log("Posicao invalida!");
}
else if(tab[lin][col] != ' '){
    console.log("Posicao ja ocupada!");
}
else{
    tab[lin][col] = jogador;
    jogadas++;

    //verifica vencedor (8 possibilidades)
    if(
        (tab[0][0]==jogador && tab[0][1]==jogador && tab[0][2]==jogador) ||
        (tab[1][0]==jogador && tab[1][1]==jogador && tab[1][2]==jogador) ||
        (tab[2][0]==jogador && tab[2][1]==jogador && tab[2][2]==jogador) ||
        (tab[0][0]==jogador && tab[1][0]==jogador && tab[2][0]==jogador) ||
        (tab[0][1]==jogador && tab[1][1]==jogador && tab[2][1]==jogador) ||
        (tab[0][2]==jogador && tab[1][2]==jogador && tab[2][2]==jogador) ||
        (tab[0][0]==jogador && tab[1][1]==jogador && tab[2][2]==jogador) ||
        (tab[0][2]==jogador && tab[1][1]==jogador && tab[2][0]==jogador)
    ){
        vencedor = jogador;
        fimJogo = true;
    }
    if(!fimJogo){
    if(jogador == 'o'){
        jogador = 'x';
    }else{
        jogador = 'o';
    }
}
}
}
//(d)
if(vencedor==' '){
    console.log("Empate\n");
}else{
    console.log(`${vencedor} venceu!`);
}