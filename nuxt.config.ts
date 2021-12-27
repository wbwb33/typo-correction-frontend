import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  srcDir: 'src/',
  typescript: {
    strict: true
  },
  privateRuntimeConfig: {
    TYPO_BE_URL: process.env.TYPO_BE_URL,
    TOKEN_REQUEST: process.env.TOKEN_REQUEST
  }
})
