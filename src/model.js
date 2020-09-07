import {ImageBlock, TextBlock, TextColumnBlock, TitleBlock} from './classes/Blocks'
import image from './assets/1.png'

export const model = [
  new TitleBlock(
    'Site Constructor on pure JS',
    {
      styles: 'color: #000; text-align: center; text-transform: uppercase; margin: 0 0 15px 0; padding: 15px 0 15px 0; border-bottom: 1px solid #eee;',
      tag: 'h1'
  }),
  new ImageBlock(
    image,
    {
      styles: 'padding: 1rem 0; display: flex; justify-content: center;',
      alt: 'JavaScript Constructor',
      imageStyles: 'width: 800px; height: auto; box-shadow: 0px 10px 8px 0px rgba(34, 60, 80, 0.2);'
    }),
  new TextBlock(
    '<h2>Articles About Pure JS and Frameworks</h2>',
    {styles: 'color: #54486e; text-align: center; font-size: 16px; padding: 0 15px;'}
  ),
  new TextColumnBlock(
    [
      '<h3>JavaScript</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <a href="#">read more</a>',
      '<h3>React</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <a href="#">read more</a>',
      '<h3>NodeJS(Express)</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <a href="#">read more</a>'
    ],
    {styles: 'padding: 15px; max-width: 1200px; margin: 0 auto; background-color: #f8f9fa;'}),
]