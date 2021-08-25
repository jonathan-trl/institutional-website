const equipe = document.getElementById("equipe");
equipe.style.display = "none";
document
    .getElementById("veja-nossa-equipe")
    .addEventListener("click", (e) => {
        e.preventDefault();
        equipe.style.display = "block";
    });