import { render as stlRender } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';
import Carousel from '../../components/Carousel.svelte';

describe('<Carousel /> Component', () => {  
  test('Check the UI of the Carousel component', () => {
    const carousel = stlRender(Carousel)
  
    expect(carousel).toMatchSnapshot()
  })
})