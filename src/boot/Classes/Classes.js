import {boot} from 'quasar/wrappers'

import Post from "src/js/Classes/Post";
import User from "src/js/Classes/User";
import Reply from "src/js/Classes/Reply";
import Comment from "src/js/Classes/Comment";
import Achievement from "src/js/Classes/Achievement";

export default boot(({app}) => {
  app.config.globalProperties.$Achievement = Achievement
  app.config.globalProperties.$Post = Post
  app.config.globalProperties.$User = User
  app.config.globalProperties.$Reply = Reply
  app.config.globalProperties.$Comment = Comment
})
