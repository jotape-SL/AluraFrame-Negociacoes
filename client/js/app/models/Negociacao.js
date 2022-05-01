class Negociacao {
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    };

    get negociacao() {
        return {
            data: this.#data,
            quantidade: this.#quantidade,
            valor: this.#valor,
            volume: this.#quantidade * this.#valor,
        }

    };

}