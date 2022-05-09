const btnAdd = document.querySelector("#btnAdd");
const msgAdd = document.querySelector("#mensagemView");
const pMsg = document.querySelector(".alert .alert-info ")


class MensagemView {
    #elemento;
    constructor(elemento) {
        this.#elemento = elemento;
    }

    #template(model) {
        return model.texto ? `<p class="alert alert-info" id="msgAdd">${model.texto}</p>` : `<p id="msgAdd"></p>`;
    }

    update(model) {
        this.#elemento.innerHTML = this.#template(model);
    }
}
btnAdd.addEventListener("click", () => {
    msgAdd.classList.remove("remover");
    msgAdd.classList.remove("removerReal");
    setTimeout(() => {
        msgAdd.classList.add("remover");
    }, 600)
});