const yargsConfig = require('./yargs_config')
const handler = require('./handler')

/**
 * @private
 */
const PRINT_CONFIG_COMMAND = {
  ...yargsConfig,
  handler
}

module.exports = PRINT_CONFIG_COMMAND
