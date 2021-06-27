function pokeball() {
    var x = document.getElementById("pokeId");

    console.log(x);
    x.classList.add('pokeballsNone');
}


setTimeout(pokeball, 600);