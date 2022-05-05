class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document)

    this._inputData = $('#data')
    this._inputQuantidade = $('#quantidade')
    this._inputValor = $('#valor')
    this._listaNegociacoes = new ListaNegociacoes()
    this._negociacoesView = new NegociacoesView($('#negociacoesView'))

    this._negociacoesView.update(this._listaNegociacoes)
    this._mensagem = new Mensagem()
    this._mensagemView = new MensagemView($('#mensagemView'))
    this._mensagemView.update(this._mensagem)
  }
  adiciona(event) {
    event.preventDefault()
    // console.log(this._inputData.value) //opção desenvolvida, função dataCorrect
    function dataCorrect(data) {
      let a = data.split('-')
      a[1] = a[1] - 1
      let b = a.join(',')
      return b
    }

    // let negociacao = new Negociacao(
    //   DateHelper.textoParaData(this._inputData.value),
    //   this._inputQuantidade.value,
    //   this._inputValor.value
    // )

    this._listaNegociacoes.adiciona(this._criaNegociacao())

    this._mensagem.texto = 'Negociação adicionada com sucesso'
    this._negociacoesView.update(this._listaNegociacoes)
    this._mensagemView.update(this._mensagem)
    this._limpaFormulario()

    console.log(this._listaNegociacoes.negociacoes)

    // console.log(dataCorrect(this._inputData.value))  opção feita na aula alura por map
    // console.log(this._inputData.value.split('-'))
    // let data = new Date(
    //   ...this._inputData.value.split('-').map(function (item, indice) {
    //     return item - (indice % 2)
    //   })
    // )

    // let data = new Date(
    //   ...this._inputData.value
    //     .split('-')
    //     .map((item, indice) => item - (indice % 2))
    // ) // opção feita por arrow function, menor verbal

    // let negociacao = new Negociacao(
    //   data,
    //   this._inputQuantidade.value,
    //   this._inputValor.value
    // )

    // let diaMesAno =
    //   negociacao.data.getDate() +
    //   '/' +
    //   (negociacao.data.getMonth() + 1) +
    //   '/' +
    //   negociacao.data.getFullYear()

    // console.log(diaMesAno)

    // OR let data = new Date(this._inputData.value.replace(/-/g, ',')); tipo de manipulação de array
    // let negociacao = new Negociacao(
    //   this._inputData.value,
    //   this._inputQuantidade.value,
    //   this._inputValor.value
    // )

    //console.log(negociacao)
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    )
  }

  _limpaFormulario() {
    this._inputData.value = ''
    this._inputQuantidade.value = 1
    this._inputValor.value = 0.0

    this._inputData.focus()
  }
}
