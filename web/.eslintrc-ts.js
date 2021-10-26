module.exports = {
    plugins: ['eslint-plugin-no-null', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'generic',
            },
        ],
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
                overrides: {constructors: 'no-public'},
            },
        ],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
            },
        ],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',
                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',
                    'constructor',
                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',
                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',
                ],
            },
        ],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-function-type': 'off',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/unified-signatures': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'brace-style': ['error', '1tbs'],
        'class-methods-use-this': 'off',
        curly: ['error', 'multi-line'],
        'default-case': 'error',
        eqeqeq: ['error', 'always'],
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-internal-modules': 'off',
        'import/no-unassigned-import': 'off',
        'import/order': 'off',
        'jsdoc/check-alignment': 'off',
        'jsdoc/newline-after-description': 'off',
        'jsdoc/no-types': 'off',
        'linebreak-style': 'off',
        'max-len': 'off',
        'max-lines': 'off',
        'new-parens': 'off',
        'newline-per-chained-call': 'off',
        'no-alert': 'error',
        'no-bitwise': 'error',
        'no-console': 'error',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-empty-character-class': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-semi': 'error',
        'no-ex-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-invalid-this': 'error',
        'no-irregular-whitespace': 'error',
        'no-lone-blocks': 'error',
        'no-magic-numbers': 'off',
        'no-multiple-empty-lines': 'error',
        'no-multi-spaces': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-new-func': 'off',
        'no-new-wrappers': 'error',
        'no-new': 'error',
        'no-null/no-null': 'off',
        'no-param-reassign': 'error',
        'no-plusplus': [
            'off',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-return-await': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-unused-expressions': 'off',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'padding-line-between-statements': [
            'off',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
        'prefer-arrow-callback': 'error',
        'prefer-object-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed'],
        'space-before-function-paren': 'off',
        'space-in-parens': ['error', 'never'],
        'valid-typeof': 'error',
        yoda: 'error',
    },
};