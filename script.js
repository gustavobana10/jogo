// lista de palavras aleatorias
const listaPalavras = ["abacaxi", "girafa", "computador", "chuva", "livro", "felicidade", "montanha", "amor", "oceano", "melodia", "sol", "jardim", "aventura", "serenidade", "piano", "chocolate", "liberdade", "sorriso", "lua", "estrela", "borboleta", "poesia", "dança", "amizade", "esperança", "gargalhada", "felicidade", "mistério", "brisa", "fragrância", "sonho", "magia", "serendipidade", "arco", "nuvem", "riso", "serenata", "floresta", "caminho", "silêncio", "suspiro", "voo", "encanto", "maravilha", "encantamento"];

const animal = ["girafa", "cachorro", "coelho", "zebra", "borboleta", "elefante", "avestruz", "lontra", "gralha", "pomba", "jacare", "ema", "cobra", "gaivota", "cabra", "ovelha", "gato", "macaco", "joaninha", "tubarao", "cavalo", "pardal", "aguia", "leopardo", "leao", "onca"];
const fruta = ["abacaxi", "amora", "morango", "uva", "melancia", "manga", "bergamota", "tangerina", "laranja", "kiwi", "banana", "maracuja", "acerola", "jaca", "limao", "caqui", "abacate", "acai", "cacau", "figo", "pitaia", "pera", "maca", "nectarina"];
const objeto = ["panela", "garfo", "lixo", "cama", "mesa", "porta", "travesseiro", "mesa", "toalha", "colchao", "comida", "coberta", "garrafa", "copo", "espelho", "caneca", "sabao", "faca", "lencol", "geladeira", "fogao", "brinquedo", "pia", "cabide", "detergente", "sapato", "pijama", "colher"];
const nome = ["luiza", "gustavo", "lucas", "gabriela", "victor", "joao", "jose", "bianca", "julia", "rafaela", "estefany", "jorge", "ana", "artur", "gabriel", "henrique", "lorenzo", "mateus", "rafael", "maria", "livia", "luciana", "juliana", "carolina", "natalia", "natanael", "eduardo", "poliana", "pietra", "bruna", "karin", "olivia", "beatriz", "jeferson", "giusepe", "marlon", "virginia", "laisa", "andre", "regis", "tatiane", "marlei", "miranda", "marineusa", "everton", "vanessa", "suzan", "joao", "vitor", "vitoria", "leticia", "carlos", "amarildo"];
const carro = ["hammer", "celta", "polo", "bmw", "civic", "uno", "palio", "corolla", "hilux", "cruze", "saveiro", "ranger", "golf", "jetta", "fiesta", "focus", "onix", "renegade", "fox", "ecosport"];
const esporte = ["atletismo", "futebol", "futsal", "handebol", "tenis", "natacao", "boliche", "basquete", "baseball", "badminton", "judo", "peteca", "rugby", "volei", "softball", "xadrez", "automobilismo", "polo", "bocha", "boxe", "mma", "caiaque", "ciclismo", "cheerleading", "croquet", "cricket", "danca", "bale", "dardos", "esgrima", "frisbee", "futevolei", "gamao", "hipismo", "hoquei", "karate"];

// Palavra que o jogador precisa adivinhar
var palavraSecreta = "";
var but = document.getElementById("but");

function soteaPalavra() {
    return Math.floor(Math.random() * 6);
}

// Função para sortear uma posição aleatória no vetor
function sortearPosicao() {
    var numero = 0;
    const dica = document.getElementById("dica");
    switch (soteaPalavra()) {
        case 0:
            numero = Math.floor(Math.random() * animal.length);
            palavraSecreta = animal[numero];
            dica.textContent = "Animal";
            break;
        case 1:
            numero = Math.floor(Math.random() * fruta.length);
            palavraSecreta = fruta[numero];
            dica.textContent = "Fruta";
            break;
        case 2:
            numero = Math.floor(Math.random() * objeto.length);
            palavraSecreta = objeto[numero];
            dica.textContent = "Objeto";
            break;
        case 3:
            numero = Math.floor(Math.random() * nome.length);
            palavraSecreta = nome[numero];
            dica.textContent = "Nome";
            break;
        case 4:
            numero = Math.floor(Math.random() * carro.length);
            palavraSecreta = carro[numero];
            dica.textContent = "Carro";
            break;
        case 5:
            numero = Math.floor(Math.random() * esporte.length);
            palavraSecreta = esporte[numero];
            dica.textContent = "Esporte";
            break;
        default:
            break;
    }
}


sortearPosicao();


// Inicializa o array de letras corretamente adivinhadas
var letrasAdivinhadas = Array(palavraSecreta.length).fill("_");


// Função para atualizar a exibição da palavra no HTML
function atualizarPalavra() {
    const wordContainer = document.getElementById("word-container");
    wordContainer.textContent = letrasAdivinhadas.join(" ");
    verificaErro();
}
var letrasD = [];
var tentativas = 1;
var erros = 0;
var situacaoImg;

//mostra as letras digitadas 
function mostraLetrasDigitadas() {
    const letras = document.getElementById("letras-Digitadas");
    letras.textContent = letrasD;
    const tent = document.getElementById("quant-tentativas");
    tent.textContent = tentativas;
    const tentErros = document.getElementById("quant-erros");
    tentErros.textContent = erros;
}
var img1 = document.getElementById("img1");

// Função para reiniciar o jogo
function reiniciarJogo() {
    var novaPosicao = sortearPosicao();
    letrasD = [];
    tentativas = 1;
    erros = 0;
    situacaoImg = "none";
    but.style.display = "block";
    img1.style.display = "none";

    mostraLetrasDigitadas();
    // Palavra que o jogador precisa adivinhar
    sortearPosicao();

    // Inicializa o array de letras corretamente adivinhadas
    letrasAdivinhadas = Array(palavraSecreta.length).fill("_");

    atualizarPalavra();

    document.getElementById("message").textContent = "";
}

// function mostraImagem(img) {
//     var minhaDiv = document.getElementById(img);
//     if (minhaDiv.style.display === "none") {
//         minhaDiv.style.display = "block";
//     } else {
//         minhaDiv.style.display = "none";
//     }
// }
function verificaErro() {
    switch (erros) {
        case 1:
            img1.style.display = "block";
            break;
        default:
            break;
    }
}

// Função chamada ao clicar no botão "Verificar"
function checkGuess() {
    const guessInput = document.getElementById("guess");
    const guess = guessInput.value.toLowerCase();

    mostraLetrasDigitadas(letrasD.push(guess));

    verificaErro();

    if (erros == 10) {
        but.style.display = "none";
    }

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
            if (erros >= 10) {
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