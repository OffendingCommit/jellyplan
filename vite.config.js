/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import resolve from '@rollup/plugin-node-resolve';
import { EsLinter, linterPlugin, TypeScriptLinter } from 'vite-plugin-linter';

export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    { resolve: { alias: { './runtimeConfig': './runtimeConfig.browser' } } },
    {
      ...resolve({
        preferBuiltins: false,
        browser: true,
      }),
      enforce: 'pre',
      apply: 'build',
    },
    linterPlugin({
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      linters: [new EsLinter({ configEnv: configEnv }), new TypeScriptLinter()],
    }),
  ],
  build: {
    outDir: 'build',
  },
}));
