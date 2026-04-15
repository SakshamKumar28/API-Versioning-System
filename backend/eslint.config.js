export default [
	{
		ignores: ["node_modules/**", "coverage/**"],
	},
	{
		files: ["**/*.js"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				process: "readonly",
				console: "readonly",
				setTimeout: "readonly",
				clearTimeout: "readonly",
			},
		},
		rules: {
			"no-undef": "error",
			"no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
		},
	},
];
