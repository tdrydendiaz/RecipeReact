import React, { Component } from 'react';
class FilterableProductTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text:"",
            clicked:true
        }
    }


RecipeList = [{name:"Brownie",Desc:"The special kind",Ingredients:"Choc"},{name:"Pizza",Desc:"Basic",Ingredients:"Cheese & Tomato"},{name:"Sandwich",Desc:"Homemade",Ingredients:"Bacon"},{name:"Spagbol",Desc:"Moms Spagetti",Ingredients:"Spag"}];

updateText = (event) => {
this.setState({
    text:event.target.value 
})
}

updateBox = (event) => {
    this.setState({
        clicked:event.target.checked  
    })
}


render() {
  return (
    <div>
        <SearchBar passedFunction={this.updateText} passedBox={this.updateBox}/>
        <ProductTable text={this.state.text} clicked={this.state.clicked} sportProductList={this.sportProductList} electronicProductList={this.electronicProductList}/>
    </div>
  );
}
}

export default FilterableProductTable;