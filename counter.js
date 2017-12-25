import { createButton, createDiv, createText } from './CreateElement';
import { Component } from './Component';

export default class Counter extends Component {
  constructor(container, props) {
    super(container, props);
    this.state = {
      count: new Number(props.defaultCount)
    }
    this.render();
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  decrement() {
    this.setState({count: this.state.count - 1})
  }

  render() {
    this.container.innerHTML = ''
    this.container.appendChild(
      createDiv({
        children: [
          createText(this.state.count),
          createButton({
            onClick: this.increment.bind(this),
            children: [createText('increment')]
          }),
          createButton({
            onClick: this.decrement.bind(this),
            children: [createText('decrement')]
          })
         ]
      })
    )
  }
}

