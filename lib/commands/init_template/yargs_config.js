const INIT_TEMPLATE_YARGS_CONFIG = {
  command: 'init-template <name>',
  describe: 'Initialize a new httpmd template repo',
  builder: {
    name: {
      description: 'Template name, prefixed with "http-server-md-template-"',
      demandOption: true,
      type: 'string'
    }
  }
}

module.exports = INIT_TEMPLATE_YARGS_CONFIG
