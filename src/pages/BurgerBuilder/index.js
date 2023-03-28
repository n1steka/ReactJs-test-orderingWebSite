import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
  };

  ortsNemeh = type => {
    const  newIngredients = {...this.state.ingredients};
    
    newIngredients[type]++; 

    console.log(newIngredients)
    this.setState({ingredients : newIngredients})


  };
  render() {
    return (
      <div>
        <div>
          {" "}
          <Burger orts={this.state.ingredients} />
        </div>
        <div>
          <BuildControls ortsNemeh={this.ortsNemeh} />
        </div>
      </div>
    );
  }
}

export default BurgerBuilder;
