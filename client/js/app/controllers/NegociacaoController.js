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
        let helper = new FormataData();
        const data = helper.textoParaData(this.#inputData.value);
        console.log(helper.dataParaTexto(data));
        let negociacao = new Negociacao(
            data,
            this.#inputQuantidade.value,
            this.#inputValor.value,
        );
    }
}