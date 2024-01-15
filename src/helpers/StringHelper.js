export default class StringHelper {
  static formatCurrencyBR(value) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(parseFloat(value))
  }

  static formatDateBR(value) {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(value))
  }

  static liquidityLabel(value) {
    return `D +${value}`
  }
}