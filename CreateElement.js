export const createElement = elementType => ({ onClick, children }) => {
  const element = document.createElement(elementType)
  if (onClick) {
    element.addEventListener('click', onClick)
  }
  if (children) {
    children.map(child => element.appendChild(child))
  }
  return element
}

export const createButton = createElement('button')
export const createDiv = createElement('div')
export const createText = text => document.createTextNode(text)
