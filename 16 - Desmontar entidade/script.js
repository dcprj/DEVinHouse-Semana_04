const cidade = {
    nome: "Florianópolis",
    estado: "SC"
}


function desmontaEntidade(cidade) {
    const { nome, estado } = cidade;
    console.log("cidade: " + nome);
    console.log("estado: " + estado);
}

desmontaEntidade(cidade);
