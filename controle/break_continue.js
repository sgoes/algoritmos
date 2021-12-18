//break
for (let i = 0; i <= 5; i++) {
    if (i === 2) {
        break;
    }
    console.log(i)
}



//continue
for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        continue; //em vez de sair do laço for, o continue simplestmente interrompe a repetição atual, ele segue automaticamente para a proxima repetição, sem sair do laço for 
    }
    console.log(i)
}