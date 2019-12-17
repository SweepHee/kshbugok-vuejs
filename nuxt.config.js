module.exports = {
    head: {
        title : "키즈스테이호텔인부곡",
    },
    modules: [
        "@nuxtjs/axios",
    ],
    buildModules: [
        "@nuxtjs/vuetify",
        '@nuxtjs/moment',
    ],
    moment: {
        locales: ['ko'],
    },
    plugins: [],
    vuetify: {

    },
    build: {
        analyze: true,
        extend(config, { isClient, isServer, isDev }) {
            console.log("webpack", config, isServer, isClient);

            if(isServer && !isDev) {
                config.devtool = 'hidden-source-map';
            }
        },
    },
    server: {
        port: process.env.PORT || 3081,
    }
};