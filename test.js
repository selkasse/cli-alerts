//* Emulate running the package by requiring the local file instead of the npm package
const alert = require('./index.js')

alert({
  type: `success`,
  msg: `All done!`,
  name: `DONE`,
})

//? Expected output:
//* `✔️ SUCCESS: All done!`

alert()

//? Expected output:
//* `❌ ERROR: You forgot to define all options`

alert({
  type: `warning`,
  msg: `Please check file type`,
})

//? Expected output:
//* `⚠️ WARNING: Please check file type`

alert({
  type: `info`,
  msg: `You can check the website for more details`,
})

//? Expected output:
//* `ℹ️ INFO: You can check the website for more details`
