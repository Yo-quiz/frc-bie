const yoKaiList = [
{ name: "Noripop", img: "cimbron.png" },
{ name: "Wakapoeira", img: "pasodon.png" },
{ name: "Salsalga", img: "ritma.png" },
{ name: "Amoiz", img: "kieroto.png" },
{ name: "Pikor", img: "zampo.png" },
{ name: "Granpapéti", img: "abuzampa.png" },
{ name: "Puissanfon", img: "gargazampa.png" },
{ name: "Grainpère", img: "aburroz.png" },
{ name: "Nomoné", img: "nomeda.png" },
{ name: "Noproblemo", img: "opti.png" },
{ name: "Papiltation", img: "enerposa.png" },
{ name: "Papiltension", img: "eneposa.png" },
{ name: "Hyprapillon", img: "mejorposa.png" },
{ name: "Vitapillon", img: "vivariposa.png" },
{ name: "Jojojoyeux", img: "felisonte.png" },
{ name: "Paradoxa", img: "reversa.png" },
{ name: "Potaumorose", img: "reversada.png" },
{ name: "Ratatam", img: "tricotom.png" },
{ name: "Supernoël", img: "dadivo.png" },
{ name: "Dédé", img: "bolilete.png" },
{ name: "Dédéstin", img: "doblilete.png" },
{ name: "Tontonerre", img: "papa_rayo.png" },
{ name: "Omnitonton", img: "tio_infinito.png" },
{ name: "Tata Aura", img: "mama_aura.png" },
{ name: "Tata Câlin", img: "tita_corazon.png" },
{ name: "Camaieul", img: "abuflorido.png" },
   { name: "Algacarena", img: "Algacabana.png" },
    { name: "Papilla", img: "Niscala.png" },
    { name: "Mme Papilla", aliases: ["Mme Papilla", "Madamme Papilla"], img: "Curaniscala.png" },
    { name: "Felipaix", img: "Arenito.png" },
    { name: "M. Felipaix", aliases: ["M. Felipaix", "M Felipaix", "Monsieur Felipaix"], img: "Don_Arenito.png" },
    { name: "Parasolal", img: "Sombrillo.png" },
    { name: "Scarasol", img: "Sombrillogro.png" },
    { name: "Ivanupieds", img: "Pauperman.png" },
    { name: "Lulutin", img: "Nomi.png" },
    { name: "Grégrigry", img: "Gran_Nomi.png" },
    { name: "Métaureaulog", img: "Torivinador.png" },
    { name: "Tauracle", img: "Torivino.png" },
    { name: "Donchan", aliases: ["DON-CHAN", "Don chan", "Donchan"], img: "Don-chan.png" },
    { name: "Sabrille", img: "Rayito.png" },
    { name: "Kyryn", img: "Kyryn.png" },
    { name: "Kyrycorne", img: "Unikyryn.png" },
    { name: "Robopapéti", img: "Roboabuzampa.png" },
    { name: "Lacanne", img: "Contentallo.png" },
    { name: "Canastelle", img: "Talloestrella.png" },
  { "name": "Faisanyan", "img": "Faisanyan.png" },
  { name: "Alga Sensei", "img": "Alga_Sensei.png" },
  { name: "Odyssényan", "img": "Odisenyan.png" },
  { name: "Barbucheron", "img": "Lenaciegotxea.png" },
  { name: "Double croche", "img": "Chunda_y_Tachunda.png" },
  { name: "Papi XXl", "img": "Abuzampa_XXL.png" },
  { name: "Bleunet de Bain", "img": "Albornocita_Azul.png" },
  { name: "Antoilette", "img": "Florentina.png" },
  { name: "Afronaute", "img": "Afronauta.png" },
  { name: "Charivariz", "img": "Arrocet.png" },
  { name: "Optimiss", "img": "Espe.png" },
  { name: "Benjirouette", "img": "Bellotieso.png" },
  { name: "Clic-Bull", "img": "Clican.png" },
  { name: "Dagamberge", "img": "Indeciguro.png" },
  { name: "Fourchelangue", "img": "Trabalanghi.png" },
  { name: "Papana Split", "img": "Dormidomingo.png" },
  { name: "Maudestique", "img": "Auxiliadora.png" },
  { name: "Papécolo", "img": "Abuflauta.png" },
  { name: "Les Frères Topla", "img": "Gememinencias.png" },
  { name: "Tatartelette", "img": "Repostilleja.png" },
  { name: "Javabien", "img": "Gogonzalo.png" },
  { name: "Fluorence", "img": "Esmaltina.png" },
  { name: "Maintendante", "img": "Fantasfitriona.png" },
  { name: "Survolt", "img": "Sonico.png" },
  { name: "Supervolt", "img": "Supersonico.png" },
  { "name": "Originyan", "img": "originyan.png" },
  { name: "Papy Charles", "img": "Darguin.png" },
  { name: "Papi Taliste", "img": "Abusplendido.png" },
  { name: "Athlaitue", "img": "Deporchugo.png" },
  { name: "Fantimoré", "img": "Timorato_Buendia.png" },
  { name: "Ailexagère", "img": "Maripasada.png" },
  { name: "Trèchérubine", "img": "Ulteria.png" },
  { "name": "Fukurokuju", "img": "Fukurokuju.png" },
  { name: "Génie du rire", "img": "Ingenio.png" },
  { "name": "Alpinella", "img": "Alpina.png" },
  { "name": "Nyansès II", "img": "nyanses_II.gif" },
  { name: "Raise Girl", aliases: ["Raise Girl", "Raise Gal"], img: "Raise_Girl.png" },
    { name: "Nyanses II G", aliases: ["Nyanses II G", "Neko II G"], img: "Nyanses_II_G.png" },
    { name: "Rosetta Stone", aliases: ["Rosetta Stone", "Pierre de Rosette"], img: "Piedra_Rosetta.png" },
    { name: "Tanto", img: "Tanto.png" },
];

