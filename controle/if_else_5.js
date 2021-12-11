const hora = 9;
let saudacao;

if (hora < 12) {
    saudacao = 'Bom dia!';
} else {
    if (hora < 18) {
        saudacao = 'Boa tarde!'
    } else {
        if (hora < 22) {
            saudacao = 'Boa Noite';
        } else {
            saudacao = 'É muito tarde';
        }
    }
}

console.log(saudacao);