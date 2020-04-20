function getUser (){
    return new Promise(function resolvePromisse(resolve, reject){    
        setTimeout(() => {
            return resolve({
                id : 123,
                name: 'Allan'
            })
        }, 1000)
    })

}

function getTelephone (idUser){
    return new Promise(function resolvePromisse(resolve, reject){
        setTimeout(() => {
            return resolve ({
                number: 99778900,
                ddd: 84
            })
        }, 1000)
    })
    
}

main()
async function main (){
    try {
        const user = await getUser()
        const phone = await getTelephone(user.id)

        console.log(` Data Details
            User:${user.name},
            Phone:(${phone.ddd})-${phone.number}
        `);
    } catch(error){
        console.error('deu erro no sistema', error);
        
    }
}

// const userPromisse = getUser()
// userPromisse
//     .then(function(user){
//        return getTelephone(user.id).then(function(resultPhone){
//            return {
//                phone: resultPhone.number,
//                user: user.name
//            }
//        })
//     }) 
//     .then(function (result){
//         console.log('resultado ', result)
//     })
//     .catch(function (error){
//         console.error('deu pau no programa', error);        
//     })

// getUser(function resolveUser(error, user){
//     if(error){
//         console.error(error);
//         return;
//     }
//     console.log(user)

//     getTelephone(user.id, function resolvePhone(error2, phone){
//         if(error2){
//             return;
//         }

//         console.log(` Data Details
//             User:${user.name},
//             Phone:(${phone.ddd})-${phone.number}
//         `);
//     })
// })