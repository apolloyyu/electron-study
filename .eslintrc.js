module.exports = {
    "extends": [
        "./eslint-config/react"
    ],
    "parserOptions": {
        "project": "./tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    root: true,
    ignorePatterns: ['**/dist/**/*'],
}
