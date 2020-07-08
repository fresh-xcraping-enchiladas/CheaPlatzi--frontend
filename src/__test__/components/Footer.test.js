import { render as stlRender } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../../components/Footer.svelte';

describe('<Footer /> Component', () => {
  test('Should render component correctly', () => {
    const { container } = stlRender(Footer);

    expect(container).toContainHTML("<body><div><footer><h2>Gamecheap 2020</h2></footer></div></body>")
  })
})

describe('Testing heading', () => {
  test('Shows proper heading when rendered', () => {
    const { getByText } = stlRender(Footer, { name: 'Gamecheap 2020' })
    expect(getByText('Gamecheap 2020')).toBeInTheDocument()
  })
})

describe('Footer Snapshot', () => {
  test('Check the UI of the Footer component', () => {
    const footer = stlRender(Footer)

    expect(footer).toMatchSnapshot()
  })
})