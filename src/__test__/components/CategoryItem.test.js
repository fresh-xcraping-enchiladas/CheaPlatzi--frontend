import { render as stlRender } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';
import CategoryItem from '../../components/CategoryItem.svelte';

describe('<CategoryItem /> Component', () => {  
  test('Check the UI of the CategoryItem component', () => {
    const categoryItem = stlRender(CategoryItem)
  
    expect(categoryItem).toMatchSnapshot()
  })
})