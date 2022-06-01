const fetchData = require('../utils/fetchData')
const API = 'Https://rickandmortyapi.com/api/character/'

const anotherFunction = async (URL) =>{
    try{
        const data = await fetchData(URL)
        const character = await fetchData(`${API}${data.results[0].id}`)
        const species = await fetchData(`${API}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)
        
        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
        console.log(species.species)
   
    }catch(error){
        console.error(error)
    }
}

console.log('Before')
anotherFunction(API)
console.log('After')