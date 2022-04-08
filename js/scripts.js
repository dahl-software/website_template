function hideImpressum() {
    document.getElementById("impressum").classList.add("invisible");
    document.getElementById("container").classList.remove("blured");
}

function showImpressum() {
    document.getElementById("impressum").classList.remove("invisible");
    document.getElementById("container").classList.add("blured");
}
