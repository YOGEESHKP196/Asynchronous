//console.log("call backs function");
//function one(n){
//    return n+1;
//}
//function two(num1, one){
//    return num1+one(num1);
//}
//let sum = two(5, one);
//console.log(sum);

//console.log("Asynchronous function");
//setTimeout(()=>{                                //1st take function and 2nd take time in mile second
//    console.log("I am setTimeout");             //Work after 1000 mile second
//},1000);                                       //set 1000 mile second
//console.log("I am last");                               

/*function one(n){
    return n+1;
}
function two(num1,one){
    return num1+one(num1);
}
function output(value){
    let sum = two(value, one);
    console.log(sum);
}
setTimeout(()=>{
    output(5);
},9000)                                           //After 9000 mile second call output function
console.log("I am last");*/

//console.log("Promises");
/*let promise = new Promise(
    (success, failure)=>{
        success("Everything is fine");
        failure("Something went wrong");
    }
)
promise.then(
    (success)=>{
        console.log(success);
    },
    (failure)=>{
        console.log(failure);
    })
*/

/*let promise = new Promise(
    (success, failure)=>{
        let responsive_code = 200;
        if(responsive_code == 200){
            success("Everything is fine");
        }else{
            failure("Something went wrong");
        }
    }
)
promise.then(
    (success)=>{
        console.log(success);
    },
    (failure)=>{
        console.log(failure);
    })*/

/*let promise = new Promise(
    (success, failure)=>{
        let responsive_code = 100;
        if(responsive_code == 200){
            success("Everything is fine");
        }else{
            failure("Something went wrong");
        }
    }
)
promise.then(
    (success)=>{
        console.log(success);
    },
    (failure)=>{
        console.log(failure);
    })
console.log("After promise");*/

/*let promise = new Promise(
    (success, failure)=>{
        let responsive_code = 100;
    if(responsive_code == 200){
        setTimeout(()=>{
            success("Everything is fine");
        },5000);
    }else{
        setTimeout(()=>{
            failure("Something went wrong");
        },9000);
    }
    });
    promise.then(
        (success)=>{
            console.log(success);
        },
        (failure)=>{
            console.log(failure);
        }); */

console.log("Notes");
console.log("call backs");
/*function fetchedData(callback){
    setTimeout(()=>{
        callback("Data fetched");
    },1000);
}
fetchedData((massage)=>{
    console.log(massage);
});*/

console.log("Promises");
/*function fetchedData(){
    return new Promise((resolve, rejection)=>{
        setTimeout(()=>{
            resolve("Data fetched");
        },1000);
    });};
    fetchedData().then((message)=>{
        console.log(message);
    }).catch((error)=>{
        console.log(error);
    });*/

    console.log("Async Await");
async function fetchData(){
    try{
        const message = await new Promise((resolve, rejection)=>{
            setTimeout(()=>{
                resolve("Data fetched");
            },1000);
        });
        console.log(message);
    }catch(error){
        console.log(error);
    }fetchData();
}




    
