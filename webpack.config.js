const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DelWebpackPlugin = require('del-webpack-plugin');

module.exports = (env, options) => {
    const dotenv = new Dotenv();
    const isProd = options.mode === 'production';

    return {
        entry: {
            "dm-ce": "./src/Entries/dm-custom-embed.ts",
            "dm-amp": "./src/Entries/dm-amp.ts",
            // "dm-fia": "./"
            'dm-no-cpe': "./src/Entries/dm-no-cpe.ts",
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProd ? '[name].min.js' : '[name].js',
            chunkFilename: isProd ? '[id].min.chunk.js' : '[id].chunk.js',
        },
        devtool: 'source-map',
        optimization: {
            usedExports: true
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.((c|sa|sc)ss)$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                        'postcss-loader',
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            /**
             *  This is a labs part to demo to partner
             *
             */
            new HtmlWebpackPlugin({
                title: 'Dailymotion Custom Embed Video',
                template: 'src/Labs/index.html',
                filename: 'index.html',
                chunks: ['dm-ce'],
                showErrors: isProd ? false : true,
                minify: isProd ? {
                    html5: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: false,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
                } : false,
                hash: false
            }),
            new HtmlWebpackPlugin({
                title: 'Dailymotion Custom Embed Video',
                template: 'src/Labs/ConditionalPlayer/index.html',
                filename: 'conditional/index.html',
                chunks: ['dm-ce'],
                showErrors: isProd ? false : true,
                minify: isProd ? {
                    html5: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: false,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
                } : false,
                hash: false
            }),
            // new HtmlWebpackPlugin({
            //     title: 'Dailymotion Multiple Video Embed',
            //     template: 'src/entries/multiple/index.html',
            //     filename: 'multiple/index.html',
            //     chunks: ['dm-ce'],
            //     showErrors: isProd ? false : true,
            //     minify: isProd ? {
            //         html5: true,
            //         collapseWhitespace: true,
            //         minifyCSS: true,
            //         minifyJS: true,
            //         minifyURLs: false,
            //         removeAttributeQuotes: true,
            //         removeComments: true,
            //         removeEmptyAttributes: true,
            //         removeOptionalTags: true,
            //         removeRedundantAttributes: true,
            //         removeScriptTypeAttributes: true,
            //         removeStyleLinkTypeAttributes: true,
            //         useShortDoctype: true
            //     } : false,
            //     hash: false
            // }),
            // new HtmlWebpackPlugin({
            //     title: 'Dailymotion Infinity Scroll Video Embed',
            //     template: 'src/entries/infinity-scroll/index.html',
            //     filename: 'infinity-scroll/index.html',
            //     chunks: ['dm-ce'],
            //     showErrors: isProd ? false : true,
            //     minify: isProd ? {
            //         html5: true,
            //         collapseWhitespace: true,
            //         minifyCSS: true,
            //         minifyJS: true,
            //         minifyURLs: false,
            //         removeAttributeQuotes: true,
            //         removeComments: true,
            //         removeEmptyAttributes: true,
            //         removeOptionalTags: true,
            //         removeRedundantAttributes: true,
            //         removeScriptTypeAttributes: true,
            //         removeStyleLinkTypeAttributes: true,
            //         useShortDoctype: true
            //     } : false,
            //     hash: false
            // }),
            // new HtmlWebpackPlugin({
            //     title: 'Dailymotion Player AMP',
            //     template: 'src/entries/dm-player.html',
            //     filename: 'dm-player.html',
            //     chunks: ['dm-amp'],
            //     showErrors: isProd ? false : true,
            //     minify: isProd ? {
            //         html5: true,
            //         collapseWhitespace: true,
            //         minifyCSS: true,
            //         minifyJS: true,
            //         minifyURLs: false,
            //         removeAttributeQuotes: true,
            //         removeComments: true,
            //         removeEmptyAttributes: true,
            //         removeOptionalTags: true,
            //         removeRedundantAttributes: true,
            //         removeScriptTypeAttributes: true,
            //         removeStyleLinkTypeAttributes: true,
            //         useShortDoctype: true
            //     } : false,
            //     hash: false
            // }),
            // new HtmlWebpackPlugin({
            //     title: 'Dailymotion AMP Video Embed',
            //     template: 'src/entries/amp/index.html',
            //     filename: 'amp/index.html',
            //     excludeChunks: ['dm-ce', 'dm-amp', 'dm-no-cpe'],
            //     showErrors: isProd ? false : true,
            //     minify: isProd ? {
            //         html5: true,
            //         collapseWhitespace: true,
            //         minifyCSS: true,
            //         minifyJS: true,
            //         minifyURLs: false,
            //         removeAttributeQuotes: true,
            //         removeComments: true,
            //         removeEmptyAttributes: true,
            //         removeOptionalTags: true,
            //         removeRedundantAttributes: true,
            //         removeScriptTypeAttributes: true,
            //         removeStyleLinkTypeAttributes: true,
            //         useShortDoctype: true
            //     } : false,
            //     hash: false
            // }),
            // new HtmlWebpackPlugin({
            //     title: 'Dailymotion private video',
            //     template: 'src/entries/private-video/index.html',
            //     filename: 'private-video/index.html',
            //     chunks: ['dm-ce'],
            //     showErrors: isProd ? false : true,
            //     minify: isProd ? {
            //         html5: true,
            //         collapseWhitespace: true,
            //         minifyCSS: true,
            //         minifyJS: true,
            //         minifyURLs: false,
            //         removeAttributeQuotes: true,
            //         removeComments: true,
            //         removeEmptyAttributes: true,
            //         removeOptionalTags: true,
            //         removeRedundantAttributes: true,
            //         removeScriptTypeAttributes: true,
            //         removeStyleLinkTypeAttributes: true,
            //         useShortDoctype: true
            //     } : false,
            //     hash: false
            // }),
            new HtmlWebpackPlugin({
                title: 'Dailymotion Video with Playlist out the player',
                template: 'src/Labs/Playlist/index.html',
                filename: 'playlist/index.html',
                chunks: ['dm-ce'],
                showErrors: isProd ? false : true,
                minify: isProd ? {
                    html5: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: false,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
                } : false,
                hash: false
            }),
            new HtmlWebpackPlugin({
                title: 'Dailymotion Video with Playlist out the player',
                template: 'src/Labs/Playlist/asiaone.html',
                filename: 'playlist/asiaone.html',
                chunks: ['dm-ce'],
                showErrors: isProd ? false : true,
                minify: isProd ? {
                    html5: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: false,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
                } : false,
                hash: false
            }),
            new HtmlWebpackPlugin({
                title: 'Dailymotion No CPE Default Embed',
                template: 'src/Labs/NoCpe/default/index.html',
                filename: 'no-cpe/index.html',
                chunks: ['dm-no-cpe'],
                showErrors: isProd ? false : true,
                minify: isProd ? {
                    html5: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: false,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
                } : false,
                hash: false
            }),
            new HtmlWebpackPlugin({
                title: 'Dailymotion No CPE Embed No PiP',
                template: 'src/Labs/NoCpe/no-pip/index.html',
                filename: 'no-cpe/no-pip.html',
                chunks: ['dm-no-cpe'],
                showErrors: isProd ? false : true,
                minify: isProd ? {
                    html5: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: false,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
                } : false,
                hash: false
            }),
            new HtmlWebpackPlugin({
                title: 'Dailymotion No CPE Embed No Scroll To Play',
                template: 'src/Labs/NoCpe/no-scroll-to-play/index.html',
                filename: 'no-cpe/no-scroll-to-play.html',
                chunks: ['dm-no-cpe'],
                showErrors: isProd ? false : true,
                minify: isProd ? {
                    html5: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: false,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
                } : false,
                hash: false
            }),
            new HtmlWebpackPlugin({
                title: 'Dailymotion No CPE Embed Scroll To Play and Scroll To Pause',
                template: 'src/Labs/NoCpe/scroll-to-pause-play/index.html',
                filename: 'no-cpe/scroll-to-pause-play.html',
                chunks: ['dm-no-cpe'],
                showErrors: isProd ? false : true,
                minify: isProd ? {
                    html5: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: false,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
                } : false,
                hash: false
            }),
            new HtmlWebpackPlugin({
                title: 'Dailymotion No CPE Embed With Playlist',
                template: 'src/Labs/NoCpe/playlist/index.html',
                filename: 'no-cpe/playlist.html',
                chunks: ['dm-no-cpe'],
                showErrors: isProd ? false : true,
                minify: isProd ? {
                    html5: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: false,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
                } : false,
                hash: false
            }),
            dotenv
        ]
    }
}