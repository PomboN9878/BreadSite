/* Declara um metodo em javascript */
function corrigir() {
    let p = 0;

    document.getElementById("res").style.border = "solid #ccc5b4 1px";

    /* Pontuando a questão 1 */
    if (document.quiz.q1[0].checked) {
        p += 10;
    } else if (document.quiz.q1[1].checked) {
        p += 10;
    } else if (document.quiz.q1[2].checked) {
        p += 10;
    }

    /* Pontuando a questão 2 */
    if (document.quiz.q2[0].checked) {
        p += 10;
    } else if (document.quiz.q2[1].checked) {
        p += 20;
    } else if (document.quiz.q2[2].checked) {
        p += 30;
    }

    /* Pontuando a questão 3 */
    if (document.quiz.q3[0].checked) {
        p += 10;
    } else if (document.quiz.q3[1].checked) {
        p += 20;
    } else if (document.quiz.q3[2].checked) {
        p += 30;
    }

    if (p <= 30) {
        document.getElementById("res").innerHTML = "Você não merece um gato"
    } else if (p <= 40) {
        document.getElementById("res").innerHTML = "Você tem um gosto muito preferencial para gatos"
    } else if (p <= 60) {
        document.getElementById("res").innerHTML = "Você ate pode ter um gato"
    } else if (p <= 100) {
        document.getElementById("res").innerHTML = "Voce merece um gato"
    }
}