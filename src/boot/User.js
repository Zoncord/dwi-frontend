import {boot} from 'quasar/wrappers'

export default boot(async ({app, router, store}) => {
  let axios = app.config.globalProperties.$axios
  console.log(store.getters['mainStore/token'])
  await axios.get(process.env.DWI_API_URL + 'users/profile/', {
    headers: {
      Authorization: `Token ${store.getters['mainStore/token']}`
    }
  }).then((res) => {
    console.log(res)
    app.config.globalProperties.$userName = res.data.user_first_name + ' ' + res.data.user_last_name
    app.config.globalProperties.$userImageUrl = res.data.image
    app.config.globalProperties.$userId = res.data.id
    app.config.globalProperties.$userDescription = res.data.description
    app.config.globalProperties.$userFollowersCount = res.data.followers_count
    app.config.globalProperties.$userSubsCount = res.data.count_followers
    // app.config.globalProperties.$userToken = res.data.token

  }).catch(err => {
    // if (err.response.status === 403){
    //   window.location.href='https://zoncord.tech/o/authorize/?response_type=code&client_id=Art6vlzoqZKTolSIwqhO3vjlx01zung3OkT4ZXpH&redirect_uri=https://dwi.zoncord.tech/auth'
    // }
  })


  app.config.globalProperties.$getUserData = async (userLink) => {
    return await axios.get(userLink).then((res) => {return res})
  }
})
