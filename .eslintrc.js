module.exports = {
    'env': {
        'node': true,
        'commonjs': true,
        'es2021': true
    },
    'plugins' : [
        '@stylistic/js'
    ],
    'extends': 'eslint:recommended',
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        '@stylistic/js/indent': [
            'error',
            4
        ],
        'linebreak-style': 0,
        '@stylistic/js/quotes': [
            'error',
            'single'
        ],
        '@stylistic/js/semi': [
            'error',
            'never'
        ],
        'eqeqeq' : 'error',
        'no-trailing-spaces': 'error',
        'arrow-spacing': [
            'error', { 'before': true, 'after': true}
        ],
        'no-console': 0
    },
}
