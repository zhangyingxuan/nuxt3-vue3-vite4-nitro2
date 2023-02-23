// 用于公开可在构建时确定的公共变量。与runtimeConfig选项相反，这些不能使用环境变量覆盖。
// 在构建时确定的公共令牌、网站配置（例如主题变体、标题）和任何不敏感的项目配置。
export default defineAppConfig({
  title: 'Hello Nuxt',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000'
    }
  }
})