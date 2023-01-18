module.exports = {
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "prettier"
    ],
    rules: {
        "vue/multi-word-component-names": "off",
    },
    env: {
        es2021: true,
    }
}
