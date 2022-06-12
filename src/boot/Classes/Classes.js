import {boot} from 'quasar/wrappers'

import Achievement from "src/js/Classes/Achievement";
import Post from "src/js/Classes/Post";
import User from "src/js/Classes/User";
import Answer from "src/js/Classes/Answer";
import Comment from "src/js/Classes/Comment";

export default boot(({app}) => {
  app.config.globalProperties.$Achievement = Achievement
  app.config.globalProperties.$Post = Post
  app.config.globalProperties.$User = User
  app.config.globalProperties.$Answer = Answer
  app.config.globalProperties.$Comment = Comment
})
