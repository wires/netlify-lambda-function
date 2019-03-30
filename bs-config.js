let proxyMiddleware = require('http-proxy-middleware')
let fallbackMiddleware = require('connect-history-api-fallback')

module.exports = {
    server: {
        baseDir: "public",
        middleware: {
            1: proxyMiddleware('/.netlify', {
                target: 'http://localhost:9000/',
                // for vhosted sites, changes host header to match to target's host
                changeOrigin: true
            }),
            2: fallbackMiddleware({
                index: '/index.html', verbose: true
            })
        }
    },
    port: 40404,
    files: ["public/**/*.{html,htm,css,js}"]
}

// {
//     "proxy": "http://localhost:9000",
// module.exports = {
//     "port": 40404,
//     "files": ["./public/**/*.{html,htm,css,js}"],
//     "server": { "baseDir": "./public" }
// }