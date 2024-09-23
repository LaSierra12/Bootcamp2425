

var VARiable = 987;
let LETvariable = 654
const CONSTvariable = 321;

console.log(VARiable);
console.log(LETvariable);
console.log(CONSTvariable);

console.log(typeof VARiable);
console.log(typeof LETvariable);
console.log(typeof CONSTvariable);

if(true){
    var VARiable =1111; //scope global
}
console.log(VARiable);
if(true){
    let LETvariable =2222; //scope local
    console.log("local:"+LETvariable);
}
console.log(LETvariable);
