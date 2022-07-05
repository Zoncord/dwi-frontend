import GeneralInformation from "src/js/ParenClasses/GeneralInformation";

export default class TimeObject extends GeneralInformation{
  constructor(props) {
    super(props ? props : {});
    this.updateInfo(props)
  }
  updateInfo(props) {
    super.updateInfo(props);
    this.creationDateTime = new Date(props.date_time_of_creation + 'Z')
  }
}
