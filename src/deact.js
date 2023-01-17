export default class Deact {
  static createElement(type, props, ...children) {
    const element = document.createElement(type);
    if (props) {
      Object.keys(props).forEach((key) => {
        element[key] = props[key];
      });
    }
    if (children) {
      children.forEach((child) => {
        if (typeof child === "string") {
          child = document.createTextNode(child);
        }
        element.appendChild(child);
      });
    }
    return element;
  }

  static render(elements, container) {
    if (Array.isArray(elements)) {
      container.append(...elements);
    } else {
      container.append(elements);
    }
  }
}

export const { createElement, render } = Deact;
