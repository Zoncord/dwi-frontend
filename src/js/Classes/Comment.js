import BaseComment from "src/js/ParenClasses/BaseComment";
import axios from "axios";

export default class Comment extends BaseComment {
  constructor(ctx, props) {
    props['ctx'] = ctx
    super(props ? props : {});
    this.updateInfo(props)
  }

  updateInfo(props) {
    super.updateInfo(props);
    this.parent = props.post ? props.post : props.comment
  }

  static async build(data) {
    let props = data
    if (data.url && !data.id) {
      props = await Comment.getBE(data.ctx, data.url)
    } else if (data.text && data.parent && !data.id) {
      props = await Comment.createBE(data.ctx, data.text, data.parent)
    }
    return new Comment(data.ctx, props)
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

  static async createBE(ctx, text, post) {
    let res = await axios.post(`${ctx.$dwiApi}blog/comment/`, {
      text: text,
      post: post,
    }, {
      headers: {
        Authorization: `Token ${ctx.token()}`
      }
    })
    return res.data
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

