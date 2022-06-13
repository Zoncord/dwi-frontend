import TimeObject from "src/js/ParenClasses/TimeObject"

export default class Post extends TimeObject {
  constructor(props) {
    super(props ? props : {})
    this.achievement = props.achievement

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

