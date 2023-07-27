import {boot} from 'quasar/wrappers'
import {createI18n} from 'vue-i18n/index'
import messages from 'src/i18n'
import {russianPluralization} from "src/js/Pluralization/RussianPluralization";

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

export default boot(({app}) => {
  const i18n = createI18n({
    locale:'ru',
    messages,
    fallbackLocale: {
      'ru': ['en-US'],
      'ru-RU': ['en-US'],
      'cs-CZ': ['en-US'],
    },
    pluralizationRules: {
      'ru-RU': russianPluralization,
      'ru': russianPluralization,

      'cs-CZ': function (choice) {
        if (choice === 1) {
          return 0
        }
        else if (!isFloat(choice) && 2 <= choice && choice <= 4) {
          return 1
        }
        else if (isFloat(choice) || choice === 10){
          return 2
        }
        else {
          return 3
        }
      }
    }
  })

  // Set i18n instance on app
  app.use(i18n)
})
