import React from "react";
import { shallow } from "enzyme";
import RecipeThread from "./Components/RecipeThread";

it("contains text", () => {
  const wrapper = shallow(<RecipeThread />);
  expect(wrapper).toMatchSnapshot();
});