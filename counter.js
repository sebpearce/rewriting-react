// Counter.js
class Counter {
  constructor(element, props) {
    this.element = element
    this.props = props
    this.state = {
      count: new Number(props.defaultCount)
    }
    this.render()
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState
    }
    this.render()
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  decrement() {
    this.setState({count: this.state.count - 1})
  }

  render() {
    this.element.innerHTML = ''
    this.element.appendChild(
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

const createElement = elementType => ({ onClick, children }) => {
  const element = document.createElement(elementType)
  if (onClick) {
    element.addEventListener('click', onClick)
  }
  if (children) {
    children.map(child => element.appendChild(child))
  }
  return element
}

const createButton = createElement('button')
const createDiv = createElement('div')
const createText = text => document.createTextNode(text)
const counters = Array.from(document.querySelectorAll('[data-counter]'));
counters.map(counter => new Counter(counter, JSON.parse(counter.dataset.counter)))

