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

  static formatDate(date) {
    const dateArray = date.split('/')
    const day = dateArray[0]
    const month = dateArray[1]
    const year = dateArray[2]
    
    return `${year}-${month}-${day}`
  }
}