import React, { Component } from 'react'
import React from "react";

class Cocktails extends Component {
    state = {
        name: "",
        video: "",
        instructions: "",
        image: "",
        ingredients: "",
      }
      componentDidMount(){
        request
          .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.props.match.params.bevs}`)
          .then(response => {
            this.updateDrinks(response.body.drinks)
          })
          .catch(console.error)
      }
    
      updateDrinks(drinks){
        const arrDrinks = []
    
        drinks.map(drink => arrDrinks.push(drink))
    
        console.log('arrDrinks', arrDrinks);
    
        this.setState({
          drinks: arrDrinks
        })
      }
    
      render() {
        return (
          <div>
            <h2>List of cocktails</h2>
            { this.props.match.params.bevs }
            <br />
            <Link to="/"></Link>
            <br />
            <ul>
            {!this.state.drinks ? <p>Loading Cocktails...</p>: this.state.drinks.map(drink => 
            <li key={drink.idDrink}>
              <img src={drink.strDrinkThumb} />
              {drink.strDrink} 
              {drink.strVideo}
              {drink.strInstructions}
              {drink.strDrinkThumb}
              {drink.strIngredient}
              </li>)} 
            </ul>
            
          </div>
        )
      }
}

export default Cocktails;
