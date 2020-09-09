//declaro a variável que guarda o número aleatório
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

//declaro a variável que guarda o primeiro elemento com a classe especificada
const tentativas = document.querySelector('.tentativas');
const ultimoResultado = document.querySelector('.ultimoResultado');
const altoOuBaixo = document.querySelector('.altoOuBaixo');

const enviarTentativa = document.querySelector('.enviarTentativa');
const campoTentativa = document.querySelector('.campoTentativa');

let contadorTentativa = 1;
let resetarBotao;

//função que verifica as tentativas
function verificarTentativas() {
    //variável que guarda o valor digitado
    let valorTentativa = Number(campoTentativa.value);
    //se é 1ª tentativa
    if (contadorTentativa === 1) {
        tentativas.textContent = 'Tentativas anteriores: ';
    }
    //incrementa o texto da tentativa em tentativas anteriores
    tentativas.textContent += valorTentativa + ' ';
    //se acertou o número
    if (valorTentativa === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Você descobriu o número';
        ultimoResultado.style.backgroundColor = 'green';
        altoOuBaixo.textContent = '';
        defineGameOver();
        //se tentou as 10 tentativas
    } else if (contadorTentativa === 10) {
        ultimoResultado.textContent = 'GAME OVER!';
        defineGameOver();
    } else {
        ultimoResultado.textContent = 'Errou!';
        ultimoResultado.style.backgroundColor = 'red';
        if (valorTentativa < numeroAleatorio) {
            altoOuBaixo.textContent = 'Última tentativa foi muito baixa.';
        } else if (valorTentativa > numeroAleatorio) {
            altoOuBaixo.textContent = 'Última tentativa foi muito alta.';
        }
    }
    contadorTentativa++;
    campoTentativa.value = '';
    campoTentativa.focus();
}
enviarTentativa.addEventListener('click', verificarTentativas);

function defineGameOver() {
    campoTentativa.disabled = true;
    enviarTentativa.disabled = true;
    resetarBotao = document.createElement('button');
    resetarBotao.textContent = 'Começar novo jogo';
    document.body.append(resetarBotao);
    resetarBotao.addEventListener('click', resetarJogo);
}
function resetarJogo() {
    contadorTentativa = 1;

    const resetaParas = document.querySelectorAll('.resultadoParas p');
    for (let i = 0; i < resetaParas.length; i++) {
        resetaParas[i].textContent = '';

    }
    resetarBotao.parentNode.removeChild(resetarBotao);

    campoTentativa.disabled = false;
    enviarTentativa.disabled = false;
    campoTentativa.value = '';
    campoTentativa.focus();

    ultimoResultado.style.backgroundColor = 'white';

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}