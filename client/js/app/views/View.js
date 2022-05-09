class View {
    #elemento;

    constructor(elemento) {
        this.#elemento = elemento;
    }
    template() {
        throw new Error("O metodo template precisa ser implementado!")
    }
    update(model) {
        this.#elemento.innerHTML = this.template(model);
    }
}