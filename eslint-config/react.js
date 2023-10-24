// eslint对照规范 https://bytedance.feishu.cn/docs/doccnBqa2jMNk7fiQ2yu72eIybU#
module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: [
        'react',
        'react-hooks',
    ],
    extends: [
        './base',
    ],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-string-refs': 'error',
        'react/jsx-indent-props': ['error', { 'indentMode': 4, 'ignoreTernaryOperator': true }],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/jsx-tag-spacing': ['error', { 'beforeSelfClosing': 'always', 'beforeClosing': 'never' }],
        'jsx-quotes': ['error', 'prefer-double'],
        'react/jsx-boolean-value': ['error', 'never'],
        'react/react-in-jsx-scope': 'error',
        'react/no-danger-with-children': 'error',
        'react/style-prop-object': 'error',
    }
};
