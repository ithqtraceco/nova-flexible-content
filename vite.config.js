import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'resources/js/field.js'),
      name: 'NovaFlexibleContent',
      fileName: (format) => `js/field.js`,
      formats: ['iife'],
    },
    rollupOptions: {
      external: ['vue', 'laravel-nova', '@inertiajs/inertia', '@inertiajs/vue3'],
      output: {
        globals: {
          vue: 'Vue',
          'laravel-nova': 'LaravelNova',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'css/field.css'
          return assetInfo.name
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/application-ithq/vendor/laravel/nova/resources/js'),
      'laravel-nova-ui': path.resolve(__dirname, '/application-ithq/vendor/laravel/nova/resources/ui/components'),
      'nova-mixins': path.resolve(__dirname, '/application-ithq/vendor/laravel/nova/resources/js/mixins'),
    },
  },
})
