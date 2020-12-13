const arrayPessoas = [
    {
        "nome": "Adriele",
        "idade": 16,
        "telefone": "(33)333333333",
        "profissao": "Programador"
    },
    {
        "nome": "Anna Julia",
        "idade": 9,
        "telefone": "(44)444444444",
        "profissao": "Programador"
    },
    {
        "nome": "Débora",
        "idade": 45,
        "telefone": "(22)222222222",
        "profissao": "Programador"
    },
    {
        "nome": "Dario",
        "idade": 50,
        "telefone": "(11)111111111",
        "profissao": "Programador"
    }
];

listarMenores(arrayPessoas);

function listarMenores(pessoas) {
    const menores = pessoas.filter(pessoa => pessoa.idade < 18);
    for (const pessoa of menores) {
        console.log(pessoa.nome);        
    }
}