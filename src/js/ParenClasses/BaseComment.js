import TimeObject from "src/js/ParenClasses/TimeObject";

export default class BaseComment extends TimeObject {
  constructor(props) {
    super(props ? props : {});
    this.updateInfo(props)
  }

  updateInfo(props) {
    super.updateInfo(props);
    this.owner = props.author
    this.text = props.text
  }

  get time() {
    try {
      return this.creationDateTime.toLocaleTimeString()
    } catch (err) {
      return null
    }
  }

  get date() {
    try {
      return this.creationDateTime.toLocaleDateString()
    } catch (err) {
      return null
    }
  }
}


