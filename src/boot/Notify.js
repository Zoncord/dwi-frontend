import {boot} from 'quasar/wrappers'
import {Notify} from 'quasar'

export default boot(async ({app}) => {
  app.config.globalProperties.$notifyError = (message) => {

    Notify.create({
      message: message,
      type: 'negative',
    })
  }
})
