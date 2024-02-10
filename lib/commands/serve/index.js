const yargsConfig = require('./yargs_config')
const handler = require('./handler')

/**
 * @private
 */
const SERVE_COMMAND = {
  ...yargsConfig,
  handler
}

module.exports = SERVE_COMMAND
