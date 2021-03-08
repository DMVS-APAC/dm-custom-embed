const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DelWebpackPlugin = require('del-webpack-plugin');

const PACKAGE = require('./package.json');

// To show version to the script when it's built
const banner = PACKAGE.name + ' v' + PACKAGE.version + ' | ' + PACKAGE.author + ' | Released under the ' + PACKAGE.license + ' license';

const config = {
    entry: {
        "dm-ce": "./src/Entries/dm-custom-embed.ts",
        "dm-amp": "./src/Entries/dm-amp.ts",
        // 'dm-no-cpe': "./src/Entries/dm-no-cpe.ts",
    },
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
        new webpack.BannerPlugin(banner) // Add version on the top position
    ]
}

module.exports = (env, argv) => {
    const dotenv = new Dotenv();
    const isProd = argv.mode === 'production';

    config.plugins.push(dotenv);
    config.output = {
        path: path.resolve(__dirname, 'dist'),
        filename: isProd ? '[name].min.js' : '[name].js',
        chunkFilename: isProd ? '[id].min.chunk.js' : '[id].chunk.js',
    };

    // For more option please visit https://webpack.js.org/configuration/devtool/
    switch (env) {
        case 'dev':
            config.devtool = 'eval';
            break;
        case 'staging':
            config.devtool = 'source-map';
            break;
    }

    if (env === 'dev' || env === 'staging') {

        config.plugins.push(
            new HtmlWebpackPlugin({
                title: 'Dailymotion Custom Embed Video',
                template: 'src/Labs/index.html',
                filename: 'lab/index.html',
                chunks: ['dm-ce'],
                showErrors: !isProd,
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
                filename: 'lab/conditional/index.html',
                chunks: ['dm-ce'],
                showErrors: !isProd,
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
                title: 'Dailymotion Hide Controls When Ad Playing',
                template: 'src/Labs/HideControls/index.html',
                filename: 'lab/hide-controls/index.html',
                chunks: ['dm-ce'],
                showErrors: !isProd,
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
                title: 'Dailymotion Multiple Fallback',
                template: 'src/Labs/MultipleFallback/index.html',
                filename: 'lab/multiple-fallback/index.html',
                chunks: ['dm-ce'],
                showErrors: !isProd,
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

            new HtmlWebpackPlugin({
                title: 'Dailymotion Infinity Scroll Video Embed',
                template: 'src/Labs/InfiniteScroll/index.html',
                filename: 'lab/infinity-scroll/index.html',
                chunks: ['dm-ce'],
                showErrors: !isProd,
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
                title: 'Dailymotion Player AMP',
                template: 'src/AMP/dm-player.html',
                filename: 'lab/dm-player.html',
                chunks: ['dm-amp'],
                showErrors: !isProd,
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
                title: 'Dailymotion AMP Video Embed',
                template: 'src/Labs/AMP/index.html',
                filename: 'lab/amp/index.html',
                excludeChunks: ['dm-ce', 'dm-amp', 'dm-no-cpe'],
                showErrors: !isProd,
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
                filename: 'lab/playlist/index.html',
                chunks: ['dm-ce'],
                showErrors: !isProd,
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
                filename: 'lab/playlist/asiaone.html',
                chunks: ['dm-ce'],
                showErrors: !isProd,
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
                template: 'src/Labs/NoCPE/default/index.html',
                filename: 'lab/no-cpe/index.html',
                chunks: ['dm-no-cpe'],
                showErrors: !isProd,
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
                template: 'src/Labs/NoCPE/no-pip/index.html',
                filename: 'lab/no-cpe/no-pip.html',
                chunks: ['dm-no-cpe'],
                showErrors: !isProd,
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
                template: 'src/Labs/NoCPE/no-scroll-to-play/index.html',
                filename: 'lab/no-cpe/no-scroll-to-play.html',
                chunks: ['dm-no-cpe'],
                showErrors: !isProd,
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
                template: 'src/Labs/NoCPE/scroll-to-pause-play/index.html',
                filename: 'lab/no-cpe/scroll-to-pause-play.html',
                chunks: ['dm-no-cpe'],
                showErrors: !isProd,
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
                template: 'src/Labs/NoCPE/playlist/index.html',
                filename: 'lab/no-cpe/playlist.html',
                chunks: ['dm-no-cpe'],
                showErrors: !isProd,
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
            })
        );
    }

    if (env === 'prod') {
        config.plugins.push(
            new DelWebpackPlugin({
                include: ['**'],
                exclude: [],
                info: true,
                keepGeneratedAssets: true,
                allowExternal: false
            })
        );
    }


    return config;
}
