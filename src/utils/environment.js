export default {
  isDev: process.env.NODE_ENV === "development",
  isTest: process.env.NODE_ENV === "test",
  isProd: process.env.NODE_ENV === "production",
  port: process.env.PORT || 3000,
}
