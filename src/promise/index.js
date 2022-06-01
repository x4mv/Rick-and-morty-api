const somthingWillHappen = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('hey!')
        }else{
            reject('Whoops!')
        }
    })
}

somthingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))


const somthingWillHappen2 = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() => {
                resolve('true')
            }, 3000);
        }else{
            const error = new Error('Woops!')
            reject(error)
        }
    })
}

somthingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))


Promise.all([somthingWillHappen(), somthingWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
        console.error(err)
    })