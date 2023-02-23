// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'pathe'

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "./client"),
    "@pages": resolve(__dirname, "./pages"),
    "@server": resolve(__dirname, "./server"),
    'images': resolve(__dirname, './assets/images'),
    'style': resolve(__dirname, './assets/style'),
  },
  srcDir: 'client/',
  build: { transpile: ["echarts"] },
  // runtimeConfig：需要在使用环境变量构建后指定的私有或公共令牌。
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  }
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: 'custom',
  //       path: '*',
  //       component: resolve(__dirname, 'pages/404.vue')
  //     })
  //   }
  // },
  // vite代理方式，nitro 代理都可以成功
  // vite: {
  //   server: {
  //     proxy: {
  //       '/api': {
  //         target: 'http://127.0.0.1:3001/',
  //         // rewrite: (path) => path.replace(/^\/api/, ''),
  //       }
  //     },
  //   }
  // },
  // nitro: {
  //   devProxy: {
  //     "/api": {
  //       target: 'http://127.0.0.1:9090/',
  //       prependPath: true,
  //       changeOrigin: true,
  //     }

  //   }
  // }
})
