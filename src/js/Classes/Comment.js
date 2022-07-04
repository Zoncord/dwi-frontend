import BaseComment from "src/js/ParenClasses/BaseComment";
import axios from "axios";

export default class Comment extends BaseComment {
  constructor(props) {
    super(props ? props : {});
    this.post = props.post
  }
  setVars(data){
    this.id = data.id
    this.url = data.url
    this.text = data.text
    this.owner = data.author
    this.post = data.post
    this.creationDateTime = data.date_time_of_creation
  }

  changeText(newText) {
    this.text = newText
  }

  async change(ctx) {

    await axios.put(`${ctx.$dwiApi}blog/comment/${this.id}`, {
      text: this.text,
      post: this.post,
    }, {
      headers: {
        Authorization: `Token ${ctx.token()}`
      }
    })
  }

  async get(){
    await axios.get(this.url, {
     headers: {
       Authorization: `Token ${this.ctx.token()}`
     }
    }).then(res => this.setVars(res.data))
  }

  async create() {
    await axios.post(`${this.ctx.$dwiApi}blog/comment/`, {
      text: this.text,
      post: this.post,
    }, {
      headers: {
        Authorization: `Token ${this.ctx.token()}`
      }
    }).then(res => this.setVars(res.data))
  }

  async deleteBackEnd(ctx) {
    await axios.delete(`${ctx.$dwiApi}blog/comment/${this.id}`, {
      headers: {
        Authorization: `Token ${ctx.token()}`
      },
    })
  }
}

