class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime()) //programação defensiva
    this._quantidade = quantidade
    this._valor = valor
    Object.freeze(this) //congela a instancia do objeto
  }

  get volume() {
    return this._quantidade * this._valor
  }

  get data() {
    return new Date(this._data.getTime()) //programação defensiva outra solução de emular privacy seria a #, mas ela não tem legibilidade ainda, ou não trás a performace adequada
  }

  get quantidade() {
    return this._quantidade
  }

  get valor() {
    return this._valor
  }
}
