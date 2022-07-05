export default class BaseInformation {
  constructor(props) {
    this.updateInfo(props)
    this.ctx = props.ctx
  }
  updateInfo(props){
    this.id = props.id
    this.url = props.url
  }
}