let score = 0; 
let gameEnded = false; // Evita cambios una vez terminado el juego
const unlockedYoKai = new Set(); // Registro de Yo-kai desbloqueados por índice

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[̀-\u036f]/g, "").toLowerCase();
}

// Crear el objeto de audio una sola vez
let getSound = new Audio("get.mp3");

// Reproducir sonido cuando se desbloquea un Yo-kai (sin solapamiento)
function playGetSound() {
    if (!getSound.paused) {
        getSound.pause(); // Detener el sonido actual si ya está reproduciéndose
        getSound.currentTime = 0; // Reiniciar el sonido al principio
    }
    getSound.play(); // Reproducir el sonido
}

// Actualizar la puntuación en formato (adivinados / totales)
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${score}/${yoKaiList.length}`;
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego ha terminado, no hacer nada

    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());

    let correctGuess = false; // Bandera para reproducir el sonido solo si hay aciertos

    yoKaiList.forEach((yoKai, index) => {
        // Normaliza todos los nombres asociados al Yo-kai
        const normalizedNames = [yoKai.name, ...(yoKai.aliases || [])].map(name => normalizeString(name));

        // Si la respuesta coincide con alguno de los nombres y no ha sido desbloqueado
        if (normalizedNames.includes(userAnswer) && !unlockedYoKai.has(index)) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg && yoKaiImg.src.includes("no-kai.png")) {
                yoKaiImg.src = yoKai.img; // Actualiza la imagen

                // Añadir clase para animación
                yoKaiImg.classList.add("yokai-unlocked");
                yoKaiImg.addEventListener("animationend", () => {
                    yoKaiImg.classList.remove("yokai-unlocked"); // Quitar clase tras animación
                });

                unlockedYoKai.add(index); // Marcar el Yo-kai como desbloqueado
                score++;
                correctGuess = true; // Se encontró un acierto
            }
        }
    });

    if (correctGuess) {
        playGetSound(); // Reproducir sonido solo si hubo un acierto
        updateScoreDisplay(); // Actualizar puntuación
        document.getElementById("answer-input").value = ""; // Borra la respuesta después de un acierto
    }

    checkGameEnd(); // Verifica si el juego ha terminado
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true;
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar imagen de "¡Felicidades!"
    }
}

function showCongratsImage() {

    // Detener temporizador
    stopTimer();

    // Obtener tiempo final mostrado
    const tiempoTotal = document.getElementById("time").textContent;

    // Sonido de victoria
    const victorySound = new Audio("congrats.mp3");
    victorySound.volume = 0.8;
    victorySound.play().catch(() => {});

    // Panel lateral
    const finalPanel = document.createElement("div");
    finalPanel.style.position = "fixed";
    finalPanel.style.top = "0";
    finalPanel.style.right = "-350px";
    finalPanel.style.width = "320px";
    finalPanel.style.height = "100%";
    finalPanel.style.backgroundColor = "#22783b";
    finalPanel.style.color = "white";
    finalPanel.style.padding = "20px";
    finalPanel.style.boxSizing = "border-box";
    finalPanel.style.zIndex = "1000";
    finalPanel.style.fontFamily = "Arial, sans-serif";
    finalPanel.style.display = "flex";
    finalPanel.style.flexDirection = "column";
    finalPanel.style.transition = "right 0.6s ease";

    // Botón cerrar
    const closeBtn = document.createElement("div");
    closeBtn.textContent = "✖";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "15px";
    closeBtn.style.right = "15px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "18px";

    closeBtn.addEventListener("click", () => {
        finalPanel.style.right = "-350px";
        setTimeout(() => finalPanel.remove(), 600);
    });

    const title = document.createElement("h2");
    title.textContent = `Bravo ! Vous avez deviné tous les Yo-kai en ${tiempoTotal}`;
    title.style.marginTop = "40px";
    title.style.marginBottom = "30px";
    title.style.fontSize = "22px";
    
    const followText = document.createElement("p");
    followText.innerHTML = `
        Si cela vous a plu, pourquoi ne pas me suivre sur Twitter ?: 
        <a href="https://x.com/salty_baconV2" target="_blank" style="color:#4fc3ff; text-decoration:none;">
        @Salty_BaconV2
        </a>
    `;
    followText.style.fontSize = "16px";
    followText.style.marginTop = "auto";

    // Montaje
    finalPanel.appendChild(closeBtn);
    finalPanel.appendChild(title);
    finalPanel.appendChild(followText);
    document.body.appendChild(finalPanel);

    // Animación de entrada
    setTimeout(() => {
        finalPanel.style.right = "0";
    }, 50);
}

// Temporizador
let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Manejador de evento: validación automática con "input"
document.getElementById("answer-input").addEventListener("input", checkAnswer);

// Inicializar el marcador y temporizador al cargar la página
updateScoreDisplay(); // Inicializa la puntuación en 0/total
startTimer();

window.addEventListener("beforeunload", (event) => {
    if (score > 0) { // Mostrar advertencia solo si hay progreso
        event.preventDefault();
        event.returnValue = "¿Estás seguro de que quieres salir? Se perderá todo el progreso.";
    }
});
