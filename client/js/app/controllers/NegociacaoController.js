class NegociacaoController {

    #inputData;
    #inputQuantidade;
    #inputValor;
    #listaNegociacoes;
    constructor() {
        const $ = document.getElementById.bind(document);
        this.#inputData = $("data");
        this.#inputQuantidade = $("quantidade");
        this.#inputValor = $("valor");
        this.#listaNegociacoes = new ListaNegociacoes();
    };
    adiciona(event) {
        event.preventDefault();
        this.#listaNegociacoes.adiciona(this.#criaNegociacao());
        this.#limpaFormulario();
        this.#inputData.focus();

        console.log(this.#listaNegociacoes.negociacoes)
    }

    #criaNegociacao() {
        const data = FormataData.textoParaData(this.#inputData.value);
        return new Negociacao(
            data,
            this.#inputQuantidade.value,
            this.#inputValor.value,
        );
    }

    #limpaFormulario() {
        document.querySelector(".form").reset()
    }
}