// eslint-why ctx assign

const render = require('../render')

/**
 * @private
 */
const serveMD = async (srcPath, config, ctx) => {
  ctx.type = 'html'
  ctx.body = await render(srcPath, config, ctx)
}

module.exports = serveMD
