/* 
Objetivo: Quando clicar no botão mostra o formulário e a máscara
1-Qual botão clicar? OK
2-Qual formulário?
3-Qual máscara?
4-O que é mostrar? 
                    Trazer o formulário da esquerda p direita
                    Centralizar o formulárip na tela 
                    Exibir a máscara.

*/
const formulario = document.querySelector(".formulario");
const mascara =document.querySelector(".mascara-form");

function mostrarForm() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function esconderForm() {
    formulario.style.left = "-350px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}