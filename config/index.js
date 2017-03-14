var config = {
    local: {
        mode: 'local',
        port: 3300
    },
    staging: {
        mode: 'staging',
        port: 4300
    },
    production: {
        mode: 'production',
        port: 5300
    }
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}