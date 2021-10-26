module.exports = {
    root: true,
    ignorePatterns: ['projects/**/*'],
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                project: [__dirname + '/tsconfig.json'],
                createDefaultProgram: true,
            },
            extends: ['plugin:@angular-eslint/template/process-inline-templates', './.eslintrc-ts.js'],
        },
        {
            files: ['*.html'],
            extends: ['plugin:@angular-eslint/template/recommended'],
        },
    ],
};
