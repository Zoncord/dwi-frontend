import GeneralInformation from "src/js/ParenClasses/GeneralInformation";

export default class Post extends GeneralInformation {
  constructor(props) {
    super(props ? props : {})
    this.achievement = props.achievement
    this.creationDateTime = new Date(props.date_time_of_creation)
  }

  get time() {
    return this.creationDateTime.toLocaleTimeString()
  }

  get date() {
    return this.creationDateTime.toLocaleDateString()
  }
  increaseLikes(){
    this.likes++
  }
  decreaseLikes(){
    this.likes--
  }
}

