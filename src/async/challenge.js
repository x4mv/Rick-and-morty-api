const fetchData = require('../utils/fetchData')
const API = 'Https://rickandmortyapi.com/api/character/'

const anotherFunction = async (URL) =>{
    try{
        const data = await fetchData(URL)
        const character = await fetchData(`${API}${data.results[0].id}`)
        const species = await fetchData(`${API}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)
        
        console.log('Cantidad de pjs: ',data.info.count)
        console.log('Name del PJ: ',character.name)
        console.log('De la dimension tal: ',origin.dimension)
        console.log('Es la especie tal: ',species.species)
   
    }catch(error){
        console.error(error)
    }
}


anotherFunction(API)


