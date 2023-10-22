exports.config = {
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json',
        },
    },
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: {
        chrome1: {
            capabilities: {
                browserName: 'chrome'
            }
        },
        chrome2: {
            capabilities: {
                browserName: 'chrome'
            }
        }
    },
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://haung2310-1.cybozu-dev.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: async () => {
        global.browser1 = browser.getInstance('chrome1');
        global.browser2 = browser.getInstance('chrome2');
    },
}
