const service = require('./service')

async function main(){
    try{
        const result =  await service.getPeople()
        listByForEach(result);    
        listByMap(result);

    }catch(error){
        console.error('ERROR', error)
    }
}
main()

function listByMap(result) {
    const names = result.results.map(person => person.name);
    console.log('MAP - NAME:', names);
}

function listByForEach(result) {
    const names = []
    result.results.forEach(element => {
        names.push(element.name);
    });
    console.log('FOR EACH - NAME:', names);
}
