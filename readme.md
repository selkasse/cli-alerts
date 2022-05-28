Cross platform CLI Alerts with colors & colored symbols for success, info, warning, error.
<br>
Work on macOS, Linux, and Windows.

</h4>

<br>

# cli-alerts

## Install

```sh
npm install cli-alerts
```

<br>

## Usage

```js
const alert = require('cli-alerts')

// Provide the type, msg, and name options.
alert({ type: `success`, msg: `Everything finished!` })
// Prints: ✔ SUCCESS Everything finished!

alert({ type: `success`, msg: `Everything finished!`, name: `DONE` })
// Prints: ✔ DONE Everything finished!

alert({ type: `warning`, msg: `You didn't add something!` })
// Prints: ⚠ WARNING You didn't add something!

alert({ type: `info`, msg: `Awais is awesome!` })
// Prints: ℹ INFO Awais is awesome!

alert({ type: `error`, msg: `Something went wrong!` })
// Prints: ✖ ERROR Something went wrong!
```

<br />

## API

### alert(options)

#### ❯ options

Type: `object`<br>
Default: `{}`

You can specify the options below.

##### ❯ type

Type: `string`<br>
Default: `error`

##### ❯ msg

Type: `string`<br>
Default: `You forgot to define all options.` (Error message)

##### ❯ name

Type: `string`<br>
Default: `''` (Empty string)

<br>

<small>**KEY**: `📦 NEW`, `👌 IMPROVE`, `🐛 FIX`, `📖 DOC`, `🚀 RELEASE`, and `🤖 TEST`

> _I use [Emoji-log](https://github.com/ahmadawais/Emoji-Log), you should try it and simplify your git commits._

</small>

<br>

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.
