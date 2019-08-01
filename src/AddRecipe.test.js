import React from "react";
import { mount } from "enzyme";
import AddRecipe from "../AddRecipe";

it("Add A Recipe", () => {

    const wrapper = mount(<AddRecipe />);

    wrapper.find('[name="name"]').instance().value = "choc";
    wrapper.find('[name="desc"]').instance().value = "choc";
    wrapper.find('[name="ingreds"]').instance().value = "choc";
    wrapper.find('[name="image"]').instance().value = "choc";
    wrapper.find("form").simulate("submit");
    expect(wrapper).toMatchSnapshot();
});
