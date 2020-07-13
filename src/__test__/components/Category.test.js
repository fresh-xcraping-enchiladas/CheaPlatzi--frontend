import { render as stlRender } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';
import Category from '../../components/Category.svelte';

describe('<Category /> Component', () => {  
  test('Check the UI of the Category component', () => {
    const category = stlRender(Category)
  
    expect(category).toMatchSnapshot()
  })
})