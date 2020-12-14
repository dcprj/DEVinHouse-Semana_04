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
]

function filtraCidadePorEstado(lista) {
    const resultado = lista.filter(cidade => cidade.estado === 'SC');
    return resultado;
}

console.log(filtraCidadePorEstado(listaDeCidades));
