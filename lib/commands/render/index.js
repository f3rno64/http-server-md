const yargsConfig = require('./yargs_config')
const handler = require('./handler')

/**
 * @private
 */
const RENDER_COMMAND = {
  ...yargsConfig,
  handler
}

module.exports = RENDER_COMMAND
