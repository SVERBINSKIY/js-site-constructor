import {Sidebar} from './classes/Sidebar'
import {Site} from './classes/Site'
import {model} from './model'
import './styles/main.css'

const site = new Site('#site')

const updateCallback = (newBlock) => {
  model.push(newBlock)
  site.render(model)
}

new Sidebar('#panel', updateCallback)

site.render(model)
