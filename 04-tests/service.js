const axios = require('axios')
const URL = 'https://swapi.dev/api'

async function getPerson(name){
    const url = `${URL}/people/?search=${name}`
    const result = await axios.get(url)
    return result.data.results.map(convertData)
}

function convertData(item){
    return {
        name: item.name, 
        height: item.height
    }
}

module.exports = {
    getPerson
}