import {boot} from 'quasar/wrappers'
import {createI18n} from 'vue-i18n/index'
import messages from 'src/i18n'
import {Quasar} from 'quasar'

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

export default boot(({app}) => {
  const i18n = createI18n({
    locale: Quasar.lang.getLocale(),
    messages,
    pluralizationRules: {
      'ru-RU': function (choice, choicesLength) {
        if (choice === 0) {
          return 0;
        }

        const teen = choice > 10 && choice < 20;
        const endsWithOne = choice % 10 === 1;

        if (choicesLength < 4) {
          return (!teen && endsWithOne) ? 1 : 2;
        }
        if (!teen && endsWithOne) {
          return 1;
        }
        if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
          return 2;
        }

        return (choicesLength < 4) ? 2 : 3;
      },

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
