import BaseComment from "src/js/ParenClasses/BaseComment";

export default class Answer extends BaseComment {
  constructor(props) {
    super(props);
    this.comment = props.comment
  }
}
