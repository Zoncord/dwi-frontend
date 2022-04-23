import {boot} from 'quasar/wrappers'

export default boot(async ({app}) => {
  app.config.globalProperties.$userName = 'Michal Landrover'
  app.config.globalProperties.$userImageUrl = ''
  app.config.globalProperties.$userId = ''
})
