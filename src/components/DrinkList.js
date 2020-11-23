import React, { useState, useEffect } from 'react';
import '../App.css';
import { API } from 'aws-amplify';
import { listDrinks } from '../graphql/queries';
import { deleteDrink as deleteDrinkMutation } from '../graphql/mutations';

function DrinkList() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetchDrinks();
  }, []);

  async function fetchDrinks() {
    const apiData = await API.graphql({ query: listDrinks });
    setDrinks(apiData.data.listDrinks.items);
  }

  async function deleteDrink({ id }) {
    const newDrinksArray = drinks.filter(drink => drink.id !== id);
    setDrinks(newDrinksArray);
    await API.graphql({ query: deleteDrinkMutation, variables: { input: { id } }});
  }

  return (
    <div style={{marginBottom: 30}}>
      <h1>Drink List</h1>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
        <div style={{ flex: '1'}}>
          <span>Name</span>
        </div>
        <div style={{ flex: '1'}}>
          <span>Description</span>
        </div>
        <div style={{ flex: '1'}}>
          <span>Ingredients</span>
        </div>
        <div style={{ flex: '1'}}>
          <span>Instructions</span>
        </div>
        <div style={{ flex: '1'}}>
          <span>Author</span>
        </div>
        <div style={{ flex: '1'}}>
          <span>Average Rating</span>
        </div>
      </div>
      {
        drinks.map(drink => (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: '1'}}>
            <span>{drink.name}</span>
          </div>
          <div style={{ flex: '1'}}>
            <span>{drink.description}</span>
          </div>
          <div style={{ flex: '1'}}>
            <span>{drink.ingredients}</span>
          </div>
          <div style={{ flex: '1'}}>
            <span>{drink.instructions}</span>
          </div>
          <div style={{ flex: '1'}}>
            <span>{drink.author}</span>
          </div>
          <div style={{ flex: '1'}}>
            <span>{drink.averageScore}</span>
          </div>
          <div>
            <button onClick={() => deleteDrink(drink)}>Delete drink</button>
          </div>
        </div>
        ))
      }
    </div>
  );
}

export default DrinkList;