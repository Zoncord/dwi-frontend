import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n/index'
import messages from 'src/i18n'
import { Quasar } from 'quasar'


export default boot(({ app }) => {
  const i18n = createI18n({
    locale: Quasar.lang.getLocale(),
    messages
  })

  // Set i18n instance on app
  app.use(i18n)
})
