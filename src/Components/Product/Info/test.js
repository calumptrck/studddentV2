import React from 'react';
import ReactDOM from 'react-dom';
import Info from './Info';
import renderer from 'react-test-renderer';

const tags = ['design', 'development', 'utility']

describe('Home', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Info tags={tags} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Info tags={tags} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});