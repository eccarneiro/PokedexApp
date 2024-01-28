

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon"> <!-- Pokemon -->
                <span class="number">#001</span> 
                <span class="name">${pokemon.name}</span> 
                <div class="detail"> 
                    <ol class="types"> 
                        <li class="type">Poison</li> 
                        <li class="type">Grass</li> 
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                        alt="${pokemon.name}">
                </div>
            </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

PokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')
})


