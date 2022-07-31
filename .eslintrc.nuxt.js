/**
 * ESlint configuration (nuxtjs)
 * @version 1.0.0
 * @author Jesus Barrientos
 */

module.exports = {
    root : true,
    env  : {
        browser : true,
        node    : true,
        jest    : true
    },

    extends: [
        'plugin:nuxt/recommended',
        'plugin:vue/recommended',
        'plugin:jest/recommended',
        'plugin:security/recommended',
    ],

    plugins: [],

    // add your custom rules here
    rules: {

        // Global

        'dot-notation'                      : 'off',
        'require-await'                     : 'off',
        'no-async-promise-executor'         : 'off',
        'camelcase'                         : 'off',
        'import/no-relative-parent-imports' : 'off',
        'no-fallthrough'                    : 'off',
        'prefer-destructuring'              : 'off',
        'max-statements-per-line'           : 'off',

        'prefer-const'                 : 'error',
        'eol-last'                     : [ 'error', 'always' ],
        'import/no-named-as-default'   : 0,
        'no-console'                   : process.env.NODE_ENV === 'production' ? [ 'error', { allow: [ 'warn', 'error' ] }] : 'off',
        'no-debugger'                  : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'prefer-promise-reject-errors' : [ 'error', { allowEmptyReject: true }],
        'curly'                        : [ 'error', 'multi-or-nest', 'consistent' ],
        'spaced-comment'               : [ 'error', 'always' ],
        'comma-dangle'                 : [ 'error', 'always-multiline' ],
        'quote-props'                  : [ 'error', 'consistent-as-needed', { keywords: false }],
        'brace-style'                  : [ 'error', 'stroustrup', { allowSingleLine: true }],
        'indent'                       : [ 'error', 4, {
            SwitchCase               : 1,
            VariableDeclarator       : 'first',
            MemberExpression         : 1,
            FunctionDeclaration      : { parameters: 'first' },
            FunctionExpression       : { parameters: 'first' },
            CallExpression           : { arguments: 'first' },
            ArrayExpression          : 'first',
            ObjectExpression         : 'first',
            ImportDeclaration        : 'first',
            flatTernaryExpressions   : false,
            offsetTernaryExpressions : false,
            ignoreComments           : false,
        }],

        'no-trailing-spaces': [ 'error', {
            skipBlankLines: true,
        }],

        'eqeqeq'                  : [ 'error', 'always', { null: 'ignore' }],
        'func-call-spacing'       : [ 'error', 'never' ],
        'object-property-newline' : [ 'error', {
            allowAllPropertiesOnSameLine: true,
        }],

        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: [ 'return', 'break', 'continue', 'export', 'try', 'do', 'while' ] },
            { blankLine: 'any', prev: 'case', next: [ 'case', 'default' ] },
            { blankLine: 'always', prev: 'directive', next: '*' },
            { blankLine: 'never', prev: 'directive', next: 'directive' },
            { blankLine: 'always', prev: 'import', next: '*' },
            { blankLine: 'any', prev: 'import', next: 'import' },
        ],

        'array-bracket-spacing': [ 'error', 'always', {
            objectsInArrays : false,
            arraysInArrays  : true,
        }],

        'object-curly-spacing' : [ 'error', 'always' ],
        'space-in-parens'      : [ 'error', 'never', {
            exceptions: [ '[]', '{}', '()' ],
        }],

        'comma-spacing': [ 'error', {
            before : false,
            after  : true,
        }],

        'keyword-spacing': [ 'error', {
            before: true,
        }],

        'no-duplicate-imports' : 'error',
        'key-spacing'          : [ 'error', {
            singleLine: {
                beforeColon : false,
                afterColon  : true,
            },
            align: {
                beforeColon : true,
                afterColon  : true,
                on          : "colon",
            },
        }],

        'switch-colon-spacing'    : [ 'error', { after: true, before: false }],
        'space-before-blocks'     : 'error',
        'no-multiple-empty-lines' : [ 'error', { max: 2, maxEOF: 0, maxBOF: 0 }],
        'padded-blocks'           : [ 'error', 'never', { allowSingleLineBlocks: true }],
        'semi'                    : [ 'error', 'never' ],

        // Nuxt

        'nuxt/no-cjs-in-config': 'off',

        // Vue

        'vue/multi-word-component-names' : 'off',
        'vue/no-unused-components'       : 'off',
        'vue/require-v-for-key'          : 'off',
        'vue/valid-v-for'                : 'off',
        'vue/require-prop-types'         : 'off',
        'vue/script-setup-uses-vars'     : 'off',

        'vue/script-indent': [ 'error', 4, {
            baseIndent : 0,
            switchCase : 1,
            ignores    : [],
        }],

        'vue/html-indent': [ 'error', 4, {
            attribute                 : 1,
            baseIndent                : 1,
            closeBracket              : 0,
            alignAttributesVertically : true,
            ignores                   : [],
        }],

        'vue/multiline-html-element-content-newline': [ 'warn', {
            ignoreWhenEmpty : true,
            allowEmptyLines : true,
        }],

        'vue/no-use-v-if-with-v-for': [ 'error', {
            allowUsingIterationVar: true,
        }],

        'vue/max-attributes-per-line': [ 'error', {
            singleline: {
                max: 3,
            },
            multiline: {
                max: 3,
            },
        }],

        'vue/first-attribute-linebreak': [ 'error', {
            singleline : 'ignore',
            multiline  : 'below',
        }],

        'vue/valid-v-slot': [ 'error', {
            allowModifiers: true,
        }],
    },
}
