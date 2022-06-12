import BaseInformation from "src/js/ParenClasses/BaseInformation";

export default class BaseComment extends BaseInformation{
  constructor(props) {
    super(props ? props : {});
    this.owner = props.author
    this.text = props.text
    this.creationDateTime = new Date(props.date_time_of_creation)
  }
  get time(){
    return this.creationDateTime.toLocaleTimeString()
  }
  get date(){
    return this.creationDateTime.toLocaleDateString()
  }
}


