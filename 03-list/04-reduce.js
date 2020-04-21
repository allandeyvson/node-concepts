const service = require('./service')

async function main(){
    try{
        const result =  await service.getPeople()
        
        const weights = result.results.map(item => parseInt(item.height))
        console.log('pesos', weights)

        const total = weights.reduce((previous, next) => {
            return previous + next
        }, 0)
        console.log('total', total)

        const strings = result.results.map(item => item.name)
        const stringResult = strings.reduce((previous, next) => {
            return previous.concat(', ').concat(next)
        })
        console.log('string concatenada', stringResult)

    }catch(error){
        console.error('ERROR', error)
    }
}
main()