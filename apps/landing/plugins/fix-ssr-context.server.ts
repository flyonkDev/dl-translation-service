/**
 * Compatibility shim: @nuxt/nitro-server@4.2.2 initialises ssrContext._payloadReducers
 * but nuxt@4.4.2 reads/writes ssrContext["~payloadReducers"].
 * This plugin bridges the two before the revive-payload:server plugin runs.
 */
export default defineNuxtPlugin({
  name: 'fix-ssr-context',
  enforce: 'pre',
  setup(nuxtApp) {
    if (import.meta.server && nuxtApp.ssrContext) {
      const ctx = nuxtApp.ssrContext as Record<string, unknown>
      if (!ctx['~payloadReducers']) {
        ctx['~payloadReducers'] = ctx['_payloadReducers'] ?? Object.create(null)
      }
    }
  },
})
