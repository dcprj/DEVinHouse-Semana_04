const listaDeCidades = [
    {
        nome: "Florianópolis",
        estado: "SC"
    },
    {
        nome: "São José",
        estado: "SC"
    },
    {
        nome: "Rio de Janeiro",
        estado: "RJ"
    },
    {
        nome: "Curitiba",
        estado: "PR"
    },
    {
        nome: "Rancho Queimado",
        estado: "SC"
    },
    {
        nome: "Palhoça",
        estado: "SC"
    },
    {
        nome: "Nova Iguaçu",
        estado: "RJ"
    },
    {
        nome: "São Paulo",
        estado: "SP"
    },
    {
        nome: "Linhares",
        estado: "ES"
    },
    {
        nome: "Belo Horizonte",
        estado: "MG"
    },
    {
        nome: "Vitória",
        estado: "ES"
    },
    {
        nome: "Antônio Carlos",
        estado: "SC"
    },
    {
        nome: "Paulo Lopes",
        estado: "SC"
    },
    {
        nome: "Governador Celso Ramos",
        estado: "SC"
    },
    {
        nome: "Santa Rosa",
        estado: "RS"
    },
]

function verificaEstadoRS(lista) {
    const resultado = lista.some(cidade => cidade.estado === 'RS');
    return resultado ? "Existe alguma cidade do RS na lista." : "Não existe nenhuma cidade do RS na lista.";
}

console.log(verificaEstadoRS(listaDeCidades));
