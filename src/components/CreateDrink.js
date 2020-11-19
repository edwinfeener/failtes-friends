import React, { useState, useEffect } from 'react';
import '../App.css';
import { API } from 'aws-amplify';
import { createDrink as createDrinkMutation } from '../graphql/mutations';

const initialFormState = { name: '', description: '', ingredients: '', instructions: '' }

function CreateDrink() {
  const [formData, setFormData] = useState(initialFormState);

  async function createDrink() {
    if (!formData.name || !formData.description || !formData.ingredients || !formData.instructions) return;
    await API.graphql({ query: createDrinkMutation, variables: { input: formData } });
    setFormData(initialFormState);
  }

  return (
    <div>
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
    </div>
  );
}

export default CreateDrink;