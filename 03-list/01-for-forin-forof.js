const service = require('./service')

async function main(){
    try{
        const results = await service.getPeople()
        for(let i = 0; i <= results.results.length-1; i++){
            console.log('FOR - Name:', results.results[i].name)
        }
        for (let i in results.results){
            console.log('FORIN - Name:', results.results[i].name)
        }
        for (result of results.results){
            console.log('FOROF - Name:', result.name)
        }
    }catch(error){
        console.error('ERROR',error);        
    }
}

main()