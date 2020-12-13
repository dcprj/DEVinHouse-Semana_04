function soma (valor1, valor2) {
    return new Promise((resolve, reject) =>
    {
        const resultado = valor1 + valor2;

        if ((resultado % 2) == 0) {
            resolve (resultado);
        }
        else {
            reject ('O valor da soma não é um número par.');
        }
    }

    )
}
soma(10,11)
.then (resultado => console.log("Resultado: ", resultado))
.catch (mensagem => console.log("Erro: ", mensagem));

soma(10,2)
.then (resultado => console.log("Resultado: ", resultado))
.catch (mensagem => console.log("Erro: ", mensagem));
