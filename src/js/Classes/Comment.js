import BaseComment from "src/js/ParenClasses/BaseComment";

export default class Comment extends BaseComment {
  constructor(props) {
    super(props);
    this.post = props.post
  }
  changeText(newText){
    this.text = newText
  }
}

