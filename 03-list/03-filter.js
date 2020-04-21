const service = require('./service')

async function main(){
    try{
        const result =  await service.getPeople()
        
        const familyLars = result.results.filter((person) => {
            const result = person.name.toLowerCase().indexOf('lars') !== -1
            return result
        })
        const names = familyLars.map((person) =>{
            return person.name
        })
        console.log(names)
    }catch(error){
        console.error('ERROR', error)
    }
}
main()