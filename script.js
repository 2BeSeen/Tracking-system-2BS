const canvas = document.getElementById("tekenCanvas");
const ctx = canvas.getContext("2d");

// Canvas op volledige schermgrootte instellen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Instellen van de tekenkleur en dikte
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.lineJoin = "round";
ctx.lineCap = "round";

let tekenen = false;

function beginTekenen(e) {
    tekenen = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

function tekenenOpCanvas(e) {
    if (!tekenen) return;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
}

function stopTekenen() {
    tekenen = false;
}

// Event listeners voor tekenen
canvas.addEventListener("mousedown", beginTekenen);
canvas.addEventListener("mousemove", tekenenOpCanvas);
canvas.addEventListener("mouseup", stopTekenen);
canvas.addEventListener("mouseout", stopTekenen);

// Canvas opnieuw instellen als het venster wordt vergroot
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
