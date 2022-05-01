import {boot} from 'quasar/wrappers'

export default boot(async ({app}) => {
  let axios = app.config.globalProperties.$axios
  await axios.get(process.env.DWI_API_URL + 'users/profile/').then((res) => {
    console.log(res)
    app.config.globalProperties.$userName = res.data.user_first_name + ' ' + res.data.user_last_name
    app.config.globalProperties.$userImageUrl = res.data.image
    app.config.globalProperties.$userId = res.data.id
    app.config.globalProperties.$userDescription = res.data.description
    app.config.globalProperties.$userSubsCount = res.data.count_followers
  }).catch(err => {
    console.log(err)
  })


  app.config.globalProperties.$getUserData = async (userLink) => {
    return await axios.get(userLink).then((res) => {return res})
  }


})
