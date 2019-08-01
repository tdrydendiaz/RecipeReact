import React from 'react';
import { shallow } from 'enzyme';
import MoreDetail from "./Components/MoreDetail";

it("clicks a button", () => {
  const wrapper = shallow(<MoreDetail title="A Title" />);

  expect(wrapper).toMatchSnapshot();

  wrapper.find('[name="Delete Recipe"]').simulate("click");

  expect(wrapper).toMatchSnapshot();
});
