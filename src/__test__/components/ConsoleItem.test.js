import { render as stlRender } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';
import ConsoleItem from '../../components/ConsoleItem.svelte';
import playstationMock from './__mocks__/playstation_mock.json'
import switchMock from './__mocks__/switch_mock.json'
import xboxMock from './__mocks__/xbox_mock.json'

describe('<ConsoleItem /> Component', () => {  
  test('Check the UI of the ConsoleItem component', () => {
    const consoleItem = stlRender(ConsoleItem)
  
    expect(consoleItem).toMatchSnapshot()
  })

  test('Check proper render of properties', () => {
    const consoleItem = stlRender(ConsoleItem, {
      ...playstationMock, segment: 'item'
    })

    const title = consoleItem.container.getElementsByTagName('h1')[0]
    expect(title).toHaveTextContent(playstationMock.name)

    const price = consoleItem.container.getElementsByTagName('h2')[0]
    expect(price).toHaveTextContent(playstationMock.price)

    const description = consoleItem.container.getElementsByClassName('description')[0]
    expect(description.textContent).toEqual(playstationMock.description)

    const ecommerce = consoleItem.container
    .getElementsByClassName('item__provider')[0].children[0].textContent
    expect(ecommerce).toEqual('GamePlanet')

    const classList = consoleItem.container.classList.contains('playstation')
    expect(classList).toBeTruthy
  })
})