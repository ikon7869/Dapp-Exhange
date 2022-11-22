require("babel-register");
require("babel-polyfill");

module.export = {
    contracts_directory: './src/contracts/',
    contracts_build_directory: './src/truffle_abis/',
    network: {
        development: {
            host: '127.0.0.1:',
            ports: '7545',
            network_id: '*' // Any network
        },
    },
    
    compilers: {
        solc: {
            version: '^0.5.0',
            optimizer: {
                enabled: true,
                runs: 200
            },
        }
    }
}