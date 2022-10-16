
let segundos = 0;
let timer;
relogio = document.querySelector("#relogio");

function formatSeconds(seconds) {
    return new Date(seconds * 1000).toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: "UTC"
    });
};

function startTimer() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = formatSeconds(segundos);
    }, 1000);
}
function start() {
    clearInterval(timer);
    startTimer()
    relogio.style.color = "#2a2a2a"
};

function pause() {
    clearInterval(timer);
    relogio.style.color = '#f65d5d'
};

function clean() {
    clearInterval(timer);
    relogio.style.color = "#2a2a2a"
    relogio.innerHTML = "00:00:00";
    segundos = 0;
};
