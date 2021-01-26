// figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
    // return prod set of keys
    module.exports = require('./prod')
} else {
    // return dev keys
    module.exports = require('./dev.js')
    // imports in dev keys 'require'
    // exports them back out - module.exports
}



// (process.env.NODE_ENV === 'production') ? module.exports = require('./prod') : module.exports = require('./dev.js')