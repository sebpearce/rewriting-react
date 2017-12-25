export class Component {
  constructor(container, props) {
    this.container = container
    this.props = props
    this.state = {}
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState
    }
    this.render()
  }

  render() {}
}
