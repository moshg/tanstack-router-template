import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		plugins: {
			"react-hooks": pluginReactHooks,
		},
		rules: {
			...pluginReactHooks.configs.recommended.rules,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	eslintPluginUnicorn.configs["flat/recommended"],
	{
		rules: {
			"unicorn/no-abusive-eslint-disable": "off",
		},
	},
	pluginReact.configs.flat.recommended,
	pluginReact.configs.flat["jsx-runtime"],
];
