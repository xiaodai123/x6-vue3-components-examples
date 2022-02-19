const path = require('path');
module.exports = {
    configureWebpack: {
        module:{
            rules:[{
                test:/\.mjs$/,
                use: ['babel-loader'], 
                include: /node_modules/,
                type: "javascript/auto"
            }]
        },
        resolve: {
            symlinks: false,
            alias: {
                vue: path.resolve('./node_modules/vue')
            }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                // 这个是绝对路径,不能使用 alias 中配置的别名路径，如@表示的src
                path.resolve(__dirname, './src/components/X6UI/style/theme/variables.scss')
            ]
        }
    }
}