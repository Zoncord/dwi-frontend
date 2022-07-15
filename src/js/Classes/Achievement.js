import GeneralInformation from "../ParenClasses/GeneralInformation"
import axios from "axios";

export default class Achievement extends GeneralInformation {
  constructor(ctx, props) {
    if (props){
      props['ctx'] = ctx
    }
    super(props);
    this.tags = props.tags
    this.category = props.category
    this.days = props.days_since_the_last_incident
  }

  static async build(data) {
    let props = data
    if (data.title && data.description && !data.id) {
      props = await Achievement.createBE(data.ctx, data)
    } else if ((data.url || data.id) && !data.title) {
      props = await Achievement.getBE(data.ctx, data)
    }
    return new Achievement(data.ctx, props)
  }

  static async getBE(ctx, data) {
    let res
    if (data.url) {
      res = await axios.get(data.url, {
        headers: {
          Authorization: `Token ${ctx.token()}`
        }
      })
    } else if (data.id) {
      res = await axios.get(`${ctx.$dwiApi}achievements/achievement/${data.id}`, {
        headers: {
          Authorization: `Token ${ctx.token()}`
        }
      })
    }
    return res.data
  }

  static async createBE(ctx, data) {
    let res = await axios.post(`${ctx.$dwiApi}achievements/achievement/`, {
      title: data.title,
      description: data.description,
      tags: data.tags ? data.tags.map(tag => {
        return tag.url
      }) : [],
      category: data.category ? data.category : null,
    }, {
      headers: {
        Authorization: `Token ${ctx.token()}`
      }
    })
    return res.data
  }

  /*deleteBE function */
  async deleteBE() {
    await axios.delete(`${this.ctx.$dwiApi}achievements/achievement/${this.id}`, {
      headers: {
        Authorization: `Token ${this.ctx.token()}`
      }
    })
  }

  /* changeBE function */
  async changeBE() {
    await axios.put(`${this.ctx.$dwiApi}achievements/achievement/${this.id}`, {
      title: this.title,
      description: this.description,
      tags: this.tags.map(tag => {
        return tag.url
      }),
      category: this.category,
    }, {
      headers: {
        Authorization: `Token ${this.ctx.token()}`
      }
    })
  }

  increaseLikes() {
    this.likes++
    axios.post(this.ctx.$dwiApi + `rating/achievement/`, {
      achievement: this.url
    }, {
      headers: {
        Authorization: 'Token ' + this.ctx.token()
      }
    })
  }

  decreaseLikes() {
    this.likes--
  }

  resetDays() {
    this.days = 0
  }
}
