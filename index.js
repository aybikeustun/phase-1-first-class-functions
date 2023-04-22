function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return function named(){
        console.log(abc)
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log(def)
    }
}