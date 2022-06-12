import GeneralInformation from "../ParenClasses/GeneralInformation"

export default class Achievement extends GeneralInformation {
  constructor(props) {
    super(props);
    this.tags = props.tags
    this.category = props.category
    this.lastInicdent = props.days_since_the_last_incident
  }
}
