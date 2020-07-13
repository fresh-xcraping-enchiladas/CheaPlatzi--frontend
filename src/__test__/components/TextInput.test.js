import { render as stlRender } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';
import TextInput from '../../components/TextInput.svelte';

describe('<TextInput /> Component', () => {  
  test('Check the UI of the TextInput component', () => {
    const textInput = stlRender(TextInput)
  
    expect(textInput).toMatchSnapshot()
  })
})