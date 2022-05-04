class NegociacaoController {

    #inputData;
    #inputQuantidade;
    #inputValor;
    #listaNegociacoes;
    #negociacoesView;
    constructor() {
        const $ = document.getElementById.bind(document);
        this.#inputData = $("data");
        this.#inputQuantidade = $("quantidade");
        this.#inputValor = $("valor");
        this.#listaNegociacoes = new ListaNegociacoes();
        this.#negociacoesView = new NegociacoesView($("negociacoesView"));
        this.#negociacoesView.update(this.#listaNegociacoes);

    };
    adiciona(event) {
        event.preventDefault();
        this.#listaNegociacoes.adiciona(this.#criaNegociacao());
        this.#negociacoesView.update(this.#listaNegociacoes);
        this.#limpaFormulario();
        this.#inputData.focus();

        console.log(this.#listaNegociacoes)
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