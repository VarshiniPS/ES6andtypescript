let names=['tony','ivan','jerry'];

let res=names.map(value =>{
    return{
        name:value,
        len:value.length
    }
}
)

console.log(res);
