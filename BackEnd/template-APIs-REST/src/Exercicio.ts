
function checaTriangulo(a:number,b:number,c:number){
    if(a!==b &&  b!== c){
        return"Escaleno"
    
    } else if (a===b && b===c){
        return"Equílatero"
    }else{
        return"Isósceles"
    }
    
}
console.log(checaTriangulo(4,4,4))