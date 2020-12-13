const arrayPessoas = [
    {
        "nome": "Adriele",
        "idade": 16,
        "telefone": "(33)333333333",
        "profissao": "Estudante"
    },
    {
        "nome": "Anna Julia",
        "idade": 9,
        "telefone": "(44)444444444",
        "profissao": "Estudante"
    },
    {
        "nome": "Débora",
        "idade": 45,
        "telefone": "(22)222222222",
        "profissao": "Professora"
    },
    {
        "nome": "Dario",
        "idade": 50,
        "telefone": "(11)111111111",
        "profissao": "Analista de Sistemas"
    }
];

console.log(arrayPessoas);

maior(arrayPessoas);

function maior(pessoas) {
   const maior = pessoas.find(pessoa  => pessoa.idade >= 18);
   maior ? console.log(maior) : console.log("Não há maiores na lista");   
}