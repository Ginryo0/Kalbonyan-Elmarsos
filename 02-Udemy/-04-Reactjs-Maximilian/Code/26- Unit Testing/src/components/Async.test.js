import { render, screen } from '@testing-library/react';
import Async from './Async';
describe('Async Component', () => {
  test('renders posts if request succeeds', async () => {
    // mock fetch fn
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'first paragraph' }],
    });
    render(<Async />);

    // find returns a promise -> you have to await
    //find takes -> role/text.., {exact: }, {timeout: }
    const listItemEls = await screen.findAllByRole('listitem');
    expect(listItemEls).not.toHaveLength(0);
  });
});
