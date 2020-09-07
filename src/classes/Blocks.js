import {col, row} from '../utils';

class Block {
  constructor(type, value, options) {
    this.type = type
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Method toHTML has been realised...')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super('title', value, options)
  }
  toHTML() {
    const {tag = 'h2', styles} = this.options
    return row(col(`
        <${tag}>${this.value}</${tag}>
    `), styles)
  }
}
export class ImageBlock extends Block {
  constructor(value, options) {
    super('image', value, options)
  }
  toHTML() {
    const {alt, styles, imageStyles} = this.options
    const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}" />`
    return row(html, styles)
  }
}
export class TextBlock extends Block {
  constructor(value, options) {
    super('text', value, options)
  }
  toHTML() {
    return row(col(`
        <p>${this.value}</p>
    `), this.options.styles)
  }
}
export class TextColumnBlock extends Block {
  constructor(value, options) {
    super('textColumns', value, options)
  }
  toHTML() {
    const html = this.value.map(item => col(item))
    return row(html.join(''), this.options.styles)
  }
}