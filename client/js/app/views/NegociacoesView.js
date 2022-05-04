class NegociacoesView {
  #elemento;
  constructor(elemento) {
    this.#elemento = elemento;
  }
  #template(model) {
    return `
        <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>
  
        <tbody>
          ${model.negociacoes.map((n)=>{
            return `
            <tr>
            <td>${FormataData.dataParaTexto(n.negociacao.data)}</td>
            <td>${n.negociacao.quantidade} UN</td>
            <td>R$ ${n.negociacao.valor}.00</td>
            <td>${n.negociacao.volume}</td>
            </tr>
            `
          }).join('')}
        </tbody>
        <tfoot>
        <td colspan="3">Total a pagar:</td>
        <td>
          R$ ${model.negociacoes.reduce((total, n) =>total + n.negociacao.volume,0.0).toFixed(2)}
        </td>
        </tfoot>
      </table>
        `
  }
  update(model) {
    this.#elemento.innerHTML = this.#template(model);
  }
}