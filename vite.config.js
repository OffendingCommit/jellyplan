import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';
import legacy from '@vitejs/plugin-legacy';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [
      eslint({
        fix: true,
      }),
      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
      react({
        babel: {
          babelrc: false,
          configFile: false,
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      }),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
    ],
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis', //<-- AWS SDK
        },
        plugins: [NodeGlobalsPolyfillPlugin({ buffer: true })],
      },
    },
    define: {
      'process.env.NODE_ENV': `"${mode}"`,
    },
    build: {
      outDir: 'build',
      rollupOptions: {
        plugins: [
          // Enable rollup polyfills plugin
          // used during production bundling
          nodePolyfills(),
        ],
      },
    },
    resolve: {
      alias: [
        {
          find: './runtimeConfig',
          replacement: './runtimeConfig.browser',
        },
      ],
    },
  });
};
