import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: {
    index: 'src/index.ts',
    node: 'src/node.ts',
  },
  format: ['cjs', 'esm'],
  target: 'esnext',
  outDir: 'dist',
  platform: 'neutral',
  splitting: false,
  shims: true,
  treeshake: true,
});
