import React, { useState, useEffect } from 'react';
import '../App.css';
import { API } from 'aws-amplify';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          <Typography variant="h6">Name </Typography>
        </div>
        <div>
          <input
            onChange={e => setFormData({ ...formData, 'name': e.target.value})}
            placeholder="Drink name"
            value={formData.name}
          />
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          <Typography variant="h6">Description </Typography>
        </div>
        <div>
          <input
            onChange={e => setFormData({ ...formData, 'description': e.target.value})}
            placeholder="Drink description"
            value={formData.description}
          />
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          <Typography variant="h6">Ingredients </Typography>
        </div>
        <div>
          <input
            onChange={e => setFormData({ ...formData, 'ingredients': e.target.value})}
            placeholder="Drink ingredients"
            value={formData.ingredients}
          />
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          <Typography variant="h6">Instructions </Typography>
        </div>
        <div>
          <input
            onChange={e => setFormData({ ...formData, 'instructions': e.target.value})}
            placeholder="Drink instructions"
            value={formData.instructions}
          />
        </div>
      </div>
      <div>
        <button onClick={createDrink}>Create Drink</button>
      </div>
    </div>
  );
}

export default CreateDrink;