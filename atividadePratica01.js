
//1 
let multiplicação=(n1,n2)=>{
    n1*=n2
    console.log(n1);
}
multiplicação(5,5);

//2
let maiorNumero=(v1,v2,v3)=>{
    if (v1>v2&&v1>v3) {
        console.log(`v1 é maior: ${v1}`);
    } else if(v2>v1&&v2>v3){
        console.log(`v2 é maior: ${v2}`);
    }else if(v3>v2&&v3>v1){
        console.log(`v3 é maior: ${v3}`);
    }else{
        console.log(`Mesmo valor`);
    }
}
maiorNumero(6,-6,4);


//3
let imparOuPar=valor=>{

    if (valor%2===0) {
        console.log("Par");
    } else if(valor%2!==0&&valor%1===0){
        console.log("Ímpar");
    }else{
        console.log("Só numeros inteiros");
    }
}
imparOuPar(5);

