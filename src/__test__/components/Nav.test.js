import { render as stlRender } from '@testing-library/svelte';
//import { logRoles } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../../components/Nav.svelte';

describe('<Nav /> Component', () => {
  test('Should render component correctly', () => {
    const { container } = stlRender(Nav);

    expect(container).toContainHTML("li")
  })
})
