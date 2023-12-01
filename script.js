// lista de palavras aleatorias
const listaPalavras = ["abacaxi", "girafa", "computador", "chuva", "livro", "felicidade", "montanha", "amor", "oceano", "melodia", "sol", "jardim", "aventura", "serenidade", "piano", "chocolate", "liberdade", "sorriso", "lua", "estrela", "borboleta", "poesia", "dança", "amizade", "esperança", "gargalhada", "felicidade", "mistério", "brisa", "fragrância", "sonho", "magia", "serendipidade", "arco", "nuvem", "riso", "serenata", "floresta", "caminho", "silêncio", "suspiro", "voo", "encanto", "maravilha", "encantamento"];

// Função para sortear uma posição aleatória no vetor
function sortearPosicao() {
    return Math.floor(Math.random() * listaPalavras.length);
}

// Palavra que o jogador precisa adivinhar
var palavraSecreta = listaPalavras[sortearPosicao(listaPalavras)];

// Inicializa o array de letras corretamente adivinhadas
var letrasAdivinhadas = Array(palavraSecreta.length).fill("_");


// Função para atualizar a exibição da palavra no HTML
function atualizarPalavra() {
    const wordContainer = document.getElementById("word-container");
    wordContainer.textContent = letrasAdivinhadas.join(" ");
}
var letrasD = [];
var tentativas = 1;
var erros = 0;

//mostra as letras digitadas 
function mostraLetrasDigitadas() {
    const letras = document.getElementById("letras-Digitadas");
    letras.textContent = letrasD;
    const tent = document.getElementById("quant-tentativas");
    tent.textContent = tentativas;
    const tentErros = document.getElementById("quant-erros");
    tentErros.textContent = erros;
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    var novaPosicao = sortearPosicao();
    letrasD = [];
    tentativas = 1;
    erros = 0;
    mostraLetrasDigitadas();
    // Palavra que o jogador precisa adivinhar
    palavraSecreta = listaPalavras[novaPosicao];

    // Inicializa o array de letras corretamente adivinhadas
    letrasAdivinhadas = Array(palavraSecreta.length).fill("_");

    atualizarPalavra();

    document.getElementById("message").textContent = "";
}



// Função chamada ao clicar no botão "Verificar"
function checkGuess() {
    const guessInput = document.getElementById("guess");
    const guess = guessInput.value.toLowerCase();

    mostraLetrasDigitadas(letrasD.push(guess));

    if (guess.length === 1 && /^[a-z]$/.test(guess)) {
        // Adivinhação correta
        tentativas++;
        if (palavraSecreta.includes(guess)) {
            for (let i = 0; i < palavraSecreta.length; i++) {
                if (palavraSecreta[i] === guess) {
                    letrasAdivinhadas[i] = guess;
                }
            }
            atualizarPalavra();

            // Verifica se o jogador venceu
            if (!letrasAdivinhadas.includes("_")) {
                document.getElementById("message").textContent = "Parabéns! Você venceu!";
            }
        } else {
            if (erros > 4) {
                document.getElementById("message").textContent = "Game Over, tente novamente!";
            }
            else {
                document.getElementById("message").textContent = "Tente novamente. Letra incorreta.";
            }
            erros++;
        }
    } else {
        document.getElementById("message").textContent = "Por favor, insira uma letra válida.";
    }

    // Limpa o campo de entrada
    guessInput.value = "";
}



// Inicializa a exibição da palavra
atualizarPalavra();