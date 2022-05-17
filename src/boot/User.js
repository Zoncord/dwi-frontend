import {boot} from 'quasar/wrappers'

export default boot(async ({app, router, store}) => {
  let axios = app.config.globalProperties.$axios
  let enterRedirectLink = `${process.env.ZONCORD_API_URL}o/authorize/?response_type=code&client_id=Art6vlzoqZKTolSIwqhO3vjlx01zung3OkT4ZXpH&redirect_uri=${location.protocol + '//' + location.host}/auth/`
  app.config.globalProperties.$enterRedirect = enterRedirectLink
  console.log(router)
  await axios.get(process.env.DWI_API_URL + 'users/profile/', {
    headers: {
      Authorization: `Token ${store.getters['mainStore/token']}`
    }
  }).then(async (profileRes) => {
    console.log(profileRes.data)
    await axios.get(profileRes.data.url, {
      headers: {
        Authorization: `Token ${store.getters['mainStore/token']}`
      }
    }).then(res => {
      app.config.globalProperties.$userName = res.data.general_user_information.first_name + ' ' + res.data.general_user_information.last_name
      app.config.globalProperties.$userImage = res.data.general_user_information.img
      app.config.globalProperties.$userId = res.data.id
      app.config.globalProperties.$userUrl = res.data.url
      app.config.globalProperties.$userDescription = res.data.description
      app.config.globalProperties.$userFollowersCount = res.data.followers_count
    })
  })
    .catch(err => {
      console.log(err)
      if (err.response.status === 401 && window.location.pathname !== '/auth/' && window.location.pathname !== '/auth') {
        window.location.href = enterRedirectLink
      }
    })


  app.config.globalProperties.$getUserData = async (userLink) => {
    return await axios.get(userLink).then((res) => {
      return res
    })
  }
})
