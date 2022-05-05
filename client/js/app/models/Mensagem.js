class Mensagem {
  constructor(texto='') {
    this._texto = texto //parametro default vazio
  }

  get texto() {
    return this._texto
  }

  set texto(texto) {
    this._texto = texto
  }
}

let mensagem = new Mensagem('')
