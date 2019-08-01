import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../App';
import Nav from '../Components/Nav'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Nav comp', () => {
  const wrapper = shallow(<App />);
  const content = <Nav />;
  expect(wrapper.contains(content)).toEqual(true);
});

it("render a prop", () => {
    const wrapper = shallow(<App name="A Name" />);
    expect(wrapper.instance().props.name).toEqual("A Name");
    expect(wrapper).toMatchSnapshot();
  });
