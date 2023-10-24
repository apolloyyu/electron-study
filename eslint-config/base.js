// eslint对照规范 https://bytedance.feishu.cn/docs/doccnBqa2jMNk7fiQ2yu72eIybU#
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        // 基础
        'no-mixed-spaces-and-tabs': 'error',
        'indent': ['error', 4, { 'SwitchCase': 1 }],

        // 空格
        'space-infix-ops': ['error'],
        'space-unary-ops': [ 2, { 'words': true, 'nonwords': false }],
        'space-before-blocks': ['error', 'always'],
        'keyword-spacing': ['error', {
            'before': false,
            'after': true,
            'overrides': {
                'from': { 'before': true },
                'else': { 'before': true },
                'return': { 'before': true },
                'catch': { 'before': true },
                'extends': { 'before': true },
                'as': { 'before': true },
                'finally': { 'before': true },
                'in': { 'before': true },
                'instanceof': { 'before': true },
                'of': { 'before': true },
            }
        }],
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
        'space-before-function-paren': ['error', 'always'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'semi-spacing': ['error', { 'before': false, 'after': true }],
        'space-in-parens': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'generator-star-spacing': ['error', 'after'],
        'object-curly-spacing': ['error', 'always'],
        'no-multi-spaces': ['error'],
        'arrow-spacing': ['error', { 'before': true, 'after': true }],
        '@typescript-eslint/type-annotation-spacing': ['error', {
            'before': false,
            'after': true,
            'overrides': {
                'arrow': { 'before': true, 'after': true },
            },
        }],

        // 换行
        'operator-linebreak': ['error', 'before'],
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'multiline-ternary': ['error', 'always-multiline'],

        // 命名
        '@typescript-eslint/naming-convention': [
            'error',
            {
                'selector': 'default',
                'format': ['camelCase'],
                'leadingUnderscore': 'allowSingleOrDouble',
                'trailingUnderscore': 'allowSingleOrDouble',
            },
            {
                'selector': 'typeLike',
                'format': ['PascalCase'],
            },
            {
                'selector': 'variable',
                'format': ['camelCase', 'PascalCase']
            },
            {
                'selector': 'variable',
                'modifiers': ['const'],
                'format': ['UPPER_CASE', 'camelCase', 'PascalCase']
            },
            {
                'selector': 'objectLiteralProperty',
                'format': ['UPPER_CASE', 'camelCase', 'PascalCase'],
                'leadingUnderscore': 'allowSingleOrDouble',
                'trailingUnderscore': 'allowSingleOrDouble',
            },
            {
                'selector': 'interface',
                'format': ['PascalCase'],
                'custom': {
                    'regex': '^I[A-Z]',
                    'match': false,
                }
            },
            {
                'selector': 'enumMember',
                'format': ['UPPER_CASE']
            }
        ],

        // 分号
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',

        // 括号
        'wrap-iife': ['error', 'inside'],
        'curly': ['error', 'all'],

        // 变量
        'no-var': 'error',
        '@typescript-eslint/no-use-before-define': ['error', {
            'functions': false
        }],
        'one-var': ['error', 'never'],
        'no-multi-assign': 'error',
        'no-undef-init': 'error',

        // 条件
        'eqeqeq': ['error', 'always'],
        'no-fallthrough': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

        // 字符串
        'quotes': ['error', 'single'],
        'no-multi-str': 'error',

        // 对象、数组、集合
        'no-new-object': 'error',
        'no-array-constructor': 'error',

        // 类
        'no-useless-constructor': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'error',

        // 其他
        'no-with': 'error',
        'no-throw-literal': 'error',
        'no-empty': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/return-await': 'error' ,

        // 类型
        '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as' }],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    }
};
