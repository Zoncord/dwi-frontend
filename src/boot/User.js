import {boot} from 'quasar/wrappers'
import User from "src/js/Classes/User";

export default boot(async ({app, router, store}) => {
  let axios = app.config.globalProperties.$axios
  let enterRedirectLink = `${process.env.ZONCORD_API_URL}o/authorize/?response_type=code&client_id=cTGQ0iGxACKy6VXtV9nvHLldfSQtFl1OXiwPgbTR&redirect_uri=https://dwi.zoncord.tech/auth/`
  app.config.globalProperties.$enterRedirect = enterRedirectLink
  await axios.get(process.env.DWI_API_URL + 'users/profile/', {
    headers: {
      Authorization: `Token ${store.getters['mainStore/token']}`
    }
  }).then(async (profileRes) => {
    await axios.get(profileRes.data.url, {
      headers: {
        Authorization: `Token ${store.getters['mainStore/token']}`
      }
    }).then(res => {
      app.config.globalProperties.$user = new User(res.data)
    })
  })
    .catch(err => {
      if (err.response && err.response.status === 401 && window.location.pathname !== '/auth/' && window.location.pathname !== '/auth') {
        window.location.href = enterRedirectLink
      }
    })

})
