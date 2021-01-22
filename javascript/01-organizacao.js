console.log("teste");

{
    {
        console.log("Bloco01")
    }
    {
        console.log("Bloco02")
    }
}


function Teste(){
    console.log("Resposta da função");
}

console.log("Sentença 02");
Teste();

function transformarParaMaiuscula( parametro ){
    console.log(parametro.toUpperCase());
}

let UserName = "gabriel";
transformarParaMaiuscula(UserName);