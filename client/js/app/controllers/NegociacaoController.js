class NegociacaoController {

    #inputData;
    #inputQuantidade;
    #inputValor;
    constructor() {
        const $ = document.getElementById.bind(document);
        this.#inputData = $("data");
        this.#inputQuantidade = $("quantidade");
        this.#inputValor = $("valor");
    };
    adiciona(event) {
        event.preventDefault();
        const data = FormataData.textoParaData(this.#inputData.value);
        console.log(FormataData.dataParaTexto(data));
        let negociacao = new Negociacao(
            data,
            this.#inputQuantidade.value,
            this.#inputValor.value,
        );
        console.log(negociacao);
    }
}