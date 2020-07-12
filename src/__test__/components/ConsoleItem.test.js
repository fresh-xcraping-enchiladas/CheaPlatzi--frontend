import { render as stlRender } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';
import ConsoleItem from '../../components/ConsoleItem.svelte';

describe('<ConsoleItem /> Component', () => {  
  test('Check the UI of the ConsoleItem component', () => {
    const consoleItem = stlRender(ConsoleItem)
  
    expect(consoleItem).toMatchSnapshot()
  })
})