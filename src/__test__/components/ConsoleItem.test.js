import { render as stlRender } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';
import ConsoleItem from '../../components/ConsoleItem.svelte';
import playstationMock from './__mocks__/playstation_mock.json'
import cleanText from '../../utils/cleanText';
import { mxnTousd } from '../../stores/currency';

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
    const expectedPrice = new Intl.NumberFormat(
      "en-US", 
      {style: "currency", currency: "USD"}
    )
    .format(playstationMock.price/mxnTousd)
    expect(price).toHaveTextContent(expectedPrice)

    const description = consoleItem.container.getElementsByClassName('description')[0]
    expect(description.textContent).toEqual(cleanText(playstationMock.description))

    const ecommerce = consoleItem.container
    .getElementsByClassName('item__provider')[0].children[0].textContent
    expect(ecommerce).toEqual('Ir a: GamePlanet')

    const classList = consoleItem.container.classList.contains('playstation')
    expect(classList).toBeTruthy
  })

  test('Check that cleanText() function works properly', () =>{
    const descriptionUncleaned = "<div>Esta consola es reacondicionada. \n\n\n    </div>\n";
    const descriptionCleaned = "Esta consola es reacondicionada.";
    const text = cleanText(descriptionUncleaned)
    expect(text).toEqual(descriptionCleaned)
  })
})