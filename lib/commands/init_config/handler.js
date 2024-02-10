const getConfig = require('../../config')

/**
 * @private
 */
const INIT_CONFIG_HANDLER = async (argv) => {
  const { minify, indent, path } = argv
  const config = await getConfig({ basePath: path })

  // eslint-disable-next-line no-unused-vars
  const { state, ...userConfig } = config
  const json = JSON.stringify(userConfig, null, minify ? 0 : indent)

  // eslint-disable-next-line no-console
  console.log(json)
}

module.exports = INIT_CONFIG_HANDLER
