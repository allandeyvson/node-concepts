const axios = require('axios')
const URL = 'https://swapi.dev/api'

async function getPeople(){
    const url = `${URL}/people/`
    const response =  await axios.get(url)
    return response.data
}

module.exports = {
    getPeople
}