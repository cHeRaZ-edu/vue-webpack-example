module.exports = (ctx) => ({
    map: ctx.options.map,
    parser: false, // 'sugarss' esta deshatbilitado para trabajar con sass de forma externa 
    plugins: {
        autoprefixer: true,
        cssnano: { "preset" : "default" } //ctx.env === 'production' ? { "preset" : "default"} : false,
    },
})