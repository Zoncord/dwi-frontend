import BaseComment from "src/js/ParenClasses/BaseComment";
import axios from "axios";

export default class Reply extends BaseComment {
  constructor(props) {
    super(props);
    this.comment = props.comment
  }

  /* build function */
  static async build(data) {
    let props = data
    if (data.url && !data.id) {
      props = await Reply.getBE(data.ctx, data.url)
    } else if (data.text && data.comment && !data.id) {
      props = await Reply.createBE(data.ctx, data.text, data.comment)
    }
    return new Reply(props)
  }

  /* getBE function */
  static async getBE(ctx, url) {
    let res = await axios.get(url, {
      headers: {
        Authorization: `Token ${ctx.token()}`
      }
    })
    return res.data
  }

  /* createBE function */
  static async createBE(ctx, text, comment) {
    console.log(text, comment.url, ctx.token())
    let res = await axios.post(`${ctx.$dwiApi}blog/answer/`, {
      text: text,
      comment: comment.url,
    }, {
      headers: {
        Authorization: `Token ${ctx.token()}`
      }
    })
    return res.data
  }

  /* changeBE function */
  async changeBE() {
    await axios.put(`${this.ctx.$dwiApi}blog/answer/${this.id}`, {
      text: this.text,
      comment: this.comment,
    }, {
      headers: {
        Authorization: `Token ${this.ctx.token()}`
      }
    })
  }

  /* deleteBE function */
  async deleteBE() {
    await axios.delete(`${this.ctx.$dwiApi}blog/answer/${this.id}`, {
      headers: {
        Authorization: `Token ${this.ctx.token()}`
      }
    })
  }

  /* changeText function */
  changeText(newText) {
    this.text = newText
  }
}
