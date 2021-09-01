import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname) // 获取全局变量
  return {
    plugins: [
      vue(),
      ViteComponents({
        customComponentResolvers: [AntDesignVueResolver()],
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            echarts: ['echarts'],
          },
        },
      },
    },
    server: {
      //本地服务
      port: 3000, //端口号
      open: true, //启动时是否自动打开
      proxy: {
        '/vue-manage': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          pathRewrite: {
            '^/vue-manage': '/vue-manage',
          },
          logLevel: 'debug',
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})
