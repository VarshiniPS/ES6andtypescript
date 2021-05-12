//5a

/*let add=function(value=10,bonus=5)
{
    console.log(value+bonus);
    
};

add();
add(20);
add(20,30);
add(undefined,30);*/

//5b

/*let userFriends=function(username:string,...userfriends: (string[] | undefined)[]){

for(let i in userfriends){
    console.log(username +" and her friends:"+userfriends[i]);


}
}

userFriends('PS',['sahana','sur','aish']);
userFriends('varshini',['shetty','sur','aish']);*/

//5c

let printCapitalNames=function(...fivenames:string[]){

    for(let i in fivenames){
console.log(swapcase(fivenames[i]))
    }
}

const swapcase=function swapcase(fivenames:string){

    return fivenames.toUpperCase();
}
let fivenames=['joy','gin','salt','dog','cow'];
printCapitalNames(...fivenames);


