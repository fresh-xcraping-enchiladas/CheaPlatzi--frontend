import { render as stlRender } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../../components/Footer.svelte';

describe('<Footer /> Component', () => {

  test('Shows proper heading when rendered', () => {
    const { getByText } = stlRender(Footer)
    expect(getByText('Copyright 2020 Gamecheap. All rights reserved.')).toBeInTheDocument()
  })

  test('Check the UI of the Footer component', () => {
    const footer = stlRender(Footer)

    expect(footer).toMatchSnapshot()
  })
})