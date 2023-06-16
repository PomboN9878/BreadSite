/* Declara um metodo em javascript */
function corrigir() {
    var respostas = document.quiz.q1;
    for (var i = 0; i < respostas.length; i++) {
        if (respostas[i].checked) {
            // Verifica qual opção foi selecionada
            switch (i) {
                case 0:
                    document.getElementById("res1").innerHTML = "Você vai morrer";
                    document.getElementById("res2").innerHTML = "";
                    document.getElementById("res3").innerHTML = "";
                    document.getElementById("res4").innerHTML = "";
                    document.getElementById("res5").innerHTML = "";
                    document.getElementById("res6").innerHTML = "";
                    document.getElementById("res7").innerHTML = "";
                    document.getElementById("res8").innerHTML = "";
                    document.getElementById("res9").innerHTML = "";
                    document.getElementById("res10").innerHTML = "";
                    document.getElementById("res11").innerHTML = "";
                    document.getElementById("res12").innerHTML = "";
                    break;
                case 1:
                    document.getElementById("res2").innerHTML = "Você vai cair"
                    document.getElementById("res1").innerHTML = "";
                    document.getElementById("res3").innerHTML = "";
                    document.getElementById("res4").innerHTML = "";
                    document.getElementById("res5").innerHTML = "";
                    document.getElementById("res6").innerHTML = "";
                    document.getElementById("res7").innerHTML = "";
                    document.getElementById("res8").innerHTML = "";
                    document.getElementById("res9").innerHTML = "";
                    document.getElementById("res10").innerHTML = "";
                    document.getElementById("res11").innerHTML = "";
                    document.getElementById("res12").innerHTML = "";
                    break;
                case 2:
                    document.getElementById("res1").innerHTML = "";
                    document.getElementById("res2").innerHTML = "";
                    document.getElementById("res3").innerHTML = "Você vai ter um gato";
                    document.getElementById("res4").innerHTML = "";
                    document.getElementById("res5").innerHTML = "";
                    document.getElementById("res6").innerHTML = "";
                    document.getElementById("res7").innerHTML = "";
                    document.getElementById("res8").innerHTML = "";
                    document.getElementById("res9").innerHTML = "";
                    document.getElementById("res10").innerHTML = "";
                    document.getElementById("res11").innerHTML = "";
                    document.getElementById("res12").innerHTML = "";
                    break;
                case 3:
                    document.getElementById("res1").innerHTML = "";
                    document.getElementById("res2").innerHTML = "";
                    document.getElementById("res3").innerHTML = "";
                    document.getElementById("res4").innerHTML = "O mundo vai acabar";
                    document.getElementById("res5").innerHTML = "";
                    document.getElementById("res6").innerHTML = "";
                    document.getElementById("res7").innerHTML = "";
                    document.getElementById("res8").innerHTML = "";
                    document.getElementById("res9").innerHTML = "";
                    document.getElementById("res10").innerHTML = "";
                    document.getElementById("res11").innerHTML = "";
                    document.getElementById("res12").innerHTML = "";
                    break;
                case 4:
                    document.getElementById("res1").innerHTML = "";
                    document.getElementById("res2").innerHTML = "";
                    document.getElementById("res3").innerHTML = "";
                    document.getElementById("res4").innerHTML = "";
                    document.getElementById("res5").innerHTML = "Hoje será o melhor dia da sua vida";
                    document.getElementById("res6").innerHTML = "";
                    document.getElementById("res7").innerHTML = "";
                    document.getElementById("res8").innerHTML = "";
                    document.getElementById("res9").innerHTML = "";
                    document.getElementById("res10").innerHTML = "";
                    document.getElementById("res11").innerHTML = "";
                    document.getElementById("res12").innerHTML = "";
                    break;
                case 5:
                    document.getElementById("res1").innerHTML = "";
                    document.getElementById("res2").innerHTML = "";
                    document.getElementById("res3").innerHTML = "";
                    document.getElementById("res4").innerHTML = "";
                    document.getElementById("res5").innerHTML = "";
                    document.getElementById("res6").innerHTML = "Hoje vai chover";
                    document.getElementById("res7").innerHTML = "";
                    document.getElementById("res8").innerHTML = "";
                    document.getElementById("res9").innerHTML = "";
                    document.getElementById("res10").innerHTML = "";
                    document.getElementById("res11").innerHTML = "";
                    document.getElementById("res12").innerHTML = "";
                    break;
                case 6:
                    document.getElementById("res1").innerHTML = "";
                    document.getElementById("res2").innerHTML = "";
                    document.getElementById("res3").innerHTML = "";
                    document.getElementById("res4").innerHTML = "";
                    document.getElementById("res5").innerHTML = "";
                    document.getElementById("res6").innerHTML = "";
                    document.getElementById("res7").innerHTML = "Hoje seu dia, se não estivar ruim, vai ficar pior";
                    document.getElementById("res8").innerHTML = "";
                    document.getElementById("res9").innerHTML = "";
                    document.getElementById("res10").innerHTML = "";
                    document.getElementById("res11").innerHTML = "";
                    document.getElementById("res12").innerHTML = "";
                    break;
                case 7:
                    document.getElementById("res1").innerHTML = "";
                    document.getElementById("res2").innerHTML = "";
                    document.getElementById("res3").innerHTML = "";
                    document.getElementById("res4").innerHTML = "";
                    document.getElementById("res5").innerHTML = "";
                    document.getElementById("res6").innerHTML = "";
                    document.getElementById("res7").innerHTML = "";
                    document.getElementById("res8").innerHTML = "Um raio vai acertar alguem muito proximo de vocẽ";
                    document.getElementById("res9").innerHTML = "";
                    document.getElementById("res10").innerHTML = "";
                    document.getElementById("res11").innerHTML = "";
                    document.getElementById("res12").innerHTML = "";
                    break;
                case 8:
                    document.getElementById("res1").innerHTML = "";
                    document.getElementById("res2").innerHTML = "";
                    document.getElementById("res3").innerHTML = "";
                    document.getElementById("res4").innerHTML = "";
                    document.getElementById("res5").innerHTML = "";
                    document.getElementById("res6").innerHTML = "";
                    document.getElementById("res7").innerHTML = "";
                    document.getElementById("res8").innerHTML = "";
                    document.getElementById("res9").innerHTML = "Todos que você conhece vão desaparecer";
                    document.getElementById("res10").innerHTML = "";
                    document.getElementById("res11").innerHTML = "";
                    document.getElementById("res12").innerHTML = "";
                    break;
                case 9:
                    document.getElementById("res1").innerHTML = "";
                    document.getElementById("res2").innerHTML = "";
                    document.getElementById("res3").innerHTML = "";
                    document.getElementById("res4").innerHTML = "";
                    document.getElementById("res5").innerHTML = "";
                    document.getElementById("res6").innerHTML = "";
                    document.getElementById("res7").innerHTML = "";
                    document.getElementById("res8").innerHTML = "";
                    document.getElementById("res9").innerHTML = "";
                    document.getElementById("res10").innerHTML = "Você será surpriendido com um grande fortuna";
                    document.getElementById("res11").innerHTML = "";
                    document.getElementById("res12").innerHTML = "";
                    break;
                case 10:
                    document.getElementById("res1").innerHTML = "";
                    document.getElementById("res2").innerHTML = "";
                    document.getElementById("res3").innerHTML = "";
                    document.getElementById("res4").innerHTML = "";
                    document.getElementById("res5").innerHTML = "";
                    document.getElementById("res6").innerHTML = "";
                    document.getElementById("res7").innerHTML = "";
                    document.getElementById("res8").innerHTML = "";
                    document.getElementById("res9").innerHTML = "";
                    document.getElementById("res10").innerHTML = "";
                    document.getElementById("res11").innerHTML = "Você recebera uma visita inusitada";
                    document.getElementById("res12").innerHTML = "";
                    break;
                case 11:
                    document.getElementById("res1").innerHTML = "";
                    document.getElementById("res2").innerHTML = "";
                    document.getElementById("res3").innerHTML = "";
                    document.getElementById("res4").innerHTML = "";
                    document.getElementById("res5").innerHTML = "";
                    document.getElementById("res6").innerHTML = "";
                    document.getElementById("res7").innerHTML = "";
                    document.getElementById("res8").innerHTML = "";
                    document.getElementById("res9").innerHTML = "";
                    document.getElementById("res10").innerHTML = "";
                    document.getElementById("res11").innerHTML = "";
                    document.getElementById("res12").innerHTML = "Todos os seus problemas vão desaparecer lentamente";
                    break;
                default:
                    break;
            }
            break;
        }
    }
}  
