module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:3010',
                ws: true,
                secure: false
            }
        }
    }
}