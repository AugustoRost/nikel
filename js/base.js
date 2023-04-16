const nome = " Marcelo Eltz";
let nome2 = "" ;
let pessoadefault = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "programador"
}

let nomes = ["Marcelo Eltz", "Maria SIlva", "Pedro Silva"];
let pessoas = [
{
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "programador"
},
{
    nome: "Maria Silva",
    idade: "25",
    trabalho: "UX/UI"
}
]

function alterarNome () {
    nome2 = "Maria Silva";
    console.log ("Valor alterados:");
    console.log (nome2);
}

function recebeEalteraNome (novoNome) {
    nome2 = novoNome;
    console.log ("Valor alterado recebendo um nome:");
    console.log (nome2);
}

function imprimirPessoa(pessoa){
    console.log(pessoa);

    console.log ("nome:");
    console.log (pessoa.nome);
    
    console.log ("idade:");
    console.log (pessoa.idade);
    
    console.log ("trabalho:");
    console.log (pessoa.trabalho);
}

function adicionarPessoa (pessoa) {
    pessoas.push(pessoa);

}

adicionarPessoa({

    nome:"Pedro Silva",
    idade:"28",
    Trabalho:"Porteiro"
});

function imprimirPessoa() {
    pessoas.forEach((item) => {
        console.log("nome") ;
        console.log(item.nome);

        console.log("nome") ;
        console.log(item.idade);

        console.log("nome") ;
        console.log(item.trabalho);
    })
}

imprimirPessoa();
//imprimirPessoa(pessoadefault);

//imprimirPessoa({
//    nome: "Maria Silva",
//    idade:"25",
//    trabalho: "UX/UI designer"
//})




//recebeEalteraNome ("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarnome();