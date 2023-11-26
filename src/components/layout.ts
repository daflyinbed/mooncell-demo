export class MLayout extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    console.log("Custom square element added to page.");
  }

  disconnectedCallback() {
    console.log("Custom square element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom square element moved to new page.");
  }

  // attributeChangedCallback(name, oldValue, newValue) {
  //   console.log("Custom square element attributes changed.");
  // }
}
