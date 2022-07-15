import TimeObject from "src/js/ParenClasses/TimeObject"
import axios from "axios";

export default class Post extends TimeObject {
  constructor(props) {
    super(props ? props : {})
    this.achievement = props.achievement
  }

  /* build function */
  static async build(data) {
    let props = data
    if (data.url && !data.id) {
      props = await Post.getBE(data.ctx, data.url)
    } else if (data.text && data.achievement && !data.id) {
      props = await Post.createBE(data.ctx, data.text, data.achievement)
    }
    return new Post(props)
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
  static async createBE(ctx, text, achievement) {
    let res = await axios.post(`${ctx.$dwiApi}blog/post/`, {
      text: text,
      achievement: achievement,
    }, {
      headers: {
        Authorization: `Token ${ctx.token()}`
      }
    })
    return res.data
  }

  /* changeBE function */
  async changeBE() {
    await axios.put(`${this.ctx.$dwiApi}blog/post/${this.id}`, {
      text: this.text,
      achievement: this.achievement,
    }, {
      headers: {
        Authorization: `Token ${this.ctx.token()}`
      }
    })
  }

  /* deleteBE*/
  async deleteBE() {
    await axios.delete(`${this.ctx.$dwiApi}blog/post/${this.id}`, {
      headers: {
        Authorization: `Token ${this.ctx.token()}`
      }
    })
  }

  get time() {
    return this.creationDateTime.toLocaleTimeString()
  }

  get date() {
    return this.creationDateTime.toLocaleDateString()
  }

  increaseLikes() {
    this.likes++
  }

  decreaseLikes() {
    this.likes--
  }
}

