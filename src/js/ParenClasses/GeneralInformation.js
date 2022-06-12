import BaseInformation from "src/js/ParenClasses/BaseInformation";

export default class GeneralInformation extends BaseInformation {
  constructor(props) {
    super(props ? props : {})
    this.owner = props.owners ? props.owners[0] : props.author
    this.title = props.title
    this.slug = props.slug
    this.description = props.description
    this.likes = props.likes_count
  }
}
