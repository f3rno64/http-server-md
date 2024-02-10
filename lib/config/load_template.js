const { requireModule } = require('serve-markdown-it-lib')

/**
 * @private
 */
const loadTemplate = async (config) => {
  const { template } = config
  const { name: templateName, config: templateConfig } = template
  const templateModulePath = await requireModule(templateName, config, false)

  // eslint-why dynamic require.

  // eslint-disable-next-line import/no-dynamic-require
  const templateModule = require(templateModulePath)
  const templateInstance = await templateModule(templateConfig)
  const { config: finalTemplateConfig } = templateInstance

  return {
    ...config,

    template: {
      name: templateName,
      config: finalTemplateConfig
    },

    state: {
      ...(config.state || {}),

      templateModulePath,
      template: templateInstance,
      templateConfig: finalTemplateConfig
    }
  }
}

module.exports = loadTemplate
