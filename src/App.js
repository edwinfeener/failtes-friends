import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listDrinks } from './graphql/queries';
import { createDrink as createDrinkMutation, deleteDrink as deleteDrinkMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '', ingredients: '', instructions: '' }

function App() {
  const [drinks, setDrinks] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchDrinks();
  }, []);

  async function fetchDrinks() {
    const apiData = await API.graphql({ query: listDrinks });
    setDrinks(apiData.data.listDrinks.items);
  }

  async function createDrink() {
    if (!formData.name || !formData.description || !formData.ingredients || !formData.instructions) return;
    await API.graphql({ query: createDrinkMutation, variables: { input: formData } });
    setDrinks([ ...drinks, formData ]);
    setFormData(initialFormState);
  }

  async function deleteDrink({ id }) {
    const newDrinksArray = drinks.filter(drink => drink.id !== id);
    setDrinks(newDrinksArray);
    await API.graphql({ query: deleteDrinkMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>My Drinks App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Drink name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Drink description"
        value={formData.description}
      />
      <input
        onChange={e => setFormData({ ...formData, 'ingredients': e.target.value})}
        placeholder="Drink ingredients"
        value={formData.ingredients}
      />
      <input
        onChange={e => setFormData({ ...formData, 'instructions': e.target.value})}
        placeholder="Drink instructions"
        value={formData.instructions}
      />
      <button onClick={createDrink}>Create Drink</button>
      <div style={{marginBottom: 30}}>
        {
          drinks.map(drink => (
            <div key={drink.id || drink.name}>
              <h2>{drink.name}</h2>
              <p>{drink.description}</p>
              <p>{drink.instructions}</p>
              <p>{drink.ingredients}</p>
              <button onClick={() => deleteDrink(drink)}>Delete drink</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);