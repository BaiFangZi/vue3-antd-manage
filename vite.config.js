import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import' //按需加载样式

// import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'
//  import Components from 'unplugin-vue-components/vite'
//  import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname) // 获取全局变量
  return {
    base: env.VITE_BASE_PATH,
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      vue(),

      styleImport({
        libs: [
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style/index`
            },
          },
        ],
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
      port: 3001, //端口号
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
    clearScreen: false, // vite清屏不清除控制台打印的信息
    // logLevel:'error',
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
        '@': path.resolve(__dirname, 'src'),
      },
    },
    optimizeDeps: {
      include: ['vue-i18n'],
    },
  }
})
