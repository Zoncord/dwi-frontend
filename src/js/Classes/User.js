import BaseInformation from "src/js/ParenClasses/BaseInformation";
import GeneralUserInformation from "src/js/ParenClasses/GeneralUserInformation";
import axios from "axios";

export default class User extends BaseInformation {
  constructor(props) {
    super(props ? props : {});
    this.description = props.description
    this.followers = props.followers_count
    this.generalInfo = new GeneralUserInformation(props.general_user_information)
  }

  /* build function */
  static async build(data) {
    let props = await User.getBE(data.ctx, data.url)
    return new User(props)
  }
  /* getBE function */
  static async getBE(ctx, url) {
    let res = await axios.get(url, {
      headers: {
        Authorization: `Token ${ctx.token()}`
      }
    })
    res.ctx = ctx
    return res.data
  }


  changeDescription(description) {
    this.description = description
  }

  increaseFollowers() {
    this.followers += 1
  }

  decreaseFollowers() {
    this.followers -= 1
  }
}

