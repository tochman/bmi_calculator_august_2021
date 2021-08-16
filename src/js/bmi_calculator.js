class BmiCalculator {
  calculateBmi(options) {
    if (options.weight === null || options.height === null ) {
      return 'You need to pass in valid values'
    } else {
      const weight = parseInt(options.weight)
      const height = parseFloat(options.height)
      const value = (weight / (height * height)).toFixed(1)
      return value
    }
  }
}

if (window.module) {
  module.exports = BmiCalculator;
}
