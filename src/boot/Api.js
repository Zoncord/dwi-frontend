import { boot } from 'quasar/wrappers'
async function createAchievement(title) {
  return await this.$axios.post(`${this.$dwiApi}achievements/achievement/`, {
      title: title,
      description: title,
    },
    {
      headers: {
        Authorization: `Token ${this.token()}`
      }
    })
}
async function createPost(title, achievement) {
  return await this.$axios.post(`${this.$dwiApi}blog/post/`, {
    achievement: achievement.url,
    title: title,
    description: title,
  }, {
    headers: {
      Authorization: `Token ${this.token()}`
    }
  })
}
async function deleteAllAchievements() {
  return await this.$axios.get(`${this.$dwiApi}achievements/achievement/`, {
    params: {
      owners: this.$user.id,
    }
  }).then(res => {
    for (let achievement of res.data.results) {
      this.deleteAchievement(achievement.id)
    }
  })
}
async function deleteAchievement(id) {
  return await this.$axios.delete(`${this.$dwiApi}achievements/achievement/${id}`, {
    headers: {
      Authorization: `Token ${this.token()}`
    },
  })
}
async function createComment(title, post) {
  console.log(post.url)
  return await this.$axios.post(`${this.$dwiApi}blog/comment/`, {
    post: post.url,
    text: title,
  }, {
    headers: {
      Authorization: `Token ${this.token()}`
    },
  })
}
function createComplect(title) {
  this.createAchievement(title).then(res => {
      this.createPost(title, res.data).then(res => {
        this.createComment(title, res.data).catch(err => {
          console.log(err)
        })
      })
    }
  )
}

export default boot(({ app }) => {
  app.config.globalProperties.$createComplect = createComplect
  app.config.globalProperties.$createComment = createComment
  app.config.globalProperties.$deleteAchievement = deleteAchievement
  app.config.globalProperties.$deleteAllAchievements = deleteAllAchievements
  app.config.globalProperties.$createPost = createPost
  app.config.globalProperties.$createAchievement = createAchievement
})
