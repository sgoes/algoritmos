//Parâmetro (Nota) -> Retorno (Conceito)


let conceito = 9.4

function nota(conceito) {
    if (conceito == 10) {
        return "A+";
    }
    if (conceito == 9) {
        return "A";
    }
    if (conceito == 8) {
        return "B+";
    }
    if (conceito == 7) {
        return "B";
    }
    if (conceito == 6) {
        return "C+";
    }
    if (conceito == 5) {
        return "C";
    }
    if (conceito == 4) {
        return "D+";
    }
    if (conceito == 3) {
        return "D";
    }
    if (conceito == 2) {
        return "F+";
    }
    if (conceito == 1) {
        return "F";
    } else {
        return null;
    }
}
console.log(nota(`A nota do aluno foi de ${conceito}`));