import BaseInformation from "src/js/ParenClasses/BaseInformation";
export default class GeneralUserInformation extends BaseInformation{
  constructor(props) {
    super(props ? props : {});
    if (props) {
      this.user = props.user
      this.name = props.first_name + ' ' + props.last_name
      this.image = props.img
    }
  }
}
