document.addEventListener("mousemove", (e) => {
  const bolinha = document.createElement("div");
  bolinha.className = "fumaca";
  bolinha.style.left = e.clientX + "px";
  bolinha.style.top = e.clientY + "px";
  document.body.appendChild(bolinha);

  setTimeout(() => bolinha.remove(), 1000);
});