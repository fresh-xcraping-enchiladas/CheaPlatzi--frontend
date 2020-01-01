import { render as stlRender } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';
import Button from '../../components/Button.svelte';

describe('<Button /> Component', () => {  
  test('Check the UI of the Button component', () => {
    const button = stlRender(Button)
  
    expect(button).toMatchSnapshot()
  })
})