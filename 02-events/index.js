const EventEmitter = require ('events')

class MyEmissor extends EventEmitter {

}

const myEmissor = new MyEmissor()
const nameEvent = 'click:user'

myEmissor.on(nameEvent, function (click){
    console.log('um usuario clicou', click)
})

myEmissor.emit(nameEvent, 'na barra de rolagem')
myEmissor.emit(nameEvent, 'no ok')

let count = 0
setInterval(() => {
    myEmissor.emit(nameEvent, 'no ok' + (count++))
}, 1000);