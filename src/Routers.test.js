import React from "react";
import { shallow } from "enzyme";
import Routers from "./Components/Routers";

it("contains text", () => {
  const wrapper = shallow(<Routers />);
  expect(wrapper).toMatchSnapshot();
});
