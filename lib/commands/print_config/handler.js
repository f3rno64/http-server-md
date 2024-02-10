const chromafi = require('chromafi')

/**
 * @private
 */
const PRINT_CONFIG_HANDLER = (argv) => {
  const { indent, minify, bw, config } = argv

  // eslint-disable-next-line no-unused-vars
  const { state, ...logConfig } = config

  if (minify) {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(logConfig))
  } else if (bw) {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(logConfig, null, minify ? 0 : indent))
  } else {
    // eslint-disable-next-line no-console
    console.log(
      chromafi(logConfig, {
        lang: 'json',
        lineNumbers: true,
        tabsToSpaces: indent,
        consoleTabWidth: indent
      })
    )
  }
}

module.exports = PRINT_CONFIG_HANDLER
