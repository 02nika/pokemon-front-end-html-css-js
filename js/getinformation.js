let currentPage = 1;
let totalPages = 151;


function fetchKantoPokemon(currentPage){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(function(allpokemon){
            allpokemon.results.forEach(function(pokemon){
                document.getElementById('pokemon-container').innerHTML = ' ';
                fetchPokemonData(pokemon, currentPage); 
            })
        })
}

//
function fetchPokemonData(pokemon, page){
    let url = pokemon.url;
    fetch(url)
        .then(response => response.json())
        .then(function(pokeData){
            renderPokemon(pokeData, page);
        })
}



function renderPokemon(pokeData, page){
    let allPokemonContainer = document.getElementById('pokemon-container');
    
    
    let index = (page-1)*14 + 1;

    if(pokeData.id >= index && pokeData.id < index+14){
            let pokeContainer = document.createElement("div");
            pokeContainer.classList.add('inside-div');
            createPokeImage(pokeData.id, pokeContainer);

            let pokeName = document.createElement('h4')
            pokeName.innerText = pokeData.name
            
            let pokeNumber = document.createElement('p')
            pokeNumber.innerText = `#${pokeData.id}`
            
            let pokeTypes = document.createElement('ul') 

            
            createTypes(pokeData.types, pokeTypes)


            pokeContainer.append(pokeName, pokeNumber, pokeTypes);   


            console.log();

            checkPokemonType(pokeData.types[0]['type']['name'], pokeContainer);

            

            allPokemonContainer.appendChild(pokeContainer);
    }

    
}

function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function createPokeImage(pokeID, containerDiv){
    let pokeImage = document.createElement('img');
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`;
    containerDiv.append(pokeImage);
}


// paging system
document.getElementById('prev').addEventListener('click', function(){
    if((currentPage-1)*14 + 1 === 1){
        return;
    }

    currentPage--;
    fetchKantoPokemon(currentPage);
});

document.getElementById('next').addEventListener('click', function(){
    console.log("currentPage: " + ((currentPage-1)*14 + 1));
    console.log("totalPages: " + totalPages);
    if((totalPages-14) <= ((currentPage-1)*14 + 1)){
        return;
    }
    currentPage++;
    fetchKantoPokemon(currentPage);
});



function checkPokemonType(pokeType, container){
    if(pokeType == 'fire')
        container.classList.add('fireColor');
    else if(pokeType == 'water')
        container.classList.add('waterColor');
    else if(pokeType == 'flying')
        container.classList.add('flyColor');
    else if(pokeType == 'bug')
        container.classList.add('bugColor');
    else if(pokeType == 'normal')
        container.classList.add('normalColor');
    else if(pokeType == 'poison')
        container.classList.add('poisonColor');
    else if(pokeType == 'electric')
        container.classList.add('electricColor');
    else if(pokeType == 'ground')
        container.classList.add('groundColor');
    else if(pokeType == 'fairy')
        container.classList.add('fairyColor');
    else if(pokeType == 'fighting')
        container.classList.add('fightingColor');
    else if(pokeType == 'psychic')
        container.classList.add('psychicColor');
    else if(pokeType == 'ice')
        container.classList.add('iceColor');
    else if(pokeType == 'rock')
        container.classList.add('rockColor');
}



fetchKantoPokemon(currentPage);