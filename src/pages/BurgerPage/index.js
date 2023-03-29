import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import { findAllByDisplayValue } from "@testing-library/react";

const INGREDIENT_PRICE = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
const INGREDIENT_NAMES = {
  salad: "Салат",
  cheese: "Бяслаг",
  bacon: "Гахайн мах",
  meat: "Үхрийн мах",
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 1000,
    purchasing: false,
    confirmOrder: false,
  };

  continueOrder = () => {
    console.log("continue daragdlaaa");
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  ortsNemeh = (type) => {
    const newIngredients = { ...this.state.ingredients };

    newIngredients[type]++;

    console.log(newIngredients);

    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

    this.setState({
      purchasing: true,
      totalPrice: newPrice,
      ingredients: newIngredients,
    });
  };

  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };

      newIngredients[type]--;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
      console.log(newIngredients);
      this.setState({
        purchasing: newPrice > 1000,
        totalPrice: newPrice,
        ingredients: newIngredients,
      });
    }
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };

    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <div>
        <div>
          <Modal show={this.state.confirmOrder} close={this.closeConfirmModal}>
            <OrderSummary
              onContinue={this.continueOrder}
              onCancel={this.closeConfirmModal}
              price={this.state.totalPrice}
              ingredients={this.state.ingredients}
              ingredientsNames={INGREDIENT_NAMES}
            />
          </Modal>
          <Burger orts={this.state.ingredients} />
        </div>
        <div>
          <BuildControls
            showConfirmModal={this.showConfirmModal}
            ingredientsNames={INGREDIENT_NAMES}
            disabled={!this.state.purchasing}
            price={this.state.totalPrice}
            ortsNemeh={this.ortsNemeh}
            ortsHasah={this.ortsHasah}
            disabledIngredients={disabledIngredients}
          />
        </div>
      </div>
    );
  }
}

export default BurgerBuilder;
