const yargsConfig = require('./yargs_config')
const handler = require('./handler')

/**
 * @private
 */
const INIT_CONFIG_COMMAND = {
  ...yargsConfig,
  handler
}

module.exports = INIT_CONFIG_COMMAND
