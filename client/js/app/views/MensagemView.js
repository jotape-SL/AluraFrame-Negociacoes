const btnAdd = document.querySelector("#btnAdd");
const msgAdd = document.querySelector("#mensagemView");

class MensagemView extends View {
    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }
};

btnAdd.addEventListener("click", () => {
    msgAdd.classList.remove("remover");
    msgAdd.classList.remove("removerReal");
    setTimeout(() => {
        msgAdd.classList.add("remover");
    }, 600)
});