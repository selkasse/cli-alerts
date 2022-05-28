/**
 * ? CLI Alerts
 *
 * * Cross-platform CLI alerts with colors
 * * Works on macOS, Linux, and Windows
 * ? Alerts: 'success', 'info', 'warning', 'error
 */

const chalk = require('chalk')
const sym = require('log-symbols')
const red = chalk.red.bold
const green = chalk.green
const blue = chalk.blue
const orange = chalk.keyword('orange')
const greenInverse = chalk.green.inverse
const redInverse = chalk.red.inverse.bold
const orangeInverse = chalk.keyword('orange').inverse
const blueInverse = chalk.blue.inverse

module.exports = (options) => {
  const defaultOptions = {
    type: `error`,
    msg: `You forgot to define all options`,
    name: ``,
  }

  //? if the user does not supply options, defaultOptions will be used
  const opts = { ...defaultOptions, ...options }
  const { type, msg, name } = opts
  const printName = name ? name : type.toUpperCase()

  if (type === `success`) {
    console.log(
      `\n${sym.success} ${greenInverse(` ${printName} `)} ${green(msg)}\n`
    )
  }

  if (type === `warning`) {
    console.log(
      `\n${sym.warning} ${orangeInverse(` ${printName} `)} ${orange(msg)}\n`
    )
  }

  if (type === `info`) {
    console.log(`\n${sym.info} ${blueInverse(` ${printName} `)} ${blue(msg)}\n`)
  }

  if (type === `error`) {
    console.log(`\n${sym.error} ${redInverse(` ${printName} `)} ${red(msg)}\n`)
  }
}
