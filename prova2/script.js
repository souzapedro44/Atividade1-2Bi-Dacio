function revelar() {
    const foto = document.getElementById("foto");

    if (foto.style.display === "none") {
        foto.style.display = "block";
    } else {
        foto.style.display = "none";
    }
}