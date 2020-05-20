const purgecss = [
    '@fullhuman/postcss-purgecss',
    {
        content: ['./components/**/*.js'],
        defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
    }
]

module.exports = {
    plugins: [
        'tailwindcss',
        'autoprefixer',
        purgecss
    ]
}