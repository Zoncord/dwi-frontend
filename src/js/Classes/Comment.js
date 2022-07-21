import BaseComment from "src/js/ParenClasses/BaseComment";
import axios from "axios";
import User from "src/js/Classes/User";

export default class Comment extends BaseComment {
  constructor(ctx, props) {
    props['ctx'] = ctx
    super(props ? props : {});
    this.updateInfo(props)
  }

  updateInfo(props) {
    super.updateInfo(props);
    this.owner = props.owner
    this.parent = props.parent
    this.answers = props.answers
  }

  static async build(data) {
    let props = data
    let ctx = data.ctx
    if (data.url && !data.id) {
      props = await Comment.getBE(ctx, data.url)
    } else if (data.text && data.parent && !data.id) {
      props = await Comment.createBE(ctx, data.text, data.parent)
    }
    let parent
     if (props['parent_comment']) {
      parent = await Comment.build({ctx: ctx, url: props['parent_comment']})
    }
    props.owner = await User.build({ctx: ctx, url: props.owner ? props.owner : props.author})
    props.parent = parent
    return new Comment(ctx, props)
  }

  changeText(newText) {
    this.text = newText
  }

  static async getBE(ctx, url) {
    let res = await axios.get(url, {
      headers: {
        Authorization: `Token ${ctx.token()}`
      }
    })
    return res.data
  }

  static async createBE(ctx, text, parent) {
    let reqData = {
      text: text,
    }
    if (parent.type === 'post') {
      reqData['post'] = parent.url
    } else if (parent.type === 'comment') {
      reqData['parent_comment'] = parent.url
    }

    let req = await axios.post(`${ctx.$dwiApi}blog/comment/`, reqData, {
      headers: {
        Authorization: `Token ${ctx.token()}`
      }
    })
    return req.data
  }

  async changeBE() {
    await axios.put(`${this.ctx.$dwiApi}blog/comment/${this.id}`, {
      text: this.text,
      post: this.parent,
      comment: this.parent,
    }, {
      headers: {
        Authorization: `Token ${this.ctx.token()}`
      }
    })
  }

  async deleteBE() {
    await axios.delete(`${this.ctx.$dwiApi}blog/comment/${this.id}`, {
      headers: {
        Authorization: `Token ${this.ctx.token()}`
      },
    })
  }
}

