import TimeObject from "src/js/ParenClasses/TimeObject";

export default class BaseComment extends TimeObject{
  constructor(props) {
    super(props ? props : {});
    this.owner = props.author
    this.text = props.text
  }
  get time(){
    return this.creationDateTime.toLocaleTimeString()
  }
  get date(){
    return this.creationDateTime.toLocaleDateString()
  }
}


