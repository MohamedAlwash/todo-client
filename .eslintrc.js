module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        'quotes': ['error', 'single'],
        'indent': ['error', 4],        
        'eqeqeq': ['warn', 'always', { 'null': 'ignore' }],
        'no-var': ['warn'],
        'sort-imports': ['error'],
        'no-extra-semi': 'off',
        'semi': 'off',
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/no-extra-semi': ['error'],
        '@typescript-eslint/explicit-member-accessibility': ['error'],
        '@typescript-eslint/explicit-function-return-type': ['error']
    }
};